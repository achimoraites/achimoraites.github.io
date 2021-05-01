<script>
	import '../app.postcss';
	import BaseNav from '../components/BaseNav.svelte';
</script>

<div class="grid layout-wrapper">
	<BaseNav />
	<slot />
</div>

<style>
	.layout-wrapper {
		grid-template-columns: 20% 80%;
	}
</style>
