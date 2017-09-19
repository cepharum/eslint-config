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

module.exports = {
	extends: "standard",
	plugins: [
		"promise",
		"standard"
	],
	env: {
		browser: false,
		node: true,
		es6: true,
		mocha: true
	},
	rules: {
		semi: [ "error", "always" ],
		quotes: [ "warn", "double" ],
		indent: [ "warn", "tab", {
			SwitchCase: 1
		} ],
		"no-mixed-spaces-and-tabs": [ "warn", "smart-tabs" ],
		"no-tabs": [0],
		"space-in-parens": [ "warn", "always" ],
		"object-curly-spacing": [ "warn", "always", {
			arraysInObjects: true,
			objectsInObjects: true
		} ],
		"array-bracket-spacing": [ "warn", "always", {
			singleValue: false,
			arraysInArrays: true,
			objectsInArrays: true
		} ],
		"space-before-function-paren": [ "warn", "never" ],
		"space-infix-ops": ["warn"],
		"no-multiple-empty-lines": [ "warn", {
			max: 4,
			maxEOF: 1,
			maxBOF: 0,
		} ],
		"valid-jsdoc": [ "error", {
			requireReturn: false,
			requireReturnType: true,
			requireParamDescription: false,
			requireReturnDescription: false
		} ],
		"require-jsdoc": [ "error", {
			require: {
				FunctionDeclaration: true,
				MethodDefinition: true,
				ClassDeclaration: true,
				ArrowFunctionExpression: false
			}
		} ],
		"key-spacing": [ "warn", {
			beforeColon: false,
			mode: "strict"
		} ],
		"comma-style": [ "warn", "last" ],
		"comma-dangle": [ "warn", "only-multiline" ],
		"no-return-assign": [ "warn", "except-parens" ],
		"no-unused-vars": [ "warn", {
			args: "after-used"
		} ],
		"quote-props": [ "warn", "as-needed" ],
		"one-var": [0],
		"padded-blocks": [0]
	}
};
