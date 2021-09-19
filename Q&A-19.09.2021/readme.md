1. How do you make an array immutable?

```js
const immutable = ['one', 'two'];
console.log(immutable);
immutable.push('three');
console.log(immutable);

// change to =>
const immutable = Object.freeze(['one', 'two']);
```
Another way is to use https://immutable-js.com/

2. How do you chain methods?


