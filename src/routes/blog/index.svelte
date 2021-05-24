<script lang="ts">
	import ArticleCard from '../../components/blog/ArticleCard.svelte';
	import ShadowedHeading from '../../components/ShadowedHeading.svelte';

	interface Post {
		title?: string;
		text?: string;
		image?: string;
		uri?: string;
		tags?: Array<string>;
	}

	const posts: Post[] = [
		{
			title: 'Angular Component Inheritance',
			text:
				'Component inheritance can be useful when you have duplicated/shared code between your components.',
			uri: '/blog/angular-component-inheritance',
			tags: ['typescript', 'angular', 'oop', 'javascript']
		},
		{
			title: 'Angular Testing using Jasmine',
			text:
				'When testing our apps there are times when we need to control things that are beyond our control, like the window object.',
			uri: '/blog/advanced-angular-testing-using-jasmine',
			tags: ['angular', 'javascript', 'typescript', 'testing'],
			image:
				'https://images.pexels.com/photos/5726788/pexels-photo-5726788.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=255&w=400'
		},
		{
			image: "https://images.pexels.com/photos/171198/pexels-photo-171198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=225&w=400"
		},
		{
			title: 'Typescript Tips and Tricks',
			text: 'Here are two Typescript tricks to make your life as a software developer easier.',
			uri: '/blog/typescript-tips-and-tricks',
			tags: ['typescript', 'oop', 'productivity'],
			image:
				'https://images.pexels.com/photos/1701206/pexels-photo-1701206.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=225&w=400'
		}
	];
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

		<div class="recent-posts">
			{#each posts as { title, text, image, uri, tags }}
				<ArticleCard {title} {text} {image} {uri} {tags} />
			{/each}
		</div>
	</section>
</main>

<style>
	.recent-posts {
		@apply grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 mt-12;
	}
</style>
