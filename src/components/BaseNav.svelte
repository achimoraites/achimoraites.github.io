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
<nav class={navigationToggler ? 'layout-header is-visible' : 'layout-header'}>
	<button aria-label="menu-button" on:click={handleNavigationToggler} class="layout-header-toggler">
		<!-- {!navigationToggler ? <LineIcon name="menu" /> : <LineIcon name="close" />} -->
	</button>
	<div class="layout-header-inner">
		<div class="layout-header-image">
			<a href="/">
				<picture>
					<source srcset={information.brandImageJPG} />
					<img src={information.brandImage} alt="brandimage" />
				</picture>
			</a>
		</div>
		<ul class="layout-header-menu">
			<li><a class="active" href="/"><span>Home</span></a></li>
			<!-- {/* <li><a href="/about"><span>About</span></a></li> */} -->
			<li><a href="/resume"><span>Resume</span></a></li>
			<li><a href="/articles"><span>Articles</span></a></li>
		</ul>
		<p class="layout-header-copyright">
			&copy; {new Date().getFullYear()}
			<b
				><a rel="noopener noreferrer" target="_blank" href="https://achimoraites.github.io"
					>Achilles Moraites</a
				></b
			>
		</p>
	</div>
</nav>

<style>
	/**
 * Header Styles
 */

	.layout-header {
		position: fixed;
		left: 0;
		top: 0;
		transform: translateX(0);
		height: 100vh;
		width: 300px;
		background: rgb(38, 37, 53);
		border-right: 1px solid rgb(85, 83, 117);
		z-index: 10;
	}

	.layout-header-inner {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		overflow: hidden;
		overflow-y: auto;
	}

	.layout-header-toggler {
		position: absolute;
		left: 100%;
		top: 20px;
		padding: 0;
		height: 100px;
		width: 50px;
		text-align: center;
		font-size: 1.6rem;
		background: rgb(38, 37, 53);
		display: flex;
		justify-content: center;
		align-items: center;
		display: none;
	}
	.layout-header-toggler:focus {
		border-color: rgb(85, 83, 117);
	}

	.layout-header-image {
		padding: 20px 0;
		display: block;
		width: 100%;
		text-align: center;
		border-bottom: 1px solid rgb(85, 83, 117);
	}

	.layout-header-image a {
		height: 200px;
		width: 200px;
		border-radius: 1000px;
		border: 7px solid rgb(85, 83, 117);
		overflow: hidden;
		display: inline-block;
		vertical-align: middle;
	}

	.layout-header-menu {
		width: 100%;
		padding: 15px 5px;
	}

	.layout-header-menu li {
		list-style: none;
		text-align: center;
		display: block;
	}

	.layout-header-menu li:not(:last-child) {
		margin-bottom: 1px;
	}
	.layout-header-menu li a {
		text-transform: uppercase;
		font-size: 0.94rem;
		letter-spacing: 1px;
		display: block;
		padding: 5px 0;
		color: rgb(255, 255, 255);
		/* transition: $transition; */
		font-weight: 600;
		position: relative;
		overflow: hidden;
		z-index: 1;
	}

	.layout-header-menu li a::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 100%;
		height: 100%;
		width: 0;
		background: rgb(38, 37, 53);
		visibility: hidden;
		/* transition: $transition; */
		z-index: -1;
	}

	.layout-header-menu li a:hover {
		color: rgb(38, 37, 53);
	}

	.layout-header-menu li a:hover::before {
		width: 100%;
		visibility: visible;
	}

	.layout-header-menu li a.active {
		color: #ffffff;
	}

	.layout-header-menu li a.active:before {
		background: #037fff;
		width: 100%;
		visibility: visible;
	}

	.layout-header-copyright {
		display: block;
		width: 100%;
		text-align: center;
		margin-bottom: 0;
		font-size: 1rem;
		padding: 15px 0;
		border-top: 1px solid rgb(85, 83, 117);
	}
	.layout-header-copyright {
		color: white;
		/* transition: $transition; */
	}

	.layout-header-copyright a:hover {
		color: rgb(38, 37, 53);
	}
</style>
