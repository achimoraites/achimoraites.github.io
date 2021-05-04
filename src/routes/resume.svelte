<script lang="ts">
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

<main class="px-2 mt-24">
	<section class="max-w-4xl">
		<h3>Skills</h3>
		<div class="grid sm:grid-cols-2 grid-cols-1 gap-4">
			<Card
				title="Frontend Development"
				text="Experienced in Angular, React and VueJS with the latest best practices in modern web development creating great user experiences."
				image="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
			/>
			<Card
				title="Mobile App Development"
				text="Developing mobile applications using hybrid technologies: PWA with Responsive design, Ionic 4 with Angular or using React Native."
				image="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
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
