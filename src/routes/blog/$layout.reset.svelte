<script lang="ts">
	import TopNav from '../../components/TopNav.svelte';

	let navLinks = [
		{
			href: '/',
			label: 'Home'
		},
		{
			href: '/blog',
			label: 'Blog',
			active: true,
		}
	];
</script>

<TopNav navLinks={navLinks} />
<slot><!-- optional fallback --></slot>

