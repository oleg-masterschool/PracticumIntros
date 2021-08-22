const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

console.log(planets[0]);
console.log(planets[1]);
console.log(planets[2]);
console.log(planets[3]);
console.log(planets[4]);

for (let i = 0; i < planets.length; i++) {
    console.log(`${planets[i]} is the ${i+1} planet from the Sun`);
}

console.log(planets[planets.length - 1])

console.log(planets.reverse())


// Solution

function mySystem(oldPlanets) {
    const planets = [...oldPlanets];
    planets.unshift('Arrakis');

    return planets;
}

const myNewSystem = mySystem(planets);

console.log(`Original array: ${planets}`);
console.log(`New array: ${myNewSystem}`);
console.log(`Favourite planet: ${myNewSystem[0]}`);

// Reduce


const numbersList = [2, 5, 3, 6];

const result = numbersList.reduce(function sum(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

const result2 = numbersList.reduce(function product(accumulator, currentValue) {
    return accumulator * currentValue;
}, 1);
