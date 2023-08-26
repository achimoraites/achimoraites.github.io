import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],
	// layout: {
	// 	blog: './src/routes/blog/[slug].+page.svelte'
	// },
	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: []
});

export default config;
