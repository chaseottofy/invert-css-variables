# invert-css-variables

> Will make available in a simple web interface soon...

Convert CSS variable colors in bulk.

Simplify the process of converting your Dark/Light themes by inverting your CSS variables in bulk. Maintains the variable names and spacing, and supports all of the color formats in CSS even if they are mixed.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Supported Color Formats](#supported-color-formats)
- [License](#license)

## Installation

To install `invert-css` via NPM:
 
```bash
npm i invert-css
```

## Usage

```javascript
import invert from 'invert-css';

const input = `
  --accent-1: #111;
  --accent-2: rgb(255,170,204);
  --accent-3: hsl(340,100%,88%);
  --accent-4: #FFFFFF;
`;

const result = invert(input);
/*
result = `
  --accent-1: #eee;
  --accent-2: rgb(0,85,51);
  --accent-3: hsl(160,100%,88%);
  --accent-4: #000000;
`;
*/
```

## Supported Color Formats

- Hex (both short `#123` and long `#112233` formats)
- RGB (`rgb(255,255,255)`)
- RGBA (`rgba(255,255,255,0.5)`)
- HSL (`hsl(120,100%,50%)`)
- HSLA (`hsla(120,100%,50%,0.5)`)

## License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.
