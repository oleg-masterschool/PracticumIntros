Finally, we move from mark up to "real" programming language - Javascript. It was created by Brendan Eich in two sprints
It's called now ECMAScript ES for short
You can see a fairly recent podcast with the creator https://youtu.be/krB0enBeSiE


## Variables
### Naming Conventions
should not start with a capital letter
variables must be a letter `a - z` or `_` or `$` 
don't use reserved words
don't add types
use meaningful names!

`camelCase` - the most common convention
`snake_case`
`kabab-case` - not allowed in JS

### Demo
var + redeclaring + re-assigning

how to test???  
`console.log`

Same with `let`

Same with `const`

### Var, let, const and their differences

What's a scope?  
Block scope, function scope, global scope

**var**

can be redeclared  
can be reassigned  
function scoped

**let**

cannot be redeclared  
can be reassigned  
block scoped

**const**

cannot be redeclared  
cannot be reassigned  
block scoped

```js
function functionScopeExample(){
  var iWantOut = 'I want out!!!';
  // return iWantOut;
}

console.log(functionScopeExample());
```
## Functions

// Functions
// protect a block of code until it's invoked
// it should be reusable
// parameters - placeholder values
// when we invoke the function we provide arguments which take the place of the parameters when the function runs

// Function Declaration

// what this document does
// console.log(add(5,4));

// how this document does it
// function add(num1, num2){
//   return num1 + num2;
// }

// console.log(add(5,4));

// Function Expression

// const add = function(num1, num2){
//   return num1 + num2;
// }

// console.log(add(5,4));


// Arrow Function
// We do not use arrow functions inside of objects!
// const add = (num1, num2) => num1 + num2;

// console.log(add(5,4));

// const sayHi = name => `hello ${name}`;

// console.log(sayHi('Anthony'));

Endless loops
boolean
hoisting?


Kyle Simpson - You don't know JS
Javascript the good parts book