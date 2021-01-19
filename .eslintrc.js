module.exports = {
  parser: 'babel-eslint',
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		'plugin:react/recommended',
		'@react-native-community',
		'naver',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-use-before-define': ['error'],
		'no-use-before-define': 'off',
		// production 환경에서는 on 으로 되어있어야 함.
		'no-console': 'off',
		'arrow-parens': ['error', 'always'],
		// prettier과 충돌되는 부분
		'prettier/prettier': 'off',
		// only in window enviornment
		'linebreak-style': ["error", "windows"],
	},
};
