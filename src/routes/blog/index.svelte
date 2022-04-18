<script lang="ts" context="module">
	export const prerender = true;

	export async function load({ session }) {
		const posts = session.posts;
		return { props: { posts } };
	}
</script>

<script lang="ts">
	import type Post from '../../types/blog/Post';

	import router from '$lib/router';

	import ArticleCard from '../../components/blog/ArticleCard.svelte';
	import ShadowedHeading from '../../components/ShadowedHeading.svelte';
	import OpenGraph from '../../components/OpenGraph.svelte';

	export let posts: Post[] = [];
	let searchQuery = '';
	let selectedTags = [];

	$: filteredPosts = posts.filter((post) =>
		(post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
			post.tags.some((tag) => tag.includes(searchQuery.toLowerCase()))) &&
		selectedTags.length
			? post.tags.some((tag) => selectedTags.includes(tag.toLowerCase()))
			: true
	);

	function filterPosts(event) {
		const { value } = event.detail;
		console.log(value);
		router.setParams({ tag: value });
		selectedTags = Array.from(new Set([value, ...selectedTags]).values());
		console.log(selectedTags)
	}
</script>

<OpenGraph
	data={{
		description: 'Achilles Moraites Tech Blog, Coding, Tutorials and thoughts...',
		title: 'Blog | Achilles Moraites',
		type: 'blog',
		image: 'https://achimoraites.github.io/images/preview.jpg',
		tags: [
			'Achilles Moraites is a software engineer with skills in both the front end and the back end, skills include Angular, React, Vue, Node, AWS, Python and more...'
		]
	}}
/>

<main class="blog flex justify-center">
	<section class="min-h-screen max-w-6xl w-full">
		<header class="md:flex md:justify-between w-full">
			<ShadowedHeading title="Blog Posts" />
			<input
				class="border-2 px-2 mt-8 md:mt-0"
				type="text"
				placeholder="Search"
				bind:value={searchQuery}
			/>
		</header>
		{#if filteredPosts.length}
			<div class="blog__recent-posts">
				{#each filteredPosts as { title, excerpt, image, uri, tags }}
					<ArticleCard on:tagClicked={filterPosts} {title} text={excerpt} {image} {uri} {tags} />
				{/each}
			</div>
		{:else}
			<p class="md:float-right text-red-800 font-bold">
				No results found for "{searchQuery}"
			</p>
		{/if}
	</section>
</main>
