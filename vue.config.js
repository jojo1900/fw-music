const registerRouter = require('./backend/router')
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 全局引入sass可以识别的 sass 变量和 mixin
        additionalData: `
        @import "@/assets/scss/variable.scss";
        @import "@/assets/scss/mixin.scss";
      `
      }
    }
  },
  //TODO:干啥用的?
  devServer: {
    before(app) {
      registerRouter(app)
    }
  }
}
