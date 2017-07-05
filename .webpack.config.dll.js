import webpack from 'webpack';
import path from 'path';

export default {
  entry: {
    vendor: [path.join(__dirname, "client", "src", "vendors.js")]
  },
  output: {
    path: path.join(__dirname, "client", "build", "dll"),
    filename: "dll.[name].js",
    library: "[name]"
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, "client", "dll", "[name]-manifest.json"),
      name: "[name]",
      context: path.resolve(__dirname, "client", "src")
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
  resolve: {
    modules: [path.resolve(__dirname, "client", "src"), "node_modules"],
    extensions: ['*', '.js', '.jsx', '.json'],
  },
};
