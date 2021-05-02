<script>
	let navigationToggler = false;

	const information = {
		brandImageJPG: 'https://achimoraites.github.io/images/brand-image.jpg',
		brandImage: 'https://achimoraites.github.io/images/brand-image.webp'
	};

	function handleNavigationToggler() {
		navigationToggler = !navigationToggler;
	}
</script>

<!-- component -->
<nav class="bg-gray-900 h-screen grid grid-cols-1 grid-rows-2">
	<div>
		<div class="image-box py-5 pl-4 pr-5">
			<a href="/">
				<picture>
					<source srcset={information.brandImageJPG} />
					<img
						class="w-full rounded-full p-1 bg-gray-600"
						src={information.brandImage}
						alt="brandimage"
					/>
				</picture>
			</a>
		</div>
		<hr class="border-1 border-gray-600 w-full" />
	</div>

	<div>
		<ul class="w-full flex flex-col text-center text-white">
			<li class="bg-blue-800">
				<a aria-current="page" class="active" href="/"><span>Home</span></a>
			</li>
			<li class="hover:bg-blue-600 hover:bg-opacity-40 hover:duration-300 ease-in-out">
				<a href="/resume"><span>Resume</span></a>
			</li>
			<li class="hover:bg-blue-600 hover:bg-opacity-40 hover:duration-300 ease-in-out">
				<a href="/articles"><span>Articles</span></a>
			</li>
		</ul>
	</div>

	<hr class="border-1 border-gray-600 w-full" />

	<p class="text-gray-400 py-2 text-xs text-center">
		© 2021 <b
			><a rel="noopener noreferrer" target="_blank" href="https://achimoraites.github.io"
				>Achilles Moraites</a
			></b
		>
	</p>
</nav>

<style>
	.image-box {
		max-width: 90%;
		margin: 0 auto;
	}
</style>
