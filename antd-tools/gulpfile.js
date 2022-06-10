/* eslint-disable no-console */
const { getProjectPath, getConfig } = require('./utils/projectHelper');
const runCmd = require('./runCmd');
const getBabelCommonConfig = require('./getBabelCommonConfig');
const merge2 = require('merge2');
const { execSync } = require('child_process');
const through2 = require('through2');
const transformLess = require('./transformLess');
const webpack = require('webpack');
const babel = require('gulp-babel');
const argv = require('minimist')(process.argv.slice(2));

const chalk = require('chalk');
const getChangelog = require('./utils/getChangelog');
const path = require('path');
const ts = require('gulp-typescript');
const gulp = require('gulp');
const fs = require('fs');
const rimraf = require('rimraf');
const stripCode = require('gulp-strip-code');
const compareVersions = require('compare-versions');
const getTSCommonConfig = require('./getTSCommonConfig');
const replaceLib = require('./replaceLib');

const packageJson = require(getProjectPath('package.json'));
const tsDefaultReporter = ts.reporter.defaultReporter();
const cwd = process.cwd();
const libDir = getProjectPath('lib');
const esDir = getProjectPath('es');

const tsConfig = getTSCommonConfig();

function dist(done) {
  rimraf.sync(path.join(cwd, 'dist'));
  process.env.RUN_ENV = 'PRODUCTION';
  const webpackConfig = require(getProjectPath('webpack.build.conf.js'));
  webpack(webpackConfig, (err, stats) => {
    if (err) {
      console.error(err.stack || err);
      if (err.details) {
        console.error(err.details);
      }
      return;
    }

    const info = stats.toJson();

    if (stats.hasErrors()) {
      console.error(info.errors);
    }

    if (stats.hasWarnings()) {
      console.warn(info.warnings);
    }

    const buildInfo = stats.toString({
      colors: true,
      children: true,
      chunks: false,
      modules: false,
      chunkModules: false,
      hash: false,
      version: false,
    });
    console.log(buildInfo);
    done(0);
  });
}

const tsFiles = ['**/*.ts', '**/*.tsx', '!node_modules/**/*.*', 'typings/**/*.d.ts'];

function compileTs(stream) {
  return stream
    .pipe(ts(tsConfig))
    .js.pipe(
      through2.obj(function (file, encoding, next) {
        // console.log(file.path, file.base);
        file.path = file.path.replace(/\.[jt]sx$/, '.js');
        this.push(file);
        next();
      }),
    )
    .pipe(gulp.dest(process.cwd()));
}

gulp.task('tsc', () =>
  compileTs(
    gulp.src(tsFiles, {
      base: cwd,
    }),
  ),
);

