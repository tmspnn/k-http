module.exports = {
  mode: "production",
  devtool: "cheap-eval-source-map",
  entry: __dirname + "/src/k-http.ts",
  output: {
    path: __dirname + "/dist",
    filename: "k-http.js",
    library: "kHttp",
    libraryExport: "default",
    libraryTarget: "umd",
    globalObject: "this"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "awesome-typescript-loader"
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  }
};
