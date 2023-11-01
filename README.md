# invert-css-variables

Easily invert the colors of your CSS variables in bulk.

<!-- ## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Supported Color Formats](#supported-color-formats)
- [Examples](#examples)
- [Contribution](#contribution)
- [License](#license)

## Installation

To install `invertColorsInRoot` via NPM:

```bash
npm install invert-colors-in-root
```

## Usage

Simply provide your CSS variable string to the `invertColorsInRoot` function to get the inverted colors.

```javascript
const { invertColorsInRoot } = require('invert-colors-in-root');

const input = `
  --color-1: #123;
  --color-2: #102030;
`;

const result = invertColorsInRoot(input);
console.log(result);
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

## Contribution

If you'd like to contribute to `invertColorsInRoot`, please fork the repository, use a feature branch, and send us a pull request!

## License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.

---

For more details, questions, or issues, please refer to the official documentation or open an issue on the repository. -->