/**
 * (c) 2017 cepharum GmbH, Berlin, http://cepharum.de
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2017 cepharum GmbH
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * @author: cepharum
 */

"use strict";

/* eslint sort-keys: "error" */
module.exports = {
	env: {
		browser: false,
		es6: true,
		mocha: true,
		node: true,
	},
	extends: "eslint:recommended",
	plugins: [
		"promise",
		"standard"
	],
	rules: {
		"array-bracket-spacing": [ "warn", "always", {
			arraysInArrays: true,
			objectsInArrays: true,
			singleValue: false,
		} ],
		"comma-dangle": [ "warn", "only-multiline" ],
		"comma-style": [ "warn", "last" ],
		curly: [ "error", "multi-line" ],
		"dot-notation": "warn",
		"guard-for-in": "error",
		indent: [ "warn", "tab", {
			SwitchCase: 1
		} ],
		"key-spacing": [ "warn", {
			beforeColon: false,
			mode: "strict"
		} ],
		"max-len": [ "error", {
			code: 120,
		} ],
		"max-nested-callbacks": [ "error", 2 ],
		"new-cap": "error",
		"no-duplicate-imports": "error",
		"no-else-return": "warn",
		"no-extra-bind": "error",
		"no-floating-decimal": "warn",
		"no-labels": "error",
		"no-lone-blocks": "error",
		"no-lonely-if": "warn",
		"no-mixed-spaces-and-tabs": [ "warn", "smart-tabs" ],
		"no-multiple-empty-lines": [ "warn", {
			max: 4,
			maxBOF: 0,
			maxEOF: 1,
		} ],
		"no-negated-condition": "warn",
		"no-new-object": "error",
		"no-new-wrappers": "error",
		"no-proto": "error",
		"no-return-assign": [ "warn", "except-parens" ],
		"no-self-compare": "error",
		"no-tabs": [0],
		"no-throw-literal": "error",
		"no-unmodified-loop-condition": "error",
		"no-unused-expressions": [ "error", {
			allowShortCircuit: true,
		} ],
		"no-unused-vars": [ "warn", {
			args: "after-used",
		} ],
		"no-useless-call": "error",
		"no-useless-concat": "warn",
		"no-useless-return": "warn",
		"no-void": "error",
		"no-warning-comments": "warn",
		"no-with": "error",
		"object-curly-spacing": [ "warn", "always", {
			arraysInObjects: true,
			objectsInObjects: true
		} ],
		"one-var": 0,
		"padded-blocks": 0,
		"prefer-promise-reject-errors": "error",
		"quote-props": [ "warn", "as-needed" ],
		quotes: [ "warn", "double" ],
		"require-jsdoc": [ "error", {
			require: {
				ArrowFunctionExpression: false,
				ClassDeclaration: true,
				FunctionDeclaration: true,
				MethodDefinition: true,
			}
		} ],
		semi: [ "error", "always" ],
		"space-before-function-paren": [ "warn", "never" ],
		"space-in-parens": [ "warn", "always" ],
		"space-infix-ops": ["warn"],
		strict: [ "warn", "global" ],
		"valid-jsdoc": [ "error", {
			requireParamDescription: false,
			requireReturn: false,
			requireReturnDescription: false,
			requireReturnType: true,
		} ],
		"wrap-iife": [ "error", "inside" ],
		yoda: "warn",
	}
};
