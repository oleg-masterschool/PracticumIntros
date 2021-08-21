# Arrays 
Arrays are a JS way to hold a list of items where the order is important.  
*Item*  
Item's position is *index*  
Index starts at 0  
The quantity of items in the array is *length*  

```js
const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']

```

https://www.pinterest.com/pin/335588609729861939/

for loop  
last item


## Array methods

Two families of methods - **mutable** and **immutable**  
Changes the original array and the other returns a new array without changing the array

reverse() is dangerous: changes and returns

https://media.giphy.com/media/iYmBjyuOaoGdMv6EgN/giphy.gif?cid=790b7611a108a2f24c731643bf52cbe752fdbdf127b8761a&rid=giphy.gif&ct=g

Spread operator (...) to make a new array

.slice / .splice  
.shift / .unshift

```js
planets.push('Pluto')
planets.pop('Pluto')
```

### Exercise
Create a new solar system (without changing the original array) with all the existing planets 
and add a new planet named "Arrakis"(or your favourite planet) as the closest to the new Sun. 
+ Console log your system
+ Console log your planet

### Solution  

## Immutable Array methods
The preferred way of working with arrays! 

```js
[].map();
[].filter();
[].forEach();
[].find();
[].findIndex();
```
Remember to read the documentation to use the full power (index)

```js
[].reduce()
```
https://youtu.be/qaGjS7-qWzg

