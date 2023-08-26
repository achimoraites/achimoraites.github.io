<script lang="ts">
	import OpenGraph from '../components/OpenGraph.svelte';
</script>

<OpenGraph
	data={{
		description:
			'Achilles Moraites is a software engineer with skills in both the front end and the back end, skills include Angular, React, Vue, Node, AWS, Python and more...',
		title: 'Achilles Moraites',
		type: 'website',
		image: '/images/preview.jpg',
		tags: [
			'Achilles Moraites is a software engineer with skills in both the front end and the back end, skills include Angular, React, Vue, Node, AWS, Python and more...'
		]
	}}
/>

<div class="flex justify-center items-center h-90vh">
	<section class="container text-center">
		<h1 class="text-4xl font-bold mb-2">
			Hi, I am <span class="text-blue-800">Achilles Moraites</span>
		</h1>
		<p>
			I am a software engineering lover that actively looks for ways to improve the quality of my
			work, while trying to make the complex as simple and efficient.
		</p>
		<ul class="flex justify-center mt-4">
			<li>
				<a
					rel="noopener noreferrer"
					target="_blank"
					aria-label="twitter"
					href="https://twitter.com/achimoraites"
				>
					<img
						class="icon"
						src="/images/icons/twitter.svg"
						alt="twitter icon"
						width="25"
						height="25"
					/></a
				>
			</li>
			<li class="mx-5">
				<a
					rel="noopener noreferrer"
					target="_blank"
					aria-label="linkedin"
					href="https://www.linkedin.com/in/achimoraitis"
				>
					<img
						class="icon"
						src="/images/icons/linkedin.svg"
						alt="linkedin icon"
						width="25"
						height="25"
					/></a
				>
			</li>
			<li>
				<a
					rel="noopener noreferrer"
					target="_blank"
					aria-label="github"
					href="https://github.com/achimoraites"
				>
					<img
						class="icon"
						src="/images/icons/github.svg"
						alt="github icon"
						width="25"
						height="25"
					/>
				</a>
			</li>
		</ul>
	</section>
</div>

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
