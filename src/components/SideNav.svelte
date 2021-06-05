<script>
	import { onMount } from 'svelte';
	import BaseFooter from './BaseFooter.svelte';

	const navLinkStyle = {
		default: 'hover:bg-blue-600 hover:bg-opacity-40 hover:duration-300 ease-in-out mobile:w-1/4',
		active: 'bg-blue-800 mobile:w-1/4'
	};

	export let navLinks = [];

	function updateLinks(href) {
		navLinks = navLinks.map((l) =>
			l.href === href ? { ...l, active: true } : { ...l, active: false }
		);
	}

	onMount(() => {
		const currPath = window.location.pathname || '/';
		updateLinks(currPath);
	});
</script>

<!-- component -->
<nav class="side-nav">
	<div>
		<div class="image-box py-5 pl-4 pr-5 mobile:hidden">
			<a href="/">
				<picture>
					<img
						class="w-full max-w-xs rounded-full p-1 bg-gray-600"
						src="/images/avatar.jpg"
						alt="Achilles Moraites avatar"
						width="148"
						height="148"
					/>
				</picture>
			</a>
		</div>
		<hr class="border-1 border-gray-600 w-full" />
	</div>

	<div>
		<h2 class="text-white text-2xl mx-4 my-1 sm:hidden">Achilles Moraites</h2>
		<ul class="w-full flex sm:flex-col mobile:justify-around mobile:pb-1 text-center text-white">
			{#each navLinks as { href, active, label }}
				<li class={active ? navLinkStyle.active : navLinkStyle.default}>
					<a on:click={() => updateLinks(href)} {href}><span>{label}</span></a>
				</li>
			{/each}
		</ul>
	</div>

	<div class="mobile:hidden">
		<BaseFooter />
	</div>
</nav>


<style>
	.side-nav {
		max-width: 250px;

		@apply bg-gray-900 sm:h-screen sm:grid grid-cols-1 grid-rows-2 z-10 sticky top-0 mobile:max-w-full;
	}
	.image-box {
		max-width: 90%;
		margin: 0 auto;
	}
</style>
