## Functions intro

### Function definition

```js
/**
 * meaningfulName does something important
 * @param understandableParam1
 * @param understandableParam2
 * @returns {{}}
 */
function meaningfulName(understandableParam1, understandableParam2) { //add defaults where applicable
    const newObject = {};
    
    return newObject;
}

function takesALot(param1, param2, param3, ...rest) {
    const { arg1, arg2 } = rest;
}
```

Params vs args

```js
takesALot(arg1, arg2, arg3, additional, additional2);
```

Functions with side effects

## Function execution context

Whenever a function is defined and executed it behaves like a little program all in itself.
Meaning it creates its own **execution context**. What is an execution context? Glad, you asked:
Since the beginning of execution JS engine in the browser creates an environment where it runs: 
we call it creating **global execution contexft**. These include:
- allocating memory to store variables globally
- assigning the variables to `undefined`
- **hoisting** _function_ and _var_ declarations into memory
- defining global scope
- assigning the value of **this** to *Window*

Note - function expressions are not hoisted, **let**, **const** are not hoisted either.  
Same process happens when creating environment for functions.

Example for hoisting  
Example for window

Function execution context summary

- allocating memory to store local variables
- assigning the variables to `undefined`
- **hoisting** _function_ and _var_ declarations into memory
- defining function scope
- assigning the value of **this** to the object it runs inside (*Window* or else)
