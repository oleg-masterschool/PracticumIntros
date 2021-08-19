// 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

// Old ways
// getElementById
const nav = document.getElementById('navigation')

// getElementsByClassName
const navItems = document.getElementsByClassName('nav__item');

// querySelector + querySelectorAll
// A- finding in the entire DOM
const header = document.querySelector('header'); // -> <header>

const logoName = document.querySelector('#logo-name');
logoName.textContent = "Prakticum";

const firstPlace = document.querySelector('.place:nth-of-type(1)');

// B- finding within a particular element
const imageFirstPlace = document.querySelector('.place img');
const titleFirstPlace = document.querySelector('.place .header__title');
const textFirstPlace = document.querySelector('.place .text__paragraph');

// C- traversing with dot notation
const firstPlaceLinkText = firstPlace.querySelector('.link__text');
const secondParagraphFirstPlace = textFirstPlace.nextElementSibling;
const thirdParagraphFirstPlace = secondParagraphFirstPlace.nextElementSibling;


// 2- Finding collections of elements in the DOM

// A- Find all the anchor tags inside the nav element
const links = document.querySelectorAll('nav a');

// B- Loop over the links and console.log their text content
links.forEach(link => console.log(link.textContent));

// C- Turn the collection of links into a real array
const linksArray = Array.from(links);
console.log(linksArray);

// D- Use .find / .filter to find the anchor tag with the "textContent" of "Home"
const foundElement = linksArray.find(link => link.textContent === 'Home');
const foundElement = linksArray.filter(link => link.textContent === 'Home');
console.log(foundElement);

// 3- Changing an element's text content
// A- Change New Hampshire into Tel Aviv
titleFirstPlace.textContent = 'Tel Aviv';
//  B- Have the students research online the difference between "textContent" and "innerText"


// 4- Changing any property
// A- Using dot notation to change a few attributes
titleFirstPlace.className = 'city hot weather';
imageFirstPlace.src = '/assets/cute-dog.jpeg';

//  B- Using .setAttribute to change a few attributes

firstPlaceLinkText.setAttribute('href', 'https://unsplash.com/s/photos/dog');
console.log(firstPlaceLinkText);

// 5- Changing the styling of an element
// A- By changing the class names on the element with the classList
header.classList.add('sky');
header.classList.remove('sky');
// B- By manipulating inline styles on the element
header.style.fontSize = '2em';

// 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const blogLink = document.createElement('a');
blogLink.textContent = 'Blog';
blogLink.href = '#';

document.querySelector('nav').appendChild(blogLink);

// 7- Making a copy of the "article" and appending it to the "articles"
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
const secondPlace = firstPlace.cloneNode(true);
document.querySelector('.articles').appendChild(secondPlace);
