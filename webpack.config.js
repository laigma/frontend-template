var path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = env => {
  // Use env.<YOUR VARIABLE> here:
  console.log('Development: ', env.development); // 'local'
  console.log('Production: ', env.production); // true

  return {
    //Input
    entry: path.resolve(__dirname, 'src', 'main.js'),

    stats: { warnings: false },

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js'
    },

    plugins: [
      new Dotenv({
        path: `./.env.${env.development == true ? "development" : "production"}`,
        safe: true
      }),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        title: 'Plantilla'
      })
    ],
    optimization: {
      runtimeChunk: 'single', //runtime.hash.js
      splitChunks: {
        chunks: 'all', //vendors~main.hash.js
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

              return packageName;
            }
          }
        }
      }
    },
    module: {
      rules: [{
        test: /\.s(c|a)ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            // Requires sass-loader@^8.0.0
            options: {
              implementation: require('sass'),
              sassOptions: {
                fiber: require('fibers'),
                indentedSyntax: true // optional
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ]
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.(png|jpg|eot|ttf|woff2|woff|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
        //Se ejecuta en primer luega el último elemento del array
        //use[2] = 'less-loader'
        //use[1] = 'css-loader'
        //use[0] = 'style-loader'
      }
      ]
    },
    devServer: {
      port: 8082,
      overlay: true,
      host: '0.0.0.0' //Para docker
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      }
    }
  }
}