import "./style.css";
import stepsSrc from "./images/steps.png";

let someStr = "I coded. I saved. I bundled.";


const d = new Set();

d.add('one');
d.add('two');
d.add('three');
d.add('three');
console.log(d.size);
console.log("Hello, World!");


const numbers = [2, 3, 5];
const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); // 4, 6, 10

const stepsImage = document.getElementById("image-steps");
stepsImage.src = stepsSrc;