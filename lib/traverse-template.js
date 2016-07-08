
const traverse = require('traverse')
const template = require('es6-template')

module.exports = function (obj, locals) {
  traverse(obj).forEach(function (value) {
    if (typeof value === 'string') {
      this.update(template(value, locals || obj))
    }
  })

  return obj
}
