traverse-template
============

[![Greenkeeper badge](https://badges.greenkeeper.io/LoicMahieu/traverse-template.svg)](https://greenkeeper.io/)

[![Build Status](http://img.shields.io/travis/LoicMahieu/traverse-template.svg?style=flat-square)](https://travis-ci.org/LoicMahieu/traverse-template)
[![npm version](https://img.shields.io/npm/v/traverse-template.svg?style=flat-square)](http://badge.fury.io/js/traverse-template)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/LoicMahieu/traverse-template/master/LICENSE)

Traverse object for templating values


## Install

### npm

```
$ npm install traverse-template
```


## Usage

### Basic

```javascript
var obj = traverseTemplate({
  greeting: 'Hello',
  hello_tony: '${greeting} Tony'
})

// Will output
{
  greeting: 'Hello',
  hello_tony: 'Hello Tony'
}
```

### With given locals

```javascript
var obj = traverseTemplate({
  hello_tony: '${greeting} Tony'
}, {
  greeting: 'Hello'
})

// Will output
{
  bar: 'Hello Tony'
}
```

### Nested support

```javascript
var obj = traverseTemplate({
  greets: [
    '${greeting} Tony',
    '${greeting} Boy'
  ],
  foo: {
    bar: '${greeting}'
  }
}, {
  greeting: 'Hello'
})

// Will output
{
  greets: [
    'Hello Tony',
    'Hello Body'
  ],
  foo: {
    bar: 'Hello'
  }
}
```

## License
Released under the [MIT Licence](https://raw.githubusercontent.com/LoicMahieu/traverse-template/master/LICENSE)


## Author
[Loïc Mahieu](https://github.com/LoicMahieu/)
