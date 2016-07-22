'user strict';
const gulp = require('gulp');
const	server = require('gulp-develop-server');
const	webpack = require('webpack');
const gulpUtil = require('gulp-util');

// run server
gulp.task('server:start', ['define', 'build'], () => {
  server.listen({
    path: './build/index.js',
    env: {
      NODE_ENV: 'development'
    }
  });
});

// restart server if app.js changed
gulp.task('server:restart', () => {
  server.restart();
});

gulp.task('build', (callback) => {
  const bundler = webpack(require('./webpack_config'));
  var bundleCount = 0;
  function bundle(err, stats) {
    if (err) {
      throw new gulpUtil.PluginError('build', err);
    }
    gulpUtil.log('[build]', stats.toString({
      chunks: false, // Makes the build much quieter
      colors: true
    }));
    if (++bundleCount === 1) {
      callback();
    }
  }
  if (global.WATCH) {
    bundler.watch({
      aggregateTimeout: 500
    }, bundle);
  } else {
    bundler.run(bundle);
  }
});
gulp.task('watch', ['server:start'], () => {
  gulp.watch(['./build/*.js'], ['server:restart']);
});

gulp.task('define', (callback) => {
  global.WATCH = true;
  callback();
});

gulp.task('default', ['define', 'build', 'server:start', 'watch']);
