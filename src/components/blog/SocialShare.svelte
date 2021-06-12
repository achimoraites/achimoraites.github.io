<script lang="ts">
	export let url = 'https://achimoraites.github.io/blog/github-actions-tips-and-tricks';
	const shareOptions = [
		{
			icon: 'linkedin',
			href: `https://www.linkedin.com/sharing/share-offsite/?url=${url.trim()}`
		},
		{
			icon: 'twitter',
			href: `https://twitter.com/intent/tweet?text=${url.trim()}`
		}
	];
</script>


<nav class="social-share float-right relative bottom-5 right-2 md:right-1 lg:right-0" arial-label="share this post">
    <ul class="flex flex-row">
		{#each shareOptions as { href, icon }}
			<li class="ml-4">
				<a arial-label="share on {icon}" {href}>
					<img
						width="24"
						height="24"
						title="share on {icon}"
						alt="share on {icon} image"
						src="/images/icons/{icon}.svg"
					/>
				</a>
			</li>
		{/each}
	</ul>
</nav>

