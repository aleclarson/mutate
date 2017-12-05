
const isObject = require('is-object')

function mutate(obj, path, value) {
  if (!isObject(obj)) {
    throw Error('Expected an object')
  }
  if (typeof path == 'string') {
    path = path.split('.')
  }
  const len = path.length
  path.forEach((part, i) => {
    if (i < len - 1) {
      const parent = obj
      obj = parent[part]
      if (!isObject(obj)) {
        parent[part] = obj = {}
      }
    } else {
      obj[part] = value
    }
  })
}

module.exports = mutate
