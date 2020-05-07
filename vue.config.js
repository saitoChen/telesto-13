module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.0.107:3000',
        changeOrigin: true
      }
    }
  },
  productionSourceMap: false,
  configureWebpack: { // 不打包以下资源，从外部引入
    externals: {
      'vue': 'Vue',
      'vuex': 'Vuex',
      'axios': 'axios',
      'swiper': 'Swiper'
    }
  }
}