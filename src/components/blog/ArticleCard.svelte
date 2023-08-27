<script lang="ts">
	import Tags from '../Tags.svelte';

	export let title: string = 'Types of Modules in Angular';
	export let text: string =
		'Crafting high quality Angular apps requires to have knowledge of how to use the different types of modules to ensure readability, performance and scalability.';
	export let image: string =
		'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=225&w=400';
	export let uri: string = '/blog/angular-types-of-modules';
	export let tags: Array<string> = ['typescript', 'angular', 'oop', 'javascript'];
</script>

<div class="card">
	<a href={uri}>
		<div class="card-content">
			<h3 class="card__title">{title}</h3>
			<p class="text-gray-700 text-md mb-2">{text.slice(0, 80)}...</p>
		</div>
		<img alt={title + ' image'} src={image} class="card__img" width="517" height="277" />
	</a>
	<Tags {tags} />
</div>

<style lang="postcss">
	.card {
		@apply shadow-lg rounded-sm p-4 bg-white border-solid border-2 border-gray-400 hover:border-gray-500;

		position: relative;
		display: inline-block;
		width: 350px;
		padding: 20px;
		margin: 20px;
		background-color: rgba(255, 255, 255, 0.1);
		border-radius: 10px;
		transition: transform 0.5s;
		transform-style: preserve-3d;
		backdrop-filter: blur(10px);
		overflow: hidden;
		height: -webkit-fill-available;
	}

	.card__title {
		@apply text-gray-800 text-2xl font-bold mb-1;
	}
	.card__img {
		object-fit: fill;

		@apply h-auto mb-4;
	}

	.card,
	.card-content,
	.card__title,
	.card__img {
		flex-basis: 4rem;
		display: flex;
		flex-direction: column;
	}
</style>
