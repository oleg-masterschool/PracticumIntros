## Callbacks and Promises

# Synchronous vs asynchronous

Synchronous - when instructions are executed in linear fashion - one after another. Even it is an `if` clause, it still
executes linearly.

*Examples* - `vehiclesInventory.renderItems();`

These operations can be `thread-blocking` - since JS is `single-threaded`, executes one thing at a time, execution of
instructions can take a long time.

Asynchronous - opposite of synchronous - when the code execution is paused, or performed in the background or executed
as a response to a trigger, like 'click'

So how does it work? Handle image click example => `_handleImageClick`

# Callbacks

We have learned about callbacks Example - `.forEach`

Callbacks can be sync or async

# SetTimeout

# Interval

example

```html
<template class="holler">
    <p class="holler__item">I am on a boat!!!</p>
</template>
```

```js
// Vehicle.js
if (this._element.classList.contains(vehicleActiveClass) && this._element.classList.contains('water')) {
    const hollersElement = this._element.querySelector('.vehicle__hollers');
    const holler = document
        .querySelector('.holler')
        .content
        .querySelector('.holler__item')
        .cloneNode(true);

    hollersElement.append(holler);
}
```

let's add interval

```js
// Vehicle.js
_boatHoller()
{
    const hollersElement = this._element.querySelector('.vehicle__hollers');
    const holler = document
        .querySelector('.holler')
        .content
        .querySelector('.holler__item')
        .cloneNode(true);

    hollersElement.append(holler);
}

_handleImageClick()
{
    clearInterval(this.hollerInterval);

    this._element
        .classList.toggle(vehicleActiveClass);

    if (this._element.classList.contains(vehicleActiveClass) && this._element.classList.contains('water')) {
        this.hollerInterval = setInterval(() => this._boatHoller(), 500);
    }
}

constructor()
{
    // ...
    this.hollerInterval;
}
```

## Promises

Just like in real life we have promises in JS  
Dominos pizza promises to deliver within 30 min and if they fail - you don't pay  
When you take mortgage from a bank you promise repay every month and if you fail - you will be fined or even
foreclosed  
Or when you are assigned a project you promise to finish within a week - and if you fail you will be severely
reprimanded

How do we write promises?

```js
let examplePromise = new Promise(function (resolve, reject) {  // or in arrow notation (resolve, reject) => {
    const number = 1 + 1;

    if (number == 2) {
        resolve("Project is finished successfully");
    } else {
        reject("Project failed miserably");
    }
});

examplePromise.then((message) => {
    console.log(`Passes message from THEN ${message}`);
}).catch((message) => {
    console.log(`Catches message from CATCH ${message}`);
});
```

## Promises and callbacks

```js
const tookVacation = false;
const workedOnCodeJam = false;

function workOnProjectCallback(callback, errorCallback) {
    if (tookVacation) {
        errorCallback({
            type: 'VacationTypeFailure',
            message: 'Did not finish on time - took a week off'
        });
    } else if (workedOnCodeJam) {
        errorCallback({
            type: 'CodeJamFailure',
            message: 'Spent day and night on code jam instead of working on a project!'
        });
    } else {
        callback("Another project to add to profile!");
    }
}

const successCallback = (message) => {
    console.log(`Passes message from THEN => ${message}`);
};

const errorCallback = (error) => {
    console.log(`Catches message from CATCH => ${error.message}`);
};

workOnProjectCallback(successCallback, errorCallback);
```

Now the same but with Promises:

```js
const tookVacation = false;
const workedOnCodeJam = false;

function workOnProjectPromise() {
    return new Promise((resolve, reject) => {
        if (tookVacation) {
            reject({
                type: 'VacationTypeFailure',
                message: 'Did not finish on time - took a week off'
            });
        } else if (workedOnCodeJam) {
            reject({
                type: 'CodeJamFailure',
                message: 'Spent day and night on code jam instead of working on a project!'
            });
        } else {
            resolve("Another project to add to profile!");
        }
    });
}

workOnProjectPromise()
    .then((message) => {
        console.log(`Passes message from THEN ${message}`);
    })
    .catch((error) => {
        console.log(`Catches message from CATCH ${error.message}`);
    });
```

Working on multiple promises  

```js
const workOnTheProject = new Promise(function (resolve) {  
    resolve('Finished the project!');
})

const workOnCodeJam = new Promise(function (resolve) {
    resolve('Finished code Jam!');
})

Promise
    .all([workOnTheProject, workOnCodeJam])
    .then((messages) => {
        console.log(messages);
    });

```