<script lang="ts" context="module">
	export const hydrate = false;
</script>

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

<article class="blog-post">
	<h1 style="font-size: 3rem;">{title}</h1>
	<div class="tags">
		<Tags {tags} />
	</div>
	<p class="author">
		By <span style="font-weight: 600"> {author}</span> <span>{dateFormatter(date)}</span>
	</p>
	<slot />
</article>
