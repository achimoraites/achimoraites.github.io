<script lang="ts">
	

	import ShadowedHeading from '../../components/ShadowedHeading.svelte';
	import OpenGraph from '../../components/OpenGraph.svelte';
	import ProjectCard from '$components/projects/ProjectCard.svelte';

	export let data = { posts: []};
	let searchQuery = '';

	$: filteredPosts = data.posts.filter(
		(post) =>
			post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
			post.tags.some(tag => tag.includes(searchQuery.toLowerCase()))
	);
</script>

<OpenGraph
	data={{
		description: 'Achilles Moraites Projects...',
		title: 'Projects | Achilles Moraites',
		type: 'blog',
		image: 'https://achimoraites.io/images/preview.jpg',
		tags: [
			'Achilles Moraites is a software engineer with skills in both the front end and the back end, skills include Angular, React, Vue, Node, AWS, Python and more...'
		]
	}}
/>

<main class="blog flex justify-center">
	<section class="min-h-screen max-w-6xl w-full">
		<header class="md:flex md:justify-between w-full">
			<ShadowedHeading title="Projects" />
				<input
					class="border-2 px-2 mt-8 md:mt-0"
					type="text"
					placeholder="Search"
					bind:value={searchQuery}
				/>
		</header>
		{#if filteredPosts.length}
		<div class="grid grid-cols-1 mt-12 place-items-center">
			{#each filteredPosts as { title, excerpt, image, uri, tags }}
				<ProjectCard {title} text={excerpt} {image} {uri} {tags} />
			{/each}
		</div>
		{:else}
		<p class="md:float-right text-red-800 font-bold">
			No results found for "{searchQuery}"
		</p>
		{/if}
	</section>
</main>
