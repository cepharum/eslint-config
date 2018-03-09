# eslint-config-cepharum

ESLint configuration to be shared among projects of cepharum GmbH


### Prerequisites

The configuration works with recent versions of ESLint (4.18+) and requires additional installation of single ESLint plugin providing additional checks on use of promises. Either package may be installed locally or globally.
 
Local installation supports injection of proper dependencies into your project:

    npm i -D eslint eslint-plugin-promise

Global installation helps with sharing same tool set in several projects simultaneously:

    npm i -g eslint eslint-plugin-promise

## Installation

    npm i -D eslint-config-cepharum

## Usage

Create `.eslintrc` file in root of project containing

    {
        "extends": "eslint-config-cepharum"
    }

## Setting Up WebStorm/PhpStorm

When using either WebStorm or PhpStorm open settings and enable ESLint.
