<script lang="ts">
	export let title: string = 'Types of Modules in Angular';
	export let text: string =
		'Crafting high quality Angular apps requires to have knowledge of how to use the different types of modules to ensure readability, performance and scalability.';
	export let image: string =
		'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=225&w=400';
	export let uri: string = '/blog/angular-types-of-modules';
	export let tags: Array<string> = ['typescript', 'angular', 'oop', 'javascript']
</script>

<div
	class="shadow-lg rounded-sm p-4 bg-white border-solid border-t-2 border-gray-400 hover:border-gray-500"
>
	<a href={uri}>
		<div class="">
			<h5 class="text-gray-800 text-2xl font-bold mb-1">{title}</h5>
			<p class="text-gray-700 text-md mb-2">{text.slice(0, 80)}...</p>
		</div>
		<img alt="post" src={image} class="h-auto mb-4" width="517" height="277" />
	</a>
	<div class="flex">
		{#each tags as tag}
			<a href="/blog"
				><span class="mr-2">#{tag}</span></a
			>
	{/each}
	</div>
</div>

<style>
	img {
		object-fit: fill;
}
</style>