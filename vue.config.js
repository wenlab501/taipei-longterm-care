const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: '/taipei-longterm-care/',
  transpileDependencies: true,
  devServer: {
    port: 8080,
    host: 'localhost',
  },
});
