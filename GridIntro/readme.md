# Grid layout

## Grid vs Flex

https://x-team.com/blog/css-grid-vs-flexbox/

One-dimensional vs two-dimensional

Adding grid to the CSS

```css
.grid {
    display: grid;
    grid-template-columns: 800px 800px;
    grid-template-columns: 50% 50%;
}
```

```css
.grid {
    display: grid;
    grid-template-columns: 70% 30%;
}
```

### Adding more columns

```css
.grid {
    display: grid;
    grid-template-columns: 40% 20% 20%;
}
```

### Grid gap

```css
.grid {
    grid-template-columns: 50% 30% 10%;
    row-gap: 5%;
    column-gap: 5%;
    gap: 5%;
    gap: 20px;
}
```

both of these declarations will cause overflow

how am I gonna fix it?

https://stackoverflow.com/questions/48214281/why-does-grid-gap-cause-an-overflow

the chosen solution will be:

```css
.grid {
    display: grid;
    grid-template-columns: 5fr 3fr 2fr;
    gap: 20px;
}
```

Now we need learn about the mysterious **fr** unit

It's a **fr**action. Reminds us of the **flex-grow**; **flex-shrink**

It's a relative unit with takes up the remaining space after **gap**!

Defining 4 equal columns with a gap will be:

```css
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
}
```

Or as lazy coders will have it:

```css
.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}
```

Combine them too:)

```css
.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr) repeat(2, 2fr) 3fr;
    gap: 20px;
}
```

### Styling Grid Rows

Rows with fixed height:

```css
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 100px;
    gap: 20px;
}
```
What if the content overflows?

```css
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: minmax(100px, auto);
    gap: 20px;
}
```

Nested grid - behaves as expected

### Using together with FlexBox properties

https://codepen.io/oleg-masterschool/pen/WNjJqeX

justify-items - row alignment
align-items - column alignment

```css
.grid {
    align-items: flex-start;
    justify-items: flex-start;
    
    place-items: flex-start;
}
```

## Spanning columns and rows with Grid
Compared to working with `<tables>` it's a breath!

### Custom grid items:

```css
.box2 {
  grid-column: 2/4;
  grid-row: 1/3;
}
```

Overlaying grid items:

```css
.box1 {
  grid-column: 1/2;
  grid-row: 1/4;
}

.box4 {
  grid-column: 1;
  grid-row: 2/3;
}
```

You can specify z-index to overrule default position placement

Area mention