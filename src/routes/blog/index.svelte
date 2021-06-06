<script lang="ts" context="module">
	export const prerender = true;

	export async function load({ session }) {
		const posts = session.posts;
		return { props: { posts } };
	}
</script>

<script lang="ts">
	import type Post from '../../types/blog/Post';

	import ArticleCard from '../../components/blog/ArticleCard.svelte';
	import ShadowedHeading from '../../components/ShadowedHeading.svelte';
	import OpenGraph from '../../components/OpenGraph.svelte';

	export let posts: Post[] = [];
</script>

<OpenGraph
	data={{
		description: 'Achilles Moraites Tech Blog, Coding, Tutorials and thoughts...',
		title: 'Blog | Achilles Moraites',
		type: 'blog',
		image: '/images/preview.jpg',
		tags: [
			'Achilles Moraites is a software engineer with skills in both the front end and the back end, skills include Angular, React, Vue, Node, AWS, Python and more...'
		]
	}}
/>

<main class="blog">
	<section>
		<header>
			<ShadowedHeading title="Recent Posts" />
		</header>

		<div class="blog__recent-posts">
			{#each posts as { title, excerpt, image, uri, tags }}
				<ArticleCard {title} text={excerpt} {image} {uri} {tags} />
			{/each}
		</div>
	</section>
</main>
