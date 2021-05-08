<script lang="ts">
	import ShadowedHeading from '../components/ShadowedHeading.svelte';
	import Card from '../components/Card.svelte';
</script>

<svelte:head>
	<title>Achilles Moraites</title>
	<meta
		name="description"
		content="Achilles Moraites is a software engineer with skills in both the front end and the back end, skills include Angular, React, Vue, Node, AWS, Python and more..."
	/>
	<meta
		name="keywords"
		content="Achilles Moraites is a software engineer with skills in both the front end and the back end, skills include Angular, React, Vue, Node, AWS, Python and more..."
	/>
	<meta property="og:type" content="blog" />
	<meta property="og:site_name" content="Achilles Moraites" />
</svelte:head>

<main class="px-2 mt-16">
	<section class="max-w-4xl mb-16">
		<ShadowedHeading title="skills" />
		<div class="grid sm:grid-cols-2 grid-cols-1 gap-4 mt-24">
			<Card
				title="Frontend Development"
				text="Experienced in Angular, React and VueJS with the latest best practices in modern web development creating great user experiences."
				icon="/images/icons/code.svg"
			/>
			<Card
				title="Mobile App Development"
				text="Developing mobile applications using hybrid technologies: PWA with Responsive design, Ionic 4 with Angular or using React Native."
				icon="/images/icons/mobile.svg"
			/>
		</div>
		<div class="grid sm:grid-cols-2 grid-cols-1 gap-4 my-4">
			<Card
				title="Speed Optimization"
				text="Using the latest tooling and guidelines, i create reliable and performant applications."
				icon="/images/icons/rocket.svg"
			/>
			<Card
				title="UX design"
				text="Designing applications to be user friendly in any platform."
				icon="/images/icons/pallet.svg"
			/>
		</div>
	</section>
</main>

<style>
	.container {
		max-width: 80%;
		height: min-content;
	}
	.icon {
		width: 25px;
	}
	.icon:hover {
		transform: scale(1.2);
	}
</style>
