import pluginPromise from "eslint-plugin-promise";
import pluginJsdoc from "eslint-plugin-jsdoc";

import rules from "./rules.cjs";

export default [
	{
		files: ["**/*.{js,mjs,jsx,vue}"],
		plugins: {
			jsdoc: pluginJsdoc,
			promise: pluginPromise,
		},
		rules,
	},
	{
		files: ["**/*.{cjs}"],
		plugins: {
			jsdoc: pluginJsdoc,
			promise: pluginPromise,
		},
		rules,
	},
];
