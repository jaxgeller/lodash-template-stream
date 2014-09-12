var assert = require('assert');
var fs = require('fs');
var _ = require('lodash');
var streamer = require('../');

var lodashObject = {
  title: 'this is the title',
  heading: 'this is my headig',
  li: 'this is my li',
  paragraph: 'this is my paragraph'
}

var holder = '';



describe('streamer', function() {

  it('should be able to compile lodash templates', function(done) {

    var file = fs.createReadStream('./test/testTemplate.html')
      .pipe(streamer(lodashObject));

    file.on('data', function(d) {
      holder += d;
    });

    file.on('end', function() {
      if (holder !== _.template(fs.readFileSync('./test/testTemplate.html').toString(), lodashObject)) {
        return done(new Error('did not match'))
      } else {
        return done()
      }
    });
  });
});