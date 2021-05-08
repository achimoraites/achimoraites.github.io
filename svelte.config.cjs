const sveltePreprocess = require('svelte-preprocess');
const static = require('@sveltejs/adapter-static');
const node = require('@sveltejs/adapter-node');
const pkg = require('./package.json');

const isDev = process.env.NODE_ENV === 'development'

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess({
			defaults: {
				style: 'postcss'
			},
			postcss: true
		})
	],

	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: isDev ? node() : static({
			fallback: 'index.html'
		}),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		prerender: {
			crawl: true,
		},
		paths: {
			base: isDev ? '/' : '/achimoraites.github.io/'
		},

		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			}
		}
	}
};
