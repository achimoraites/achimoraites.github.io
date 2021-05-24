<script lang="ts">
	export let title: string = 'Types of Modules in Angular';
	export let text: string = 'Crafting high quality Angular apps requires to have knowledge of how to use the different types of modules to ensure readability, performance and scalability.';
	export let image: string = "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
	export let slug: string = 'angular-types-of-modules'
</script>

<a href="/blog/{slug}">
	<div
	class="shadow-lg rounded-sm p-4 bg-white border-solid border-t-2 border-gray-400 hover:border-gray-500"
>
	<div class="">
		<h5 class="text-gray-800 text-xl font-bold mb-1">{title}</h5>
		<p class="text-gray-700 text-md mb-2">{text}</p>
	</div>
	<img
		alt="post"
		src={image}
		class="h-auto mb-4"
	/>
	<div>
		<span> #angular #typescript #codequality #webdev </span>
	</div>
</div>
</a>
