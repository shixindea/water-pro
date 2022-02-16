/* eslint-disable @typescript-eslint/no-var-requires */
const globby = require('globby');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { ESLint } = require('eslint');

(async () => {
  const paths = await globby('utils/*/index.*.md');
  const utils = {};

  paths.forEach((path) => {
    const content = fs.readFileSync(path).toString();
    const utilsName = path.split('/')[1];

    // if (utilsName !== 'color-picker') {
    const { data } = matter(content);
    utils[utilsName] = { ...utils[utilsName], ...data };
    // }
  });
  const TEMPLATE = `
export default [
  ${Object.keys(utils).map(
    (component) => `
  {
    path: '${component}:lang(-cn)?',
    meta: ${JSON.stringify(utils[component])},
    component: () => import('../../../utils/${component}/demo/index.vue'),
  }`,
  )}
];`;

  const engine = new ESLint({
    fix: true,
    useEslintrc: false,
    baseConfig: require(path.join(process.cwd(), '.eslintrc.js')),
  });

  const report = await engine.lintText(TEMPLATE);

  fs.writeFileSync('site/src/router/utilsRoutes.js', report[0].output);
})();
