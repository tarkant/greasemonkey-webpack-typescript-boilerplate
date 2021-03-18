const path = require('path');
const exec = require('child_process').exec;
const package = require('./package.json');

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  module: {
    rules: [{
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [{
    apply: (compiler) => {
      compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
        exec('node ./post-build.js', (err, stdout, stderr) => {
          if (stdout) process.stdout.write(stdout);
          if (stderr) process.stderr.write(stderr);
        });
      });
    }
  }],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: package.name + '.user.js',
    path: path.resolve(__dirname, 'dist'),
  },
};