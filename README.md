# invert-css-variables

Convert CSS variable colors in bulk.
[USE THE UI WEB TOOL INSTEAD](https://github.com/chaseottofy/invert-css-variables-ui)

[![npm Package Version](https://img.shields.io/npm/v/invert-css)](https://www.npmjs.com/package/invert-css)

## Table of Contents

- [Features](#features)
- [Supported Color Formats](#supported-color-formats)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Todo](#todo)
- [License](#license)

## Features

Meant to be used with CSS variables. Simplify the process of converting your Dark/Light themes by inverting your CSS variables in bulk.

- Supports all of the color formats in CSS even if they are mixed.
- Maintains the variable names and output will have proper spacing.
- Written in TypeScript without any dependencies.

### Supported Color Formats

- Hex (both short `#123` and long `#112233` formats)
- RGB (`rgb(255,255,255)`)
- RGBA (`rgba(255,255,255,0.5)`)
- HSL (`hsl(120,100%,50%)`)
- HSLA (`hsla(120,100%,50%,0.5)`)

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

## Testing

Tests are written using Jest.
Clone the repo and run the following command to run the tests:

```
npm run test
```

## Todo

- Make available in a simple web interface

## License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.
