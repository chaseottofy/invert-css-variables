# invert-css-variables

> getting it ready for npm currently

This is a simple package that inverts the colors of CSS variables in bulk. After not finding a similar tool that did this, I've decided to share my own since I find myself using it quite often when it comes to creating a dark/light theme for a website.

Covers all of the supported color formats in CSS: Hex, RGB, RGBA, HSL, and HSLA. 

## Table of Contents

- [Supported Color Formats](#supported-color-formats)
- [Examples](#examples)
- [License](#license)

<!-- ## Installation

To install `invertColorsInRoot` via NPM:

```bash
npm install invert-colors-in-root
``` -->

## Usage

```javascript
const input = `
  --accent-1: #111;
  --accent-2: rgb(255,170,204);
  --accent-3: hsl(340,100%,88%);
`;

const result = invert(input);
/*
result = `
  --accent-1: #eee;
  --accent-2: rgb(0,85,51);
  --accent-3: hsl(160,100%,88%);
`;
*/

```

## Supported Color Formats

- Hex (both short `#123` and long `#112233` formats)
- RGB (`rgb(255,255,255)`)
- RGBA (`rgba(255,255,255,0.5)`)
- HSL (`hsl(120,100%,50%)`)
- HSLA (`hsla(120,100%,50%,0.5)`)

## Examples

### Input

```
  --accent-1: #111;
  --accent-2: rgb(255,170,204);
  --accent-3: hsl(340,100%,88%);
```

### Output

```
  --accent-1: #eee;
  --accent-2: rgb(0,85,51);
  --accent-3: hsl(160,100%,88%);
```

## License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.
