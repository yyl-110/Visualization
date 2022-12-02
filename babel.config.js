const plugins = [];
// 生产环境移除console
if (process.env.NODE_ENV === 'production') {
  plugins.push('transform-remove-console');
}
module.exports = {
  plugins: [
    ...plugins,
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk',
      },
    ],
  ],
  presets: [['@vue/app', {useBuiltIns: 'entry', polyfills: ['es6.promise', 'es6.symbol']}]],
};
