import pluginPromise from "eslint-plugin-promise";
import pluginJsdoc from "eslint-plugin-jsdoc";

import rules from "./rules.cjs";

export default [
	{
		files: ["**/*.{jsx,vue}"],
		plugins: {
			jsdoc: pluginJsdoc,
			promise: pluginPromise,
		},
		rules,
	},
	{
		files: ["**/*.{js,mjs}"],
		ignores: ["**/test/**/*.{js,mjs}"],
		plugins: {
			jsdoc: pluginJsdoc,
			promise: pluginPromise,
		},
		rules,
	},
	{
		files: ["**/*.{cjs}"],
		ignores: ["**/test/**/*.{cjs}"],
		plugins: {
			jsdoc: pluginJsdoc,
			promise: pluginPromise,
		},
		rules,
	},
	{
		files: ["**/test/**/*.{js,mjs,cjs}"],
		plugins: {
			jsdoc: pluginJsdoc,
			promise: pluginPromise,
		},
		rules: {
			...rules,
			"jsdoc/require-jsdoc": "off",
			"no-empty-function": "off",
			"max-len": "off",
			"max-depth": "off",
		},
	},
];
