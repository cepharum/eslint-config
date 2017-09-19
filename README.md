# eslint-config-cepharum

ESLint configuration to be shared among projects of cepharum GmbH


## Installation

    npm i -D eslint-config-cepharum

### Additional Requirements

The configuration relies on selected set of ESLint packages to be installed either locally or globally. Installing locally supports injection of proper dependencies into your project:

    npm i -D eslint eslint-config-standard eslint-plugin-standard eslint-plugin-import eslint-plugin-node eslint-plugin-node eslint-plugin-promise

Global installation helps with sharing same tool set in several projects simultaneously:

    npm i -g eslint eslint-config-standard eslint-plugin-standard eslint-plugin-import eslint-plugin-node eslint-plugin-node eslint-plugin-promise

## Usage

Create `.eslintrc` file in root of project containing

    {
        "extends": "eslint-config-cepharum"
    }

## Setting Up WebStorm/PhpStorm

When using either WebStorm or PhpStorm open settings and enable ESLint.
