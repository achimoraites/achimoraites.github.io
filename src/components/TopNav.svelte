<script>
	export let navLinks = [];
	export let title = 'Achilles Moraites';

	function updateLinks(href) {
		navLinks = navLinks.map((l) =>
			l.href === href ? { ...l, active: true } : { ...l, active: false }
		);
	}

	const navLinkStyle = {
		default: 'navlinks__default',
		active: 'navlinks__active'
	};

	let openMenu = false;

	function toggleMenu() {
		openMenu = !openMenu;
	}
</script>

<nav class="header">
	<div class="header__container">
		<div class="brand">
			<a class="brand__link" href="/blog">
				{title}
			</a>
		</div>

		<div class="burger-menu">
			<button on:click={() => toggleMenu()} id="nav-toggle" class="burger-menu__button">
				<svg
					width="12"
					height="12"
					class="fill-current h-3 w-3"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>Menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
				</svg>
			</button>
		</div>

		<div class="navlinks {openMenu ? '' : 'hidden-bar'}" id="nav-content">
			<ul class="navlinks__list list-reset">
				{#each navLinks as { href, active, label }}
					<li
						class="sm:mr-3 mobile:text-center mobile:border-t-2 mobile:border-gray-800"
						on:click={() => updateLinks(href)}
					>
						<a class={active ? navLinkStyle.active : navLinkStyle.default} {href}
							><span>{label}</span></a
						>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>

<style>
	.header {
		@apply fixed w-full z-10 top-0 bg-gray-800 font-mono lg:max-h-16;
	}
	.header__container {
		@apply w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3;
	}

	.brand {
		@apply pl-4;
	}

	.brand__link {
		@apply text-gray-300 no-underline hover:no-underline font-extrabold text-xl;
	}

	.burger-menu {
		@apply block lg:hidden pr-4;
	}

	.burger-menu__button {
		@apply flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-green-500 appearance-none focus:outline-none;
	}

	.navlinks {
		@apply w-full flex-grow lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 bg-gray-900 md:bg-transparent z-20;
	}

	.navlinks__list {
		@apply lg:flex justify-end flex-1 items-center list-none;
	}

	.navlinks__default {
		@apply mobile:w-full inline-block text-gray-300 no-underline hover:text-gray-400 hover:no-underline py-2 px-4;
	}
	
	.navlinks__active {
		@apply mobile:w-full inline-block py-2 px-4 text-blue-400 font-bold no-underline;
	}
	.hidden-bar {
		@apply hidden lg:inline;
	}
</style>
