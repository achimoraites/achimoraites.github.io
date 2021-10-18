<script lang="ts" context="module">
	export const hydrate = false;
</script>

<script lang="ts">
import getPosts from '$lib/getPosts';

	import OpenGraph from '../OpenGraph.svelte';
import RelatedArticles from './RelatedArticles.svelte';
	import SocialShare from './SocialShare.svelte';
	import Tags from './Tags.svelte';

	// PROPS
	export let date;
	export let author;
	export let title;
	export let tags;
	export let excerpt;
	export let image;
	export let url;
	export let slug;


	let posts = []
	getPosts().then(p => posts = p)


	function dateFormatter(date, config = { year: 'numeric', month: 'short', day: 'numeric' }) {
		return new Date(Date.parse(date)).toLocaleDateString(undefined, config);
	}
</script>

<OpenGraph
	data={{
		description: excerpt,
		title,
		image,
		tags,
		date,
		preloadImage: Boolean(image)
	}}
/>

<article class="blog-post">

	<h1 style="font-size: 3rem;">{title}</h1>
	<div class="tags">
		<Tags {tags} />
	</div>
	<SocialShare {url} />
	<p class="author">
		By <span style="font-weight: 600"> {author}</span> <span>{dateFormatter(date)}</span>
	</p>

	{#if image}
		<img class="mt-4 mb-6" alt={title} src={image} width="800" height="450" />
	{/if}
	<slot />

	<RelatedArticles {slug} {posts} />
</article>
