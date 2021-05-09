<script lang="ts">
	export let title: string;
	export let text: string;
	export let icon: string;
</script>

<div class="shadow-md rounded-sm p-4 bg-white border-solid border-t-4 border-gray-400 hover:border-gray-500">
	<img alt={title + ' icon'} src={icon} class="h-auto w-10 mb-4" />
	<div class="">
		<h5 class="text-gray-800 text-xl font-bold mb-2">
			{title}
		</h5>
		<p class="text-gray-700 text-md">
			{text}
		</p>
	</div>
</div>
