const waterPro = require('./components');

const req = require.context('./components', true, /^\.\/locale\/.+_.+\.tsx$/);

waterPro.locales = {};

req.keys().forEach((mod) => {
  const matches = mod.match(/\/([^/]+).tsx$/);
  waterPro.locales[matches[1]] = req(mod).default;
});

module.exports = waterPro;
