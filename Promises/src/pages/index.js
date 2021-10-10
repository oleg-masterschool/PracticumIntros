import { Garage } from "../components/Garage.js";
import { vehicles } from "../data/index.js";

const garageSelector = '.garage';

const vehiclesInventory = new Garage({ data: vehicles }, garageSelector);

vehiclesInventory.renderItems();

// const examplePromise = new Promise(function (resolve, reject) { // resolve, reject => {
//     const num = 1 + 3;
//
//     if (num === 2) {
//         resolve('Everything is peachy!');
//     } else {
//         reject('Not so great!');
//     }
// });
//
// examplePromise
//     .then(text => {
//         console.log(`Came from THEN / FULFILLED => ${text}`);
//     })
//     .catch((message) => {
//         console.log(`Came from Reject => ${message}`);
//     });
//
const tookVacation = false;
const workedOnCodeJam = true;

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

const successCallback = text => {
    console.log(`Came from THEN / FULFILLED => ${text}`);
};

const failureCallback = error => {
    console.log(`Came from FAILED => ${error.message}`);
}

// workOnProjectCallback(successCallback, failureCallback);

function workOnProjectPromise() {
    return new Promise((resolve, reject) => {
        console.log('Running a promise');
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
//
// workOnProjectPromise()
//     .then(successCallback)
//     .catch(failureCallback);

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

