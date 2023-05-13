/** @type {import('tailwindcss').Config} */
export default {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	content: [],
	theme: {
		extend: {},
	},
	corePlugins: {
		preflight: false,
	},
	prefix: 'tw-',
	plugins: [],
}
