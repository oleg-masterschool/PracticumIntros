## Object Oriented Programming in JS

OOP is just a way of organizing code. As we write code for humans we tend to make things understandable to people,
rather than the compiler. And people think in terms objects with behaviors rather than functions.

When you don't need OOP:

- Can complicate code  
  `The problem with object-oriented languages is they’ve got all this implicit environment that they carry around
with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle.`
- You can do with simple objects
- Scott Mayers:  
`He basically says, unless there's a real compelling reason to, you should keep the function SEPARATE from the class.
  Otherwise the class can turn into this big bloated unmanageable mess.`

OOP is just a tool, like functional programming. Your code has to be expressive, choose the best suited tool!

**Encapsulation** - the biggest benefit, can be used without classes  
- public / private
- implementation detail
- exposing interface
```js
class Person {
    constructor({ name, surname }) {
        this._name = name;
        this._surname = surname;
        this._occupation;
    }
    
    fullName() {
        return `${this._name} ${this._surname}`; 
    }
}

const bella = new Person({ name: 'Bella', surname: 'Swan'});
console.log(bella.fullName());
```

```js
const personObj = {
  name: 'Bella',
  surname: 'Swan'
};

function fullName(person) {
  return `${person.name} ${person.surname}`; 
}

console.log(fullName(personObj));
```
**Polymorphism** - shape-shifting, different instances of the same class with different properties/behaviors  
```js
class Creature extends Person {
    constructor(params) {
        super(params);
        this._hasVerySharpTeeth = true;
        this._isImmortal = true;
        this._strength = 0;
    }
}

class Vampire extends Creature {
  constructor(params) {
    super.constructor(params);
    this._strength = 100;
  }
  
  drawsBlood() {
      this._strength += 50;
  }
}

const edward = new Vampire({ name: 'Edward', surname: 'Cullen'});

class Werewolf extends Creature {
  constructor(params) {
    super.constructor(params);
    this._isWolfShape = false;
    this._strength = 50;
  }
  
  shapeShifts(isFullMoon = false) {
    this._isWolfShape = isFullMoon;
    this._strength = isFullMoon ? 100 : 50;
  }
  
  
}

const jacob = new Werewolf({ name: 'Jacob', surname: 'Black' });
```
**Inheritance** - the biggest danger - having a long inheritance chain makes your code very difficult to understand / debug  
What's about the Zombies?

Functional refactor



