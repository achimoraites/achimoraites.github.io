<script lang="ts">
	import type Post from 'src/types/blog/Post';
	import ArticleCard from './ArticleCard.svelte';

	export let slug: string;
	export let posts: Post[];
	export let minPosts: number = 1
	export let show: number = 2


	$: currentPost = posts.find((p) => p.slug === slug);
	$: relatedPosts =
		posts.filter((p) => p.slug !== slug && currentPost.tags.some((t) => p.tags.includes(t))) || [];
</script>

{#if relatedPosts && relatedPosts.length > minPosts}
	<section class="my-8">
		<hr />
		<header><h2>Related Articles</h2></header>
		<div class="flex justify-center blog__related-posts">
			{#each relatedPosts.slice(0, show) as { title, excerpt, image, uri, tags }}
				<ArticleCard {title} text={excerpt} {image} {uri} {tags} />
			{/each}
		</div>
	</section>
{/if}
