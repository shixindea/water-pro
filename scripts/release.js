/**
 * modified from https://github.com/vuejs/vue-next/blob/master/scripts/release.js
 *
 * @format
 */

const fs = require('fs');
const prompts = require('prompts');
const execa = require('execa');
const chalk = require('chalk');
const semver = require('semver');
const { resolve } = require('path');
const pkg = require('../package.json');

const errorLog = (msg, end) => {
  // eslint-disable-next-line no-console
  console.log(chalk.blue.bold(`💦 [Water tool CI]: `), chalk.red(msg));
  if (end) {
    // eslint-disable-next-line no-console
    console.log();
    process.exit(1);
  }
};

const log = (msg) => {
  if (msg) {
    // eslint-disable-next-line no-console
    console.log(chalk.blue.bold(`💦 [Water tool CI]: `), chalk.red(msg));
  } else {
    // eslint-disable-next-line no-console
    console.log();
  }
};

const VERSION_INCREMENTS = [
  'patch',
  'minor',
  'major',
  'prepatch',
  'preminor',
  'premajor',
  'prerelease',
];

const args = require('minimist')(process.argv.slice(2));

const testVersion = (tVersion) => {
  if (!semver.valid(tVersion)) {
    errorLog(`无效的目标版本 -> ${tVersion}`, true);
  }
};

const isDryRun = args.dry;
const skipBuild = args.skipBuild;

const run = (bin, args, opts) => execa(bin, args, { stdio: 'inherit', ...opts });

const dryRun = (bin, args) => log(`[dryrun] ${bin} ${args.join(' ')}`);

const runIfNotDry = isDryRun ? dryRun : run;

function updateVersion(pkgFile, version) {
  const pkg = JSON.parse(fs.readFileSync(pkgFile, 'utf-8'));
  pkg.version = version;
  fs.writeFileSync(pkgFile, `${JSON.stringify(pkg, null, 2)}\n`);
}

async function publishPackage(pkgName, version) {
  const publicArgs = [
    'publish',
    '--non-interactive',
    '--new-version',
    version,
    '--no-git-tag-version',
    '--tag',
    'next',
    '--access',
    'public',
  ];
  try {
    await run('yarn', publicArgs, {
      stdio: 'pipe',
    });
    log('');
    log(`发布成功 ${pkgName}@${version}`);
    log('');
  } catch (e) {
    if (e.stderr.match(/previously published/)) {
      log('');
      log(`跳过已发布的: ${pkgName}`);
      log('');
    } else {
      throw e;
    }
  }
}

async function goRelease(version) {
  let targetVersion = version;
  const pkgDir = process.cwd();
  const pkgPath = resolve(pkgDir, 'package.json');
  // const pkg = (await import(pkgPath)).default;
  const pkgName = pkg.name.replace(/^@fe6\//, '');

  if (!targetVersion) {
    const currentVersion = pkg.version;
    const inc = (i) => semver.inc(currentVersion, i, 'beta');
    const { release } = await prompts({
      type: 'select',
      name: 'release',
      message: '选择发布版本',
      choices: VERSION_INCREMENTS.map((i) => `${i}: (${inc(i)})`)
        .concat(['custom'])
        .map((i) => ({ value: i, title: i })),
    });

    if (release === 'custom') {
      /**
       * @type {{ version }}
       */
      const res = await prompts({
        type: 'text',
        name: 'version',
        message: '输入发布版本',
        initial: currentVersion,
      });
      targetVersion = res.version;
    } else {
      targetVersion = release.match(/\((.*)\)/)[1];
    }
  }

  testVersion(targetVersion);

  const tag = `${pkgName}@${targetVersion}`;

  const { yes } = await prompts({
    type: 'confirm',
    name: 'yes',
    message: `TAG 是 ${tag} 吗?`,
  });

  if (!yes) {
    return;
  }

  log('');
  log('更新包的版本...');
  log('');

  updateVersion(pkgPath, targetVersion);

  log('');
  log(`打包 ${pkgName} ...`);
  log('');

  if (!skipBuild && !isDryRun) {
    const confirmRunBeforeRelease = await prompts({
      type: 'confirm',
      name: 'yes',
      message: `运行 yarn pub 命令了吗?`,
    });

    if (!confirmRunBeforeRelease.yes) {
      return;
    }
  } else {
    log(`(skipped)`);
  }

  const confirmChangelog = await prompts({
    type: 'confirm',
    name: 'yes',
    message: `确定生成 CHANGELONG 吗?`,
  });

  if (!confirmChangelog.yes) {
    return;
  }

  log('');
  log('生成 CHANGELONG...');
  log('');

  await run('yarn', ['run', 'changelog']);

  const confirmGitPush = await prompts({
    type: 'confirm',
    name: 'yes',
    message: `确定将改变提交到 GitHub 吗?`,
  });

  if (!confirmGitPush.yes) {
    return;
  }

  const { stdout } = await run('git', ['diff'], { stdio: 'pipe' });
  if (stdout) {
    log('');
    log('提交 GIT ...');
    log('');

    await runIfNotDry('git', ['add', '-A']);
    await runIfNotDry('git', ['commit', '-m', `release($bump): ${tag}`]);
  } else {
    log('这个仓库没有改变');
  }

  const confirmRelease = await prompts({
    type: 'confirm',
    name: 'yes',
    message: `确定发布 ${pkgName} 的 ${targetVersion} 版本吗?`,
  });

  if (!confirmRelease.yes) {
    return;
  }

  log('');
  log(`${pkg.name} 发布中...`);
  log('');

  await publishPackage(pkgName, targetVersion);

  log('');
  log('提交到 GitHub...');
  log('');

  await runIfNotDry('git', ['tag', tag]);
  await runIfNotDry('git', ['push', 'origin', 'next', tag]);

  if (isDryRun) {
    log(`\nDry run finished - run git diff to see package changes.`);
  }
}

(async () => {
  const targetVersion = args._[0];
  if (targetVersion) {
    testVersion(targetVersion);
  }
  await goRelease(targetVersion);
})();
