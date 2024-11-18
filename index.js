import pluginPromise from "eslint-plugin-promise";
import pluginJsdoc from "eslint-plugin-jsdoc";

import rules from "./rules.cjs";

const defaultIgnores = [
	"**/.vitepress/cache/**",
];

const plugins = {
	jsdoc: pluginJsdoc,
	promise: pluginPromise,
};

const ignores = ["**/test/**"];

const config = [
	{
		ignores: [...defaultIgnores],
	},
	{
		name: "cepharum/frameworks",
		files: ["**/*.{jsx,vue}"],
		ignores,
		plugins,
		rules,
	},
	{
		name: "cepharum/esm",
		files: ["**/*.{js,mjs}"],
		ignores,
		plugins,
		rules,
	},
	{
		name: "cepharum/cjs",
		files: ["**/*.{cjs}"],
		ignores,
		plugins,
		rules,
	},
	{
		name: "cepharum/tests",
		files: ["**/test/**/*.{js,mjs,cjs}"],
		ignores: [],
		plugins,
		rules: {
			...rules,
			"jsdoc/require-jsdoc": "off",
			"no-empty-function": "off",
			"max-len": "off",
			"max-depth": "off",
		},
	},
];

export default config;

/**
 * Delivers all configuration object provided by default with either object
 * being extended to ignore any of the given folders.
 *
 * @param {string} folders glob patterns selecting folders to ignore **\/docs/.vitepress/cache (though THIS one is ignored by default)
 * @returns {(*&{ignores})[]}
 */
export function ignoreFolders( ...folders ) {
	return config.map( block => ( {
		...block,
		ignores: block.name ? block.ignores : block.ignores.concat(
			...folders.map( folder => folder.replace( /\/$/, "" ) + "/**" )
		),
	} ) );
}
