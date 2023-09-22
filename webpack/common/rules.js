const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { PATHS } = require('../utils/constants')

const rules = [
  {
    test: /\.pug$/,
    include: `${PATHS.pug}`,
    loader: 'pug-loader',
    options: {
      pretty: true,
    },
  },
  {
    test: /\.m?js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  },
  {
    test: /\.scss$/,
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
  },
  {
    test: /\.(gif|png|jpe?g|svg|ttf)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          outputPath: `${PATHS.dist}/assets/images/`,
          name: (file) => file.split(/\/(images|node_modules)\//).pop(),
        },
      },
    ],
  },
]

module.exports = rules
