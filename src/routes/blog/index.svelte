<script lang="ts">
	import ArticleCard from '../../components/blog/ArticleCard.svelte';
	import ShadowedHeading from '../../components/ShadowedHeading.svelte';

	interface Post {
		title?: string;
		text?: string;
		image?: string;
	}

	const posts: Post[] = [{}, {}, {}, {}, {}, {}, {}, {}];
</script>

<svelte:head>
	<title>Achilles Moraites</title>
	<meta
		name="description"
		content="Achilles Moraites is a software engineer with skills in both the front end and the back end, skills include Angular, React, Vue, Node, AWS, Python and more..."
	/>
	<meta
		name="keywords"
		content="Achilles Moraites is a software engineer with skills in both the front end and the back end, skills include Angular, React, Vue, Node, AWS, Python and more..."
	/>
	<meta property="og:type" content="blog" />
	<meta property="og:site_name" content="Achilles Moraites" />
</svelte:head>

<main class="px-2 mt-24 font-mono">
	<section class="mb-16">
		<header>
			<ShadowedHeading title="Recent Posts" />
		</header>

		<div class="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 mt-12">
			{#each posts as { title, text, image }}
				<ArticleCard {title} {text} {image} />
			{/each}
		</div>
	</section>
</main>