function babelify(js, modules) {
  const babelConfig = getBabelCommonConfig(modules);
  babelConfig.babelrc = false;
  delete babelConfig.cacheDirectory;
  if (modules === false) {
    babelConfig.plugins.push(replaceLib);
  }
  let stream = js.pipe(babel(babelConfig)).pipe(
    through2.obj(function z(file, encoding, next) {
      this.push(file.clone());
      if (file.path.match(/\/style\/index\.(js|jsx|ts|tsx)$/)) {
        const content = file.contents.toString(encoding);
        file.contents = Buffer.from(
          content
            .replace(/\/style\/?'/g, "/style/css'")
            .replace(/\/style\/?"/g, '/style/css"')
            .replace(/\.less/g, '.css'),
        );
        file.path = file.path.replace(/index\.(js|jsx|ts|tsx)$/, 'css.js');
        this.push(file);
      } else if (modules !== false) {
        const content = file.contents.toString(encoding);
        file.contents = Buffer.from(
          content
            .replace(/lodash-es/g, 'lodash')
            .replace(/@fe6\/icon-vue/g, '@fe6/icon-vue/lib/icons'),
        );
        this.push(file);
      }
      next();
    }),
  );
  if (modules === false) {
    stream = stream.pipe(
      stripCode({
        start_comment: '@remove-on-es-build-begin',
        end_comment: '@remove-on-es-build-end',
      }),
    );
  }
  return stream.pipe(gulp.dest(modules === false ? esDir : libDir));
}

function compile(modules) {
  const { compile: { transformTSFile, transformFile, includeLessFile = [] } = {} } = getConfig();
  rimraf.sync(modules !== false ? libDir : esDir);

  // =============================== LESS ===============================
  const less = gulp
    .src(['components/**/*.less'])
    .pipe(
      through2.obj(function (file, encoding, next) {
        // Replace content
        const cloneFile = file.clone();
        const content = file.contents.toString().replace(/^\uFEFF/, '');

        cloneFile.contents = Buffer.from(content);

        // Clone for css here since `this.push` will modify file.path
        const cloneCssFile = cloneFile.clone();

        this.push(cloneFile);

        // Transform less file
        if (
          file.path.match(/(\/|\\)style(\/|\\)index\.less$/) ||
          file.path.match(/(\/|\\)style(\/|\\)v2-compatible-reset\.less$/) ||
          includeLessFile.some((regex) => file.path.match(regex))
        ) {
          transformLess(cloneCssFile.contents.toString(), cloneCssFile.path)
            .then((css) => {
              cloneCssFile.contents = Buffer.from(css);
              cloneCssFile.path = cloneCssFile.path.replace(/\.less$/, '.css');
              this.push(cloneCssFile);
              next();
            })
            .catch((e) => {
              console.error(e);
            });
        } else {
          next();
        }
      }),
    )
    .pipe(gulp.dest(modules === false ? esDir : libDir));
  const assets = gulp
    .src(['components/**/*.@(png|svg)'])
    .pipe(gulp.dest(modules === false ? esDir : libDir));
  let error = 0;

  // =============================== FILE ===============================
  let transformFileStream;

  if (transformFile) {
    transformFileStream = gulp
      .src(['components/**/*.tsx'])
      .pipe(
        through2.obj(function (file, encoding, next) {
          let nextFile = transformFile(file) || file;
          nextFile = Array.isArray(nextFile) ? nextFile : [nextFile];
          nextFile.forEach((f) => this.push(f));
          next();
        }),
      )
      .pipe(gulp.dest(modules === false ? esDir : libDir));
  }

  // ================================ TS ================================
  const source = [
    'components/**/*.js',
    'components/**/*.jsx',
    'components/**/*.tsx',
    'components/**/*.ts',
    'typings/**/*.d.ts',
    '!components/*/__tests__/*',
  ];

  // Strip content if needed
  let sourceStream = gulp.src(source);
  if (modules === false) {
    sourceStream = sourceStream.pipe(
      stripCode({
        start_comment: '@remove-on-es-build-begin',
        end_comment: '@remove-on-es-build-end',
      }),
    );
  }

  if (transformTSFile) {
    sourceStream = sourceStream.pipe(
      through2.obj(function (file, encoding, next) {
        let nextFile = transformTSFile(file) || file;
        nextFile = Array.isArray(nextFile) ? nextFile : [nextFile];
        nextFile.forEach((f) => this.push(f));
        next();
      }),
    );
  }

  const tsResult = sourceStream.pipe(
    ts(tsConfig, {
      error(e) {
        tsDefaultReporter.error(e);
        error = 1;
      },
      finish: tsDefaultReporter.finish,
    }),
  );

  function check() {
    if (error && !argv['ignore-error']) {
      process.exit(1);
    }
  }

  tsResult.on('finish', check);
  tsResult.on('end', check);
  const tsFilesStream = babelify(tsResult.js, modules);
  const tsd = tsResult.dts.pipe(gulp.dest(modules === false ? esDir : libDir));
  return merge2([less, tsFilesStream, tsd, assets, transformFileStream].filter((s) => s));
}

gulp.task(
  'check-git',
  gulp.series((done) => {
    runCmd('git', ['status', '--porcelain'], (code, result) => {
      if (/^\?\?/m.test(result)) {
        return done(`There are untracked files in the working tree.\n${result}
      `);
      }
      if (/^([ADRM]| [ADRM])/m.test(result)) {
        return done(`There are uncommitted changes in the working tree.\n${result}
      `);
      }
      return done();
    });
  }),
);

// function publish(tagString, done) {
//   let args = ['publish', '--with-antd-tools'];
//   if (tagString) {
//     args = args.concat(['--tag', tagString]);
//   }
//   const publishNpm = process.env.PUBLISH_NPM_CLI || 'npm';
//   runCmd(publishNpm, args, code => {
//     tag();
//     githubRelease(() => {
//       done(code);
//     });
//   });
// }

function pub(done) {
  const notOk = !packageJson.version.match(/^\d+\.\d+\.\d+$/);
  let tagString;
  if (argv['npm-tag']) {
    tagString = argv['npm-tag'];
  }
  if (!tagString && notOk) {
    tagString = 'next';
  }

  if (packageJson.scripts['pre-publish']) {
    console.log('-----------------------');
    runCmd('npm', ['run', 'pre-publish']);
  }
}

let startTime = new Date();
gulp.task('compile-with-es', (done) => {
  console.log(chalk.blue.bold('💦 [water tool] start compile at '), startTime);
  console.log(chalk.blue.bold('💦 [water tool] Compile to es...'));
  console.log();
  compile(false).on('finish', done);
});

gulp.task('compile-with-lib', (done) => {
  console.log(chalk.blue.bold('💦 [water tool] Compile to js...'));
  console.log();
  compile().on('finish', done);
});

gulp.task(
  'compile',
  gulp.series(gulp.parallel('compile-with-es', 'compile-with-lib'), (done) => {
    console.log(chalk.blue.bold('💦 [water tool] end compile at'), new Date());
    console.log();
    console.log(
      chalk.blue.bold('💦 [water tool] compile time'),
      (new Date() - startTime) / 1000,
      's',
    );
    console.log();
    done();
  }),
);

gulp.task(
  'dist',
  gulp.series((done) => {
    dist(done);
  }),
);

gulp.task(
  'pub',
  gulp.series('check-git', 'compile', 'dist', (done) => {
    pub(done);
  }),
);
