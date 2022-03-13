export default {
  entry: ['src/foo.tsx'],
  //  'src/fpp'
  doc: {
    themeConfig: { mode: 'dark' },
    base: '/your-repo',
  },
  esm: { type: 'babel' },
  umd: {
    globals: {
      react: 'React',
    },
  },
  // extraBabelPresets
  // extraBabelPlugins: [
  //   [
  //     require.resolve('@babel/plugin-transform-runtime'),
  //     {
  //       absoluteRuntime: false,
  //       corejs: 3,
  //       version: '^7.7.4',
  //     },
  //     'customTransformRuntimeConf',
  //   ],
  // ],
  runtimeHelpers: true,
};
