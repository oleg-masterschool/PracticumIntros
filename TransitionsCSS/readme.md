# CSS transitions
https://caniuse.com/css-transitions

Not everything can be animated:
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties

```css

/*Normalize*/

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  max-width: 100%;
  }

/*Parent styles*/
.parent {
background-color: lightblue;
height: 300px;
display: flex;
align-items: center;
justify-content: center;
}

/*Child properties*/


.btn {
font-size: 20px;
font-weight: 500;
line-height: 1;
color: white;
background-color: coral;
width: 200px;
height: 70px;
border: none;
cursor:pointer;
border-radius: 4px;
}
```

### Hover animation 

```css


.btn:hover {
transform: scale(1.1);
}

.btn {
transition: transform 250ms;
}
```
You can mix them too with comma
```css
.btn {
transition: transform 250ms, opacity 400ms;
}
.btn:hover {
transform: scale(1.1);
opacity: 0;
}
```


transition: ALL is a bad idea

## Timing functions
```css


.btn {
transition-timing-function: linear;
}

/*Shorthand*/
.btn {
transition: transform 250ms linear;
}
```


### Ease in
https://www.joshwcomeau.com/animation/css-transitions/#ease-in

```css
.btn {
transition: transform 250ms ease-in;
}
```
### Ease out
https://www.joshwcomeau.com/animation/css-transitions/#ease-out

```css
.btn {
    transition: transform 250ms ease-out;
}

```

### Ease in out
https://www.joshwcomeau.com/animation/css-transitions/#ease-in-out
```css
.btn {
transition: transform 250ms ease-in-out;
}
```


### Ease
https://www.joshwcomeau.com/animation/css-transitions/#ease
```css
.btn {
transition: transform 250ms ease;
}

```

### Cubic bezier
Making custom timing functions:
https://cubic-bezier.com/

### Will change property
.btn {
will-change: transform;
}

Properties like margin-top can't sub-pixel-render, which means they need to round to the nearest pixel,
creating a stepped, janky effect. transform, meanwhile, can smoothly shift between pixels, 
thanks to the GPU's anti-aliasing trickery.


### Delays
https://www.joshwcomeau.com/animation/css-transitions/#delays
Dropdown example



## Custom Animations
```css
@keyframes bounceIn {
    0% {
        transform: scale(0.1);
        opacity: 0;
    }
    60% {
        transform: scale(1.2);
        opacity: 1;
    }
    100% {
        transform: scale(1);
    }
}

.btn {
    animation-duration: 2s;
    animation-name: bounceIn;
}
```

### Animation shorthand
animation: [animation-name] [animation-duration] [animation-timing-function]
[animation-delay] [animation-iteration-count] [animation-direction]
[animation-fill-mode] [animation-play-state];

### Box-shadow
Built-in tool in Chrome's inspect

### Overflow 
Use sparingly. Overflow is extremely difficult to debug. Can lead to very bad layout in children

### Text overflow
https://css-tricks.com/snippets/css/truncate-string-with-ellipsis/