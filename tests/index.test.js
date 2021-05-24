import pkg from '../package.json';

const testDist = process.env.LIB_DIR === 'dist';

describe('water dist files', () => {
  // https://github.com/ant-design/ant-design/issues/1638
  // https://github.com/ant-design/ant-design/issues/1968
  it('exports modules correctly', () => {
    const water = testDist ? require('../dist/water') : require('../components'); // eslint-disable-line global-require
    expect(Object.keys(water)).toMatchSnapshot();
  });

  // https://github.com/ant-design/ant-design/issues/1970
  // https://github.com/ant-design/ant-design/issues/1804
  if (testDist) {
    it('should have water.version', () => {
      const water = require('../dist/water'); // eslint-disable-line global-require
      expect(water.version).toBe(pkg.version);
    });
  }
});
