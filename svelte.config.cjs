const sveltePreprocess = require('svelte-preprocess');
const static = require('@sveltejs/adapter-static');
const node = require('@sveltejs/adapter-node');
const pkg = require('./package.json');

const { mdsvex } = require('mdsvex');

const isDev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	extensions: ['.svelte', '.md'],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess({
			defaults: {
				style: 'postcss'
			},
			postcss: true
		}),
		mdsvex({
			extensions: ['.md'],
			layout: {
				blog: './src/components/blog/blog-post-layout.svelte'
			},
		})
	],

	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: isDev ? node() : static(),
		appDir: "_app",

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		// prerender: {
		// 	force: true,
		// },
		paths: {
			base: '',
			assets: ''
		},

		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			}
		}
	}
};
