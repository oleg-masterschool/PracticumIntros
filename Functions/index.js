// Creating global and function execution context

console.log(firstVar);
console.log(second);
console.log(third);
console.log(`classic Function: ${classicFunc}`);
console.log(`expression Function: ${expressionFunc}`);

var firstVar = 1;
const second = 2;
let third = 3;

function classicFunc() {
    console.log({ firstVar });
    console.log({ second });
    console.log({ third });
    console.log(forth);
    console.log(fifth);
    var forth = 4;
    const fifth = 5;
    let sixth = 6;

    console.log({ forth });
    console.log({ fifth });
    console.log({ sixth });
}

const expressionFunc = function (someParam) {
    console.log({ firstVar });
    console.log({ second });
    console.log({ third });
    console.log(forth);
    console.log(fifth);
    console.log(`classic Function: ${classicFunc}`);
}

classicFunc();
expressionFunc();

// global Window this
const globalWindow = this;

function globalFunction() {
    console.log(this === globalWindow);
}

const arrow = () => {
    console.log(this === globalWindow);
}

globalFunction();
arrow();

// local this
const User = {
    name: 'John',
    surname: 'Doe',
    fullName: function () {
        return `${this.name} ${this.surname}`;
    }
};

console.log({ name: User.name });
console.log({ full: User.fullName()});

// local this for arrow functions
const User = {
    name: 'John',
    surname: 'Doe',
    fullName: () => {
        return `${this.name} ${this.surname}`;
    }
};


console.log({ name: User.name });
console.log({ full: User.fullName()});

