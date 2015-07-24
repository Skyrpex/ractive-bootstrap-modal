var browserify = require('browserify');
var babelify = require('babelify');
var ractivate = require('ractivate');
var brfs = require('brfs');
var fs = require('fs');

var bundler = browserify({
  entries: 'index',
  basedir: 'src',
  transform: [
    [babelify, { loose: 'all' }],
    [brfs]
  ],
  standalone: 'Ractive.components.Modal'
});

bundler.exclude('ractive');
bundler.exclude('ractive-transitions-fade');
bundler.exclude('ractive-transitions-fly');

bundler.bundle(function (error, stream) {
  if (error) throw error;
  fs.writeFile('lib/index.js', stream.toString(), function (error) {
    if (error) throw error;
  });
});
