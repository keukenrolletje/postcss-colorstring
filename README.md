# PostCSS Celebcolors [![Build Status][ci-img]][ci]

[PostCSS] plugin to turn any string into a valid color.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/keukenrolletje/postcss-celebcolors.svg
[ci]:      https://travis-ci.org/keukenrolletje/postcss-celebcolors

```css
.foo {
  color:  Supercalifragilisticexpialidocious;
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
