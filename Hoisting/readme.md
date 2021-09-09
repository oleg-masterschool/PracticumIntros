## Hoisting

Hoisting is a JS mechanism where variables and func declarations are moved to the top of their respective scope before
code execution.

Declarations are moved; assignments remain in place

Scope is created by function or code block and defines the boundaries of variable accessibility

Before execution the engine passes over the code and does the following:

```js

function createsScope() {
    let counter = 0;

    counter += 1;
    console.log({counter});
}

console.log(counter);
```

```js

function createsScope() {
    let counter = 0;

    counter += 1;
    console.log({counter});
}

console.log(counter);
console.log(typeof counter); // undefined
console.log(typeof index); // reference error
var counter;
let index;
```

Process:
Declaration `var counter;`
Init / Assigment `counter = 1;`
Init / Assigment `var counter = 1;`
Use `counter = counter + 99;`

All undeclared variables are global variables. always declare variables regardless of whether they are in a function or
global scope.

```js
function hoisting() {
    bad = 20;
    var ok = 200;
}

hoisting();

console.log(bad);
console.log(ok);
```

Only the declarations are hoisted

```js
console.log(hoisted);
var hoisted = 'The variable has been hoisted';
```

The interpreter sees:

```js
var hoisted;

console.log(hoisted); // => undefined
hoisted = 'The variable has been hoisted';
```

### Rule of thumb: declare and assign **before** use

Same with function scope

Things are getting better with 'use strict'

```js
'use strict';

console.log(hoist);
hoist = 'hoisted';
```

Using **let** in ES6

```js
console.log(hoist); // Reference error
let hoist = 'The variable has been hoisted.';
```

This helps ensure that you only use declared variables However, you still need to assign them too!

```js
let hoist;

console.log(hoist); // undefined
hoist = 'Hoisted'
```

Const must be both declared and initialized before use.

Functions are hoisted, function expressions not!

```js
expression(); //Output: "TypeError: expression is not a function

var expression = function () {
    console.log('Will this work?');
};
```

Another subtle bug to avoid:
Variable assignment goes before function declaration

```js
var double = 22;

function double(num) {
    return (num * 2);
}

console.log(typeof double); // Output: number
```

Function declaration goes before variable declaration

```js
var double;

function double(num) {
    return (num * 2);
}

console.log(typeof double); // Output: function
```

## Summary

Let’s summarise what we’ve learned so far:

While using ES5 **var**, trying to use undeclared variables will lead to the variable being assigned a value of _
undefined_ when hoisting. 
While using ES6 **let** and **const**, using undeclared variables will lead to a _Reference Error_
because the variable remains uninitialised at execution.

We should make it a habit to **declare and initialise JavaScript variables before use**. Using **strict mode** in
JavaScript es5 can help expose undeclared variables.

https://www.digitalocean.com/community/tutorials/understanding-hoisting-in-javascript

Scopes in https://frontendmasters.com/courses/getting-started-javascript-v2/