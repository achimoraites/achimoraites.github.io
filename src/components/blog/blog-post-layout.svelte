<script lang="ts">
	// PROPS
	export let date;
	export let author;
	export let title;

	function dateFormatter(date, config = { year: 'numeric', month: 'short', day: 'numeric' }) {
		return new Date(Date.parse(date)).toLocaleDateString(undefined, config);
	}
</script>

<article class="mt-20">
	<h1>{title}</h1>
	<p class="mb-8">By <span class=" font-semibold"> {author}</span> <span>{dateFormatter(date)}</span></p>
	<slot />
</article>
