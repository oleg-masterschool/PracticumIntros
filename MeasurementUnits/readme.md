# Measurement units
## Absolute vs Relative

[mdn reference](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)

_px_ is not really a pixel on the screen

% is relative to its parent container - images in the gallery

% for line-height is relative to the font-size, used as ratio

**em** have no meaning as a word. Relative to the parent's font-size.

nested content with em

https://codepen.io/oleg-masterschool/pen/wvdjZKR

**rem** Same as **em** but relative the root <html> element font-size (default 16px)

scale with a button

```html
<button class="like">Like</button>
```
```css
.like {
  /*font-size: 1em;*/
  border-radius: 2em;
  background-color: blue;
  color: white;
  padding: 0.4em;
  min-width: 5em;
}
```

vh unit is for viewport height 1vh is 1% of the viewport height;

https://codepen.io/oleg-masterschool/pen/GRmdLvY

```css
.hello {
    height: 100vh;
}
```

