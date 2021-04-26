<script>
	import '../app.postcss';
	import BaseNav from '../components/BaseNav.svelte';
	import BackgroundLines from '../components/BackgroundLines.svelte';
</script>

<div class="layout-wrapper">
	<BackgroundLines />
	<BaseNav />
	<slot />
</div>
