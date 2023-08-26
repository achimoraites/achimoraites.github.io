<script>
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	/**
	 * @type {any[]}
	 */
	export let navLinks = [];
	export let title = 'Achilles Moraites';

	let openMenu = false;
	/**
	 * @type {any[]}
	 */
	let localNavlinks;

	$: localNavlinks = [...navLinks];

	/**
	 * @param {string} href
	 */
	function updateLinks(href) {
		console.log(href);
		if (href == '/') {
			localNavlinks = navLinks.map((l) =>
				l.href === href ? { ...l, active: true } : { ...l, active: false }
			);
		} else {
			localNavlinks = navLinks.map((l) =>
			l.href !== '/' && href.includes(l.href) ? { ...l, active: true } : { ...l, active: false }
		);
		}

	}

	const navLinkStyle = {
		default: 'navlinks__default',
		active: 'navlinks__active'
	};

	function toggleMenu() {
		openMenu = !openMenu;
	}

	onMount(() => {
		updateLinks(window.location.pathname);
	});
	afterNavigate(() => {
		updateLinks(window.location.pathname);
	});
</script>

<nav class="header top-nav">
	<div class="header__container">
		<div class="brand">
			<a class="brand__link" href="/">
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
				{#each localNavlinks as { href, active, label }}
					<li class="navlinks__list-element">
						<a class={active ? navLinkStyle.active : navLinkStyle.default} {href}
							><span>{label}</span></a
						>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>
