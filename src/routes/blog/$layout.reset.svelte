<script lang="ts" context="module">
	export const hydrate = false;
</script>

<script lang="ts">
	import '../../blog.postcss'
	import BaseFooter from '../../components/BaseFooter.svelte';
	import TopNav from '../../components/TopNav.svelte';

	let navLinks = [
		{
			href: '/',
			label: 'Home'
		},
		{
			href: '/blog',
			label: 'Blog',
			active: true
		}
	];
</script>

<TopNav {navLinks} />
<main style="margin-top: 3rem;">
	<slot><!-- optional fallback --></slot>
</main>

<footer class="bg-gray-900 mt-5">
	<BaseFooter />
</footer>
