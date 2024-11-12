# eslint-config-cepharum

common ESLint configuration for projects of cepharum GmbH

## License

[MIT](LICENSE)

## Prerequisites

Starting with v2, the configuration works with versions of ESLint since v9.

## Installation

```bash
npm i -D eslint-config-cepharum
```

## Usage

Create `eslint.config.js` file in the root folder of your project with following content:

```javascript
import cepharum from "eslint-config-cepharum";

export default [
    // put additional configuration objects here ...
    ...cepharum,
    // ... or here
];
```
