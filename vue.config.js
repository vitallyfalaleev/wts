module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/wts/'
      : '/',
  transpileDependencies: [
    "vuetify"
  ]
}
