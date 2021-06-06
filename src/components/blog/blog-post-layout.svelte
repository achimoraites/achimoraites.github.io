<script lang="ts">
	import OpenGraph from '../OpenGraph.svelte';
	import Tags from './Tags.svelte';

	// PROPS
	export let date;
	export let author;
	export let title;
	export let tags;
	export let excerpt;
	export let image;

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
		date
	}}
/>

<article class="article">
	<h1>{title}</h1>
	<div class="tags">
		<Tags {tags} />
	</div>
	<p class="author">
		By <span class=" font-semibold"> {author}</span> <span>{dateFormatter(date)}</span>
	</p>
	<slot />
</article>

<style>
	.article {
		@apply mt-20;
	}

	.tags {
		@apply mt-4 mb-2;
	}

	.author {
		@apply mb-8;
	}
</style>
