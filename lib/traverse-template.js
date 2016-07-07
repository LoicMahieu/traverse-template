
const traverse = require('traverse')
const template = require('es6-template')

module.exports = (obj, locals = obj) => {
  traverse(obj).forEach(function (value) {
    if (typeof value === 'string') {
      this.update(template(value, locals))
    }
  })

  return obj
}
