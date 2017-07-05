// For info about this file refer to webpack and webpack-hot-middleware documentation
// For info on how we're generating bundles with hashed filenames for cache busting: https://medium.com/@okonetchnikov/long-term-caching-of-static-assets-with-webpack-1ecb139adb95#.w99i89nsz
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';
import path from 'path';
import antDesignThemeConfig from './client/src/styles/antd.theme.config';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
  __DEV__: false,
  traceDeprecation: true
};

const extractCSS_SASS_SCSS = new ExtractTextPlugin('[name].[contenthash].css');
const extractLESS = new ExtractTextPlugin({
  filename: "[name].[contenthash].css"
});

export default {
  resolve: {
    modules: [path.resolve(__dirname, "client/src"), "node_modules"],
    extensions: ['*', '.js', '.jsx', '.json'],
  },
  devtool: 'source-map', // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
  entry: path.resolve(__dirname, 'client/src/index'),
  target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  output: {
    path: path.resolve(__dirname, 'client/build'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    // Hash the files using MD5 so that their names change when the content changes.
    new WebpackMd5Hash(),

    // Tells React to build in prod mode. https://facebook.github.io/react/downloads.html
    new webpack.DefinePlugin(GLOBALS),

    // Generate an external css file with a hash in the filename from less styles
    extractLESS,

    // Generate an external css file with a hash in the filename from css, sass and scss styles
    extractCSS_SASS_SCSS,

    // Generate HTML file that contains references to generated bundles. See here for how this works: https://github.com/ampedandwired/html-webpack-plugin#basic-usage
    new HtmlWebpackPlugin({
      developmentMode: false,
      template: 'client/src/index.ejs',
      favicon: 'client/src/favicon.ico',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true,
      // Note that you can add custom options here if you need to handle other custom logic in index.html
      // To track JavaScript errors via TrackJS, sign up for a free trial at TrackJS.com and enter your token below.
      trackJSToken: ''
    }),

    // Minify JS
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),

    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      noInfo: true, // set to false to see a list of every file being bundled.
      options: {
        sassLoader: {
          includePaths: [path.resolve(__dirname, 'client/src', 'client/scss')]
        },
        context: '/',
        postcss: () => [autoprefixer],
      }
    }),

    // vendor dll
    new webpack.DllReferencePlugin({
      context: path.join(__dirname, "client"),
      manifest: require("./client/dll/vendor-manifest.json")
    }),
  ],
  module: {
    rules: [
      {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?name=[name].[ext]'},
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=[name].[ext]'},
      {test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=[name].[ext]'},
      {test: /\.svg(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=[name].[ext]'},
      {test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=[name].[ext]'},
      {test: /\.ico$/, loader: 'file-loader?name=[name].[ext]'},
      {test: /(\.css|\.scss|\.sass)$/, loader: extractCSS_SASS_SCSS.extract('css-loader?sourceMap!postcss-loader!sass-loader?sourceMap')},
      {test: /\.less$/, loader: extractLESS.extract('css-loader?sourceMap!postcss-loader!less-loader?{"sourceMap":true,"modifyVars":' + JSON.stringify(antDesignThemeConfig) + '}')}
    ]
  }
};
