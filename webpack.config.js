// This library allows us to combine paths easily
const path = require('path');
module.exports = {
   entry: path.resolve(__dirname, 'app.jsx'),
   output: {
      path: path.resolve(__dirname, 'output'),
      filename: 'bundle.js'
   },
   resolve: {
      extensions: ['.js', '.jsx']
   },
   module: {
      rules: [
         {
             test: /\.jsx/,
             use: {
                loader: 'babel-loader',
                options: { presets: ['react', 'es2015'] }
             }
         },
         {
            test: /\.css/,
            use: ['style-loader', 'css-loader', 'sass-loader']
         }
      ]
   },
   devServer: {
      // moved index.html up to root for GH Pages to work
      // contentBase: './src',
      publicPath: '/output'
   },
   mode: 'development'
};