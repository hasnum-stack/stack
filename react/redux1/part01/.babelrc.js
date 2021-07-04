module.exports = {
  presets: ['react-app'],
  plugins: [
    [
      'import',
      //antd/es/${component}/style/css.js
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
};
