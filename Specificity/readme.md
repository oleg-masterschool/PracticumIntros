CSS is hard when you don't understand specificity. Apart from being a difficult word to pronounce, specificity is how
browsers decide which rule applies to a certain element.

https://drafts.csswg.org/selectors-3/#specificity

Done!

Example 1:
```css

h2 {
  color: red;
}

h2 {
  color: green;
}
```

What ever comes last!

What if we target the same element via different properties???
class? id? element tag?

```css
.article__header {
  color: green;
}

h2 {
  color: blue;
}

#header {
  color: red;
}
```

For every element the browser assigns 4 different values, 4 different specificities.
Style, id, class, element

```css
/*0, 0, 1, 0*/
.article__header {
  color: green;
}

/*0, 0, 0, 1*/
h2 {
  color: blue;
}

/*0, 1, 0, 0*/
#header {
  color: red;
}
```

Inline styles are even more specific
```html
<!--1, 0, 0, 0-->
<h2 class="article__header" id="header" style="color: #000">Caption</h2>
```
We can combine them too:

```css
/*0, 0, 1, 1*/
h2.article__header{
  color: blue;
}

/*0, 0, 1, 0*/
.article__header {
    color: green;
}

```

The order of specificity is super important, so if you have lots of classes to target the same element

```css
/*0, 0, 3, 0*/
.article__header.my_header.super_header {
    color: green;
}
```

It's enough to override this rule with a single rule with greater specificity:

```css
/*0, 1, 0, 0*/
#header {
    color: darkcyan;
}
```

Now important! adds its own level of specificity above the mentioned, but it follows the general rules of specificity

Direct sibling doesn't increase specificity: >, +, ~