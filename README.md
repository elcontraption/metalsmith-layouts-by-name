# Metalsmith Layouts by Name
A Metalsmith plugin to enable setting layouts without extension, and layouts as `[layoutName]/index.html`.

## TODO:
- Add tests

## Installation
```sh
$ npm install metalsmith-layouts-by-name
```

## Usage
```js
var layoutsByName = require('metalsmith-layouts-by-name');
var metalsmith = require('Metalsmith');

metalsmith.use(layoutsByName({

    // Optional: path to your layouts directory, `layouts` by default
    directory: 'path/to/layouts'
}));
```

Now, if your layout is set like this:
```yaml
---
layout: my-layout
---
```
Metalsmith will first check for `my-layout.html`. If that file does not exist, `my-layout/index.html` will be checked.