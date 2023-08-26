<script lang="ts">
	export let tags: Array<string> = [];
</script>

<div class="article-tags">
	{#each tags as tag}
		<span class="{tag}">#{tag}</span>
	{/each}
</div>
