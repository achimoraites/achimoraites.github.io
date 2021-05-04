<script lang="ts">
	export let title: string;
	export let text: string;
	export let image: string;
</script>

<div class="shadow-md rounded-sm p-4 bg-white relative overflow-hidden">
	<img alt="moto" src={image} class="absolute -right-20 -bottom-8 h-auto w-40" />
	<div class="w-4/6">
		<h5 class="text-gray-800 text-lg font-medium mb-2">
			{title}
		</h5>
		<p class="text-gray-700 text-md">
			{text}
		</p>
	</div>
</div>
