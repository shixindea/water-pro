'use strict';

const fs = require('fs');
const assign = require('object-assign');
const { getProjectPath } = require('./utils/projectHelper');

module.exports = function() {
  let my = {};
  if (fs.existsSync(getProjectPath('tsconfig.json'))) {
    my = require(getProjectPath('tsconfig.json'));
  }
  return assign(
    {
      noUnusedParameters: true,
      noStrictGenericChecks: true,
      noUnusedLocals: true,
      strict: false,
      skipDefaultLibCheck: true,
      suppressExcessPropertyErrors: true,
      strictNullChecks: true,
      target: 'es6',
      allowUnreachableCode: true,
      allowUnusedLabels: true,
      importHelpers: true,
      locale: 'zh-cn',
      jsx: 'preserve',
      module: 'esnext',
      moduleResolution: 'node',
      declaration: true,
      allowSyntheticDefaultImports: true,
    },
    my.compilerOptions,
  );
};
