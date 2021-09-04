## Closure

Motivation:

1. Interview question
2. Understanding JS deeply
3. Why callbacks and event listeners work

### Scopes

Each function creates its own scope with variables. Scope is a mechanism that sets boundaries between functions

```js
function first() {
    const index = 1;

    console.log({index});
}

function second() {
    const index = 99;

    console.log({index});
}

first();
second();
```

### Scope nesting

```js
function outer() {
    const outerVariable = 10;

    function inner() {
        console.log({outerVariable});
    }
}

outer();
```

`inner()` sees the outer scope and uses the `outerVariable`

### Lexical scope

```js
const globalVariable = 100;

function outer() {
    const outerVariable = 10;
    console.log('outer', {globalVariable});

    function inner() {
        const innerVariable = 99;
        console.log('inner', {outerVariable, globalVariable, innerVariable});

        function deep() {
            console.log('deep', {outerVariable, globalVariable, innerVariable});
        }

        deep();
    }
}

outer();
```

Process of looking up variables in scopes

### Closure

Go back to example:

```js
function outer() {
    let outerVar = 'I am outside!';

    function inner() {
        console.log(outerVar);
    }

    inner();
}

outer();
```

Executed inside the lexical scope of `outer` function. Let's make a little edit:

```js
function outer() {
    let outerVar = 'I am outside!';

    function inner() {
        console.log(outerVar);
    }

    return inner;
}

const innerExp = outer();
innerExp();
```

It still works - `innerExp` still has access to the `outer`s scope even though we ran it outside its lexical scope This
is closure - `innerExp` closes over the variable `outerVar` from outer scope

closure is a function that remembers the relevant variables from where it was defined, even if it is executed outside
its lexical scope

### Examples

#### Event handler

#### Callback

```js
const message = 'I am closed over';

setTimeout(function callback() {
    console.log(message);
}, 500);
```

#### Functional programming

```js
function sum(a) {
    return function executeSum(b) {
        return a + b;
    }
}

const add3 = sum(3);
add3(6);
add3(10);

const add5 = sum(5);
add5(4);
```

Homework make a multiply function

### Additional info

https://dmitripavlutin.com/simple-explanation-of-javascript-closures/
https://frontendmasters.com/courses/getting-started-javascript-v2/closure/
