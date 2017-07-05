module.exports =  {
  sourceMap: true,
  ident: 'postcss',
  parser: 'postcss-scss',
  plugins: (webpack) => {
    return [
      require("postcss-import")({ addDependencyTo: webpack }),
      require('autoprefixer'),
      require('doiuse')({
        ignore: ['rem', 'flexbox','viewport-units', 'pointer-events'],
        ignoreFiles: ['**/antd/**']
      })
    ]
  }
};
