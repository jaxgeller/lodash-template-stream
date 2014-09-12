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


```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title><%= title %></title>
</head>
<body>
  <div>
    <h1> <%= heading%></h1>
    <ul>
      <li><%= li %></li>
    </ul>
    <p> <%= paragraph %></p>
  </div>
</body>
</html>
```

```js
fs.createReadStream('./template.html')
  .pipe(lodash({
    title: 'this is the title',
    heading: 'this is my headig',
    li: 'this is my li',
    paragraph: 'this is my paragraph'
  }))
  .pipe(fs.createWriteStream('./compiled.html'));
```

```html
<!-- Compiles to -->
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>this is my title</title>
</head>
<body>
  <div>
    <h1> this is my heading </h1>
    <ul>
      <li> this is my li </li>
    </ul>
    <p> this is my paragraph </p>
  </div>
</body>
</html>
```



