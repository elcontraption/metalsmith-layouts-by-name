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
var layouts = require('metalsmith-layouts');
var layoutsByName = require('metalsmith-layouts-by-name');
var metalsmith = require('Metalsmith');

// Make sure you add this plugin before metalsmith-layouts:
metalsmith
    .use(layoutsByName({
        // Optional: path to your layouts directory, `layouts` by default
        directory: 'path/to/layouts'
    }))
    .use(layouts());
```

Now, if your layout is set like this:
```yaml
---
layout: my-layout
---
```
Metalsmith will first check for `my-layout.html`. If that file does not exist, `my-layout/index.html` will be checked.