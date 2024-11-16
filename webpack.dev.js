// const { merge } = require('webpack-merge');
// const common = require('./webpack.common.js');

// module.exports = merge(common, {
//   mode: 'development',
//   devtool: 'source-map',
//   devServer: {
//     static: './dist',
//     setupMiddlewares: (middlewares, devServer) => {
//       if (!devServer) {
//         throw new Error('webpack-dev-server is not defined');
//       }

//       return middlewares;
//     },
//   },
// });
