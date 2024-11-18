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

Create **eslint.config.js** file in the root folder of your project with following content:

```javascript
import cepharum from "eslint-config-cepharum";

export default [
    // put additional configuration objects here ...
    ...cepharum,
    // ... or here
];
```

> **Note:** In case a warning is displayed regarding failed attempt to process the configuration as CommonJS, either fix your project's **package.json** file to include the `"type": "module"` declaration or rename the configuration file to **eslint.config.mjs**.

### Custom ignore folders

The provided default configuration is set up to globally ignore files in folders matching this glob pattern:

* `**/.vitepress/cache`

In addition, all configuration blocks but those regarding test files are individually ignoring files in folders matching this glob pattern:

* `**/test`

If you need to declare additional folders to be _globally_ ignored by ESLint, a helper function is available to create a custom configuration based on the default one to use instead:

```javascript
import { ignoreFolders } from "eslint-config-cepharum";

export default [
    // put additional configuration objects here ...
    ...ignoreFolders( "**/coverage", "server/public" ),
    // ... or here
];
```
