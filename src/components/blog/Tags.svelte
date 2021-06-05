<script lang="ts">
	export let tags: Array<string> = [];
</script>

<div class="flex flex-wrap">
	{#each tags as tag}
		<a class="my-1" href="/blog"><span class="mr-2 rounded-full py-1 px-2 {tag}">#{tag}</span></a>
	{/each}
</div>

