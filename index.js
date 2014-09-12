var _ = require('lodash');
var through = require('through2');

module.exports = function(object) {
  through2(function(chunk, enc, done) {    
    var compiled = _.template(chunk, object);
    this.push(compiled)
    return done();    
  }));
}