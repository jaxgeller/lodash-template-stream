in development


### Use

```js
var fs = require('fs');
var lodashStreamer = require('lodash-template-stream');

var read = fs.createReadStream('./template.html');

read
  .pipe(lodashStreamer({my:'obj'}))
  .pipe(process.stdout);

```