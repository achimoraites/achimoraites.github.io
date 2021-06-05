<script lang="ts">
	export let data;
	const {
		description,
		image,
		title,
		type = 'article',
		url,
		tags = [],
		author = 'Achilles Moraites',
		date = new Date()
	} = data || {};
</script>

<svelte:head>
	<title>{title}</title>
	<meta
		name="keywords"
		content={`web development, achilles moraites,${
			Array.isArray(tags) && tags.length ? tags.toString() : ''
		}`}
	/>
	<meta name="description" content={description} />

	<!-- https://ogp.me -->
	<meta property="og:image" content={image} />
	<meta property="og:description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:type" content={type} />

	<meta property="og:url" content={url} />
	{#if type === 'article'}
		<meta property="og:article:author" content={author} />
		<meta property="og:article:tag" content={tags} />
		<meta property="og:article:published_time" content={date} />
	{/if}

	<!-- https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@achimoraites" />
	<meta name="twitter:creator" content="@achimoraites" />
	<meta name="twitter:image" content={image} />
</svelte:head>
