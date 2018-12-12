const {injectBabelPlugin} = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const path = require('path');

function resolve (dir) {
  return path.join(__dirname, '.', dir);
}

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', {libraryName: 'antd', libraryIdrectory: 'es', style: true}],
    config
  );

  // 路径别名
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': resolve('src/components'),
    '_ac': resolve('src/actions'),
    '_api': resolve('src/api'),
    '_v': resolve('src/view'),
    '_lib': resolve('src/lib'),
    '_config': resolve('src/config')
  }
  // config = rewireLess.withLoaderOptions({
  //   modifyVars: { "@primary-color": "#78a5f1" },
  //   javascriptEnabled: true,
  // })(config, env)
  return config;
};
