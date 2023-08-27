/** @type {import('tailwindcss').Config}*/
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				monospace: 'monospace, sans-serif'
			},
			screens: {
				mobile: { max: '640px' }
			},
			height: {
				'90vh': '90vh'
			}
		}
	},

	plugins: []
};
