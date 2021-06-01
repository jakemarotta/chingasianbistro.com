const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: "./src/assets",
        components: "./src/components",
        pages: "./src/pages",
        router: "./src/router",
        utils: "./src/utils",
      }
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerPort: 8888,
      }),
    ],
  },
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-loader")
        .tap(options => {
          if (!options) options = {};
          options.transformAssetUrls = {
            video: ['src', 'poster'],
            source: 'src',
            img: 'src',
            image: 'xlink:href',
            'b-avatar': 'src',
            'b-img': 'src',
            'b-img-lazy': ['src', 'blank-src'],
            'b-card': 'img-src',
            'b-card-img': 'src',
            'b-card-img-lazy': ['src', 'blank-src'],
            'b-carousel-slide': 'img-src',
            'b-embed': 'src'
          };
          return options;
        })
  }
}