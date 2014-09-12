# lodash-template-stream


[![Build Status](https://travis-ci.org/jacksongeller/lodash-template-stream.svg)](https://travis-ci.org/jacksongeller/lodash-template-stream)


### Install 

`npm install lodash-template-stream --save`


### Use

```js
var fs = require('fs');
var lodashStreamer = require('lodash-template-stream');

var read = fs.createReadStream('./template.html');

read
  .pipe(lodashStreamer({my:'obj'}))
  .pipe(process.stdout);

```


### Examples

```js


```