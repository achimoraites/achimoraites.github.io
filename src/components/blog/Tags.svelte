<script lang="ts">
	export let tags: Array<string> = [];
</script>

<div class="article-tags">
	{#each tags as tag}
		<a href="/blog"><span class="{tag}">#{tag}</span></a>
	{/each}
</div>
