
# mutate v1.0.0 

Safely mutate a property with a multi-part path.

Objects are created on-the-fly and overwrite non-object values!

```js
const mutate = require('mutate')

const obj = {}
mutate(obj, 'a.b', 1)

obj.a // => {b: 1}
```

