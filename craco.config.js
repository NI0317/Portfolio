module.exports = {
  webpack: {
    configure: {
      optimization: {
        minimize: true,
        minimizer: [
          (compiler) => {
            const TerserPlugin = require('terser-webpack-plugin');
            new TerserPlugin({
              terserOptions: {
                compress: {
                  drop_console: true,
                },
                format: {
                  comments: false,
                },
              },
              extractComments: false,
            }).apply(compiler);
          },
        ],
      },
    },
  },
}; 