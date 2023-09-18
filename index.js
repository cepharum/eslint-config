"use strict";

/* eslint sort-keys: "error" */
module.exports = {
	env: {
		browser: false,
		es6: true,
		mocha: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:promise/recommended",
	],
	parserOptions: {
		ecmaFeatures: {
			globalReturn: false,
			impliedStrict: false,
		},
		ecmaVersion: 6,
	},
	plugins: [
		"promise",
	],
	rules: {
		"array-bracket-spacing": [
			"warn",
			"always",
			{
				singleValue: false,
			}
		],
		"arrow-parens": [
			"warn",
			"as-needed"
		],
		"arrow-spacing": "warn",
		"block-spacing": [
			"warn",
			"always"
		],
		"brace-style": [
			"warn",
			"1tbs",
			{
				allowSingleLine: true,
			}
		],
		camelcase: [
			"warn",
			{
				properties: "always",
			}
		],
		"computed-property-spacing": "warn",
		"consistent-return": "error",
		"consistent-this": [
			"warn",
			"that",
			"api",  // to improve readability of hitchy-based code
		],
		curly: "off",
		"default-case": "off",
		"dot-location": "off",
		"eol-last": [ "error", "always" ],
		"for-direction": "error",
		"func-call-spacing": "warn",
		"func-style": [
			"warn",
			"declaration",
			{
				allowArrowFunctions: true,
			}
		],
		"getter-return": "error",
		"guard-for-in": "error",
		indent: [
			"warn",
			"tab",
			{
				SwitchCase: 1,
			}
		],
		"key-spacing": [ "warn", {
			beforeColon: false,
			mode: "strict",
		} ],
		"keyword-spacing": [ "warn", {
			before: true,
			after: true,
		} ],
		"linebreak-style": "warn",
		"lines-around-comment": [
			"warn",
			{
				allowArrayStart: true,
				allowBlockStart: true,
				allowClassStart: true,
				allowObjectStart: true,
				beforeBlockComment: true,
			}
		],
		"lines-between-class-members": "warn",
		"max-depth": [
			"warn",
			6,
		],
		"max-len": [
			"warn",
			{
				code: 160,
				ignoreRegExpLiterals: true,
				ignoreStrings: true,
				ignoreTrailingComments: true,
				ignoreUrls: true,
			}
		],
		"max-nested-callbacks": [
			"error",
			5
		],
		"new-cap": [ "error", {
			capIsNew: false,
		} ],
		"no-array-constructor": "error",
		"no-await-in-loop": "error",
		"no-caller": "error",
		"no-catch-shadow": "error",
		"no-confusing-arrow": [
			"error",
			{
				allowParens: true,
			}
		],
		"no-duplicate-imports": "error",
		"no-else-return": "warn",
		"no-empty-function": "error",
		"no-eval": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-extra-label": "error",
		"no-extra-parens": [
			"warn",
			"all", {
				conditionalAssign: false,
				enforceForArrowConditionals: false,
				nestedBinaryExpressions: false,
				returnAssign: false,
			}
		],
		"no-floating-decimal": "warn",
		"no-implicit-coercion": "error",
		"no-implied-eval": "error",
		"no-labels": "error",
		"no-lone-blocks": "error",
		"no-lonely-if": "warn",
		"no-mixed-operators": [
			"error",
			{
				"groups": [
					["&", "|", "^", "~", "<<", ">>", ">>>"],
					["==", "!=", "===", "!==", ">", ">=", "<", "<="],
					["&&", "||"],
					["in", "instanceof"]
				],
				"allowSamePrecedence": true
			}
		],
		"no-mixed-spaces-and-tabs": [
			"warn",
			"smart-tabs"
		],
		"no-multi-spaces": [
			"warn",
			{
				ignoreEOLComments: true,
			}
		],
		"no-multiple-empty-lines": [ "warn", {
			max: 4,
			maxBOF: 0,
			maxEOF: 1,
		} ],
		"no-negated-condition": "warn",
		"no-new-object": "error",
		"no-new-wrappers": "error",
		"no-param-reassign": "off",
		"no-proto": "error",
		"no-prototype-builtins": "off",
		"no-return-assign": "error",
		"no-self-compare": "error",
		"no-shadow": "warn",
		"no-template-curly-in-string": "error",
		"no-throw-literal": "error",
		"no-trailing-spaces": "warn",
		"no-undef-init": "warn",
		"no-unmodified-loop-condition": "warn",
		"no-unneeded-ternary": "error",
		"no-unused-expressions": [ "error", {
			allowShortCircuit: true,
		} ],
		"no-unused-vars": [ "warn", {
			args: "after-used",
		} ],
		"no-useless-call": "error",
		"no-useless-computed-key": "error",
		"no-useless-concat": "warn",
		"no-useless-constructor": "error",
		"no-useless-rename": "error",
		"no-useless-return": "warn",
		"no-var": "error",
		"no-void": "error",
		"no-whitespace-before-property": "warn",
		"no-with": "error",
		"object-curly-newline": [
			"warn",
			{
				consistent: true,
			}
		],
		"object-curly-spacing": [
			"warn",
			"always"
		],
		"prefer-const": "warn",
		"prefer-numeric-literals": "error",
		"prefer-promise-reject-errors": "error",
		"prefer-rest-params": "error",
		"prefer-spread": "warn",
		"promise/always-return": "off",
		"promise/avoid-new": "off",
		"promise/no-callback-in-promise": "off",
		"promise/no-nesting": "off",
		"promise/no-promise-in-callback": "off",
		"promise/param-names": "off",
		"quote-props": [ "warn", "as-needed" ],
		quotes: [
			"warn",
			"double",
			{
				allowTemplateLiterals: true,
				avoidEscape: true,
			}
		],
		"require-await": "error",
		"require-jsdoc": [ "error", {
			require: {
				ArrowFunctionExpression: false,
				ClassDeclaration: true,
				FunctionDeclaration: true,
				FunctionExpression: false,
				MethodDefinition: true,
			}
		} ],
		"rest-spread-spacing": "warn",
		semi: "error",
		"semi-spacing": "warn",
		"semi-style": "error",
		"space-before-blocks": "warn",
		"space-before-function-paren": [
			"warn",
			"never",
		],
		"space-in-parens": [
			"warn",
			"always", {
				exceptions: [
					"empty",
				],
			}
		],
		"space-infix-ops": "warn",
		"spaced-comment": "warn",
		strict: [
			"error",
			"global",
		],
		"switch-colon-spacing": [
			"warn", {
				after: true,
				before: true,
			}
		],
		"template-curly-spacing": "warn",
		"valid-jsdoc": "error",
		"wrap-iife": [ "error", "inside" ],
		yoda: "error"
	}
};
