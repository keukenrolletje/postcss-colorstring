# PostCSS colorstring [![Build Status][ci-img]][ci]

[PostCSS] plugin to turn any string into a valid color.

based on http://stackoverflow.com/questions/8318911/why-does-html-think-chucknorris-is-a-color and http://scrappy-do.blogspot.be/2004/08/little-rant-about-microsoft-internet.html

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/keukenrolletje/postcss-celebcolors.svg
[ci]:      https://travis-ci.org/keukenrolletje/postcss-celebcolors

```css
.foo {
  color-ie:  Supercalifragilisticexpialidocious;
}
```

```css
.foo {
  color: #0c000c;
}
```

## Usage

```js
postcss([ require('postcss-celebcolors') ])
```

See [PostCSS] docs for examples for your environment.
