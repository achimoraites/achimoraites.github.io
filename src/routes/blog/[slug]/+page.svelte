
<script lang="ts">
	import OpenGraph from '$components/OpenGraph.svelte';
	import RelatedArticles from '$components/blog/RelatedArticles.svelte';
	import SocialShare from '$components/blog/SocialShare.svelte';
	import Tags from '$components/Tags.svelte';


	// PROPS
	export let data
    const { excerpt, title, image, tags, date, url, slug, author } = data.post
    const { content, posts } = data
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
		url,
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


	{@html content}

	<RelatedArticles {slug} {posts} />
</article>
