module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		'vue/setup-compiler-macros': true,
	},
	extends: [
		'eslint-config-prettier',
		'eslint:recommended', // 使用推荐的eslint
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/vue3-recommended', // 使用插件支持vue3
		'plugin:vue/vue3-essential',
		//1.继承.prettierrc.js文件规则  2.开启rules的 "prettier/prettier": "error"  3.eslint fix的同时执行prettier格式化
		'plugin:prettier/recommended',
	],
	parser: 'vue-eslint-parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		parser: '@typescript-eslint/parser',
	},
	plugins: [],
	globals: {
		defineProps: 'readonly',
		defineEmits: 'readonly',
		defineExpose: 'readonly',
		withDefaults: 'readonly',
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['error', 'warn'] }] : 'off', //生产模式不允许使用log
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', //生产默认不允许使用debugger
		'@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '.*', args: 'none' }], //变量声明未使用
		'@typescript-eslint/no-explicit-any': 'off',
		'vue/multi-word-component-names': 0,
		// 'no-tabs': 'off',
	},
}
