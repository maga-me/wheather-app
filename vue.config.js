const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    workboxOptions: {
      exclude: [/_redirects/]
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? ''
  : '/'
})