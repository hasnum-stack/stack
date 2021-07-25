const { override, fixBabelImports } = require('customize-cra');
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    libraryDirectory: 'lib',
    style: 'css', //或者true, true代表运用less
  })
);
