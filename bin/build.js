var fs = require('fs');
var path = require('path');
var brfs = require('brfs');
var through2 = require('through2');
var babel = require('babel');

var file = 'src/index.js';

var rs = fs.createReadStream(file)
  .pipe(through2(function (chunk, enc, callback) {
    var result = babel.transform(chunk, { loose: 'all' });

    this.push(result.code);

    callback();
   }))
  .pipe(brfs(file))
  .pipe(fs.createWriteStream('lib/index.js'));
