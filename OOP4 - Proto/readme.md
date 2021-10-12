Every object in js has `__proto__` - that's a property that allows to access properties of another

```js
const daddy = {
    strong: 'I am very strong'
};

const mommy = {
    smart: 'I am very smart'
}

const baby = {
    happy: 'Goooo'
}

mommy.__proto__ = daddy;
baby.__proto__ = mommy;

console.log('mommy: ', mommy.strong);
console.log('baby: ', baby.strong);
console.log('baby: ', baby.smart);
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

factory function

```js
function createPerson(name, surname) {
    const newPerson = {
        name,
        surname,
        occupation: '',
        fullName: function () {
            return `${newPerson._name} ${newPerson._surname}`;
        }
    }

    return newPerson;
}
```

every created new object will have the copy of the same function

```js
const personPrototype = {
    fullName: function () {
        return `${this._name} ${this._surname}`;
    }
}
// let's check what happens when we Object.create

function createPerson(name, surname) {
    const newPerson = Object.create(personPrototype);
    newPerson.name = name;
    newPerson.surname = surname;
    newPerson.occupation = '';

    return newPerson;
}
```

New

-Creates a new empty object with a prototype linked to it.
-Adds all necessary properties to this object.
-Returns this object.

```js
function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.occupation = '';

    //return newPerson;
}

Person.prototype.fullName = function () {
    return `${this._name} ${this._surname}`;
}

const Ella = new Person('Ella', 'Mendes')
```

`__proto__` vs `prototype`