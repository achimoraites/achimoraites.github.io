<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function tagClicked(tag) {
		dispatch('tagClicked', {
			value: tag
		});
	}

	export let tags: Array<string> = [];
</script>

<div class="article-tags">
	{#each tags as tag}
		<span on:click={() => tagClicked(tag)} class={tag}>#{tag}</span>
	{/each}
</div>
