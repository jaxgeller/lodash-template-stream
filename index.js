var fs = require('fs');
var _ = require('lodash');
var through = require('through2');


function lodashStreamer(object) {
  if (!object || typeof object !== 'object') {
    throw new Error('must provide an object to lodash');
  }
  var stream = through(function(chunk, enc, done) {    
    if (chunk.isBuffer) {
      this.emit('error', new Error('Buffers not supported'));
    }
    this.push(_.template(chunk, object))
    done();    
  });

  return stream;
}

module.exports = lodashStreamer;