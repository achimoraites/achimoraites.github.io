<script lang="ts">
	import ShadowedHeading from '../components/ShadowedHeading.svelte';
	import Card from '../components/Card.svelte';
	import OpenGraph from '../components/OpenGraph.svelte';

	const info = {
		about: {
			title: 'I am a Frontend Developer',
			text: `Experienced in Angular, React and VueJS with the latest best practices in modern web development`
		}
	};
</script>

<OpenGraph
	data={{
		description:
			'Achilles Moraites is a software engineer with skills in both the front end and the back end, skills include Angular, React, Vue, Node, AWS, Python and more...',
		title: 'About | Achilles Moraites',
		type: 'website',
		image: 'https://achimoraites.github.io/images/preview.jpg',
		tags: [
			'Achilles Moraites is a software engineer with skills in both the front end and the back end, skills include Angular, React, Vue, Node, AWS, Python and more...'
		]
	}}
/>

<main class="px-2 mt-16 min-h-screen h-auto">
	<section class="max-w-4xl mb-8">
		<header>
			<ShadowedHeading title="About" />
		</header>
		<div class="mt-12 bg-white p-2 border-gray-300 border-b-2">
			<p>
				I am currently working as a <strong>Frontend Engineer</strong> at
				<strong
					><a
						class="text-indigo-900 hover:underline"
						target="_blank"
						rel="nofollow noopener external"
						href="https://www.lovetoknowmedia.com/">LoveToKnowMedia</a
					></strong
				>, which is where my passion for creativity and engineering converge.
			</p>
			<p class="mt-2">Outside of work I have a wonderful partner and a dog.</p>
			<p>I am also working on a few side projects and Open Source as well.</p>
			<p class="mt-2">
				Currently I am not accepting freelance work, but I'd love to get coffee and get to know you,
				so don’t hesitate to get in touch.
			</p>
		</div>
	</section>
	<section class="max-w-4xl mb-16">
		<header>
			<ShadowedHeading title="Services" />
		</header>

		<div class="grid sm:grid-cols-2 grid-cols-1 gap-4 mt-12">
			<Card
				title="Frontend Development"
				text="Experienced in Angular, React, VueJS and Svelte with the latest best practices in modern web development creating great user experiences."
				icon="/images/icons/code.svg"
			/>
			<Card
				title="Speed Optimization"
				text="Using the latest tooling and guidelines, i create reliable, accesible and performant applications."
				icon="/images/icons/rocket.svg"
			/>
		</div>
	</section>
</main>
