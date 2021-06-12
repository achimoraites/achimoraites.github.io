<script lang="ts">
	export let data;
	const {
		description,
		image = 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=225&w=400',
		title,
		type = 'article',
		url,
		tags = [],
		author = 'Achilles Moraites',
		date = new Date(),
		preloadImage = false,
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
	<meta name="author" content={author} />

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

	<!-- PRELOAD -->
	{#if preloadImage && image}
	<link rel="preload" as="image" href={image} />
	{/if}
</svelte:head>
