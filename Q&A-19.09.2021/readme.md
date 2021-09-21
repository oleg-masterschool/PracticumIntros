1. How do you make an array immutable?

```js
const immutable = ['one', 'two'];
console.log(immutable);
immutable.push('three');
console.log(immutable);

// change to =>
const immutable = Object.freeze(['one', 'two']);
```
Another way is to use https://immutable-js.com/

2. How do you chain methods?

const names = [
{
name: "Ron",
rarity: 4,
gender: "Male",
isAvailable: true
},
{
name: "Roniel",
rarity: 3,
gender: "Male",
isAvailable: true
},
{
name: "Ronen",
rarity: 5,
gender: "Male",
isAvailable: true
},
{
name: "Rona",
rarity: 4,
gender: "Female",
isAvailable: true
},
{
name: "Dana",
rarity: 9,
gender: "Female",
isAvailable: true
},
{
name: "Daniella",
rarity: 9,
gender: "Female",
isAvailable: true
},
{
name: "Daniel",
rarity: 10,
gender: "Male",
isAvailable: true
},
{
name: "Dan",
rarity: 9,
gender: "Male",
isAvailable: true
},
{
name: "Guy",
rarity: 8,
gender: "Male",
isAvailable: true
},
{
name: "Michael",
rarity: 8,
gender: "Male",
isAvailable: false
},
{
name: "Avi",
rarity: 8,
gender: "Male",
isAvailable: true
},
{
name: "Aviel",
rarity: 4,
gender: "Male",
isAvailable: false
},
{
name: "Amit",
rarity: 7,
gender: "Male",
isAvailable: true
},
{
name: "Amit",
rarity: 5,
gender: "Female",
isAvailable: true
},
{
name: "Amitay",
rarity: 4,
gender: "Male",
isAvailable: true
},
{
name: "Sarah",
rarity: 4,
gender: "Female",
isAvailable: true
},
{
name: "Saggy",
rarity: 5,
gender: "Male",
isAvailable: true
}
];

function getFlatNames(grouped, property) {
for (const group in grouped) {
grouped[group] = grouped[group].map((item) => item[property]);
}

return grouped;
}

function groupBy(ungrouped, key) {
return ungrouped.reduce(function (acc, item) {
(acc[item[key]] = acc[item[key]] || []).push(item);
return acc;
}, {});
}

// when given at least 2 chars return a list of two groups of names
function nameFinder(query, names) {
if (query.length < 2) {
return [];
}

// const available = names.filter((nameObj) => nameObj.isAvailable);
//   const searched = available.filter(nameObj => nameObj.name.toLowerCase()
//                                     .includes(query.toLowerCase()));
//   const grouped = groupBy(searched, 'gender');

//   const mapped = getFlatNames(grouped, 'name');

//   return mapped;
return names
.filter((nameObj) => nameObj.isAvailable)
.filter((nameObj) =>
nameObj.name.toLowerCase().includes(query.toLowerCase())
)
.groupBy(searched, "gender")
.getFlatNames(grouped, "name");
}

console.log("Empty", nameFinder("", names));
console.log("Less than 2", nameFinder("a", names));
console.log('Searching "sa"', nameFinder("sa", names));
console.log('Searching "Av"', nameFinder("Av", names));
console.log('Searching "Dan"', nameFinder("Dan", names));


// I looked up to see if there is a js equivalent or normalize.css, but didn't find one. I did find normalize(). Is this useful for us? Is there a js equivalent of normalize.css, so you wouldn't have to repeat code like evt.preventDefault?
// Is controlling user input considered a form of validation? For example, for a phone number only numbers are allowed to be entered into the field
// How do you change validation css to null if it is unfocused and not changed?
// Does minifying code really help? What are some best practices to make our code super compact but entirely readable?
// With all we know now, how much more do we need to learn to write mobile apps? Is it that different?
// Which is better to show progress css or js? Can you use transitions when validating? For example use gradients from red to more and more green as a field is correctly inputted...
// Can we see examples of easy popup tooltips that we can make for our forms?
// Can we do for loops so only after each form input is valid will it allow the next one to be filled in? All in the same function use if statements to see what type of input it is (edited)
// Are spell checkers for text fields just a form validation? Could we make one if we wanted to?
// How do we make a library so we don't have to keep repeating all the form codes?
