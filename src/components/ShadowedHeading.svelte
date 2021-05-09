<script lang="ts">
	export let title: string;
</script>

<div class="relative">
	<h2 class="text-4xl font-black uppercase z-10">{title}</h2>
	<span class="uppercase transform translate-x-1 -translate-y-4 text-5xl font-bold absolute left-0 top-8"
		>{title}</span
	>
</div>

<style>
	span {
		color: #00000008;
	}
</style>
