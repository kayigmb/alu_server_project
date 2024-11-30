<script>
	let { children, data } = $props();
	import Header from '$components/Header.svelte';
</script>

<div class="min-h-[100vh] bg-gray-100 p-1">
	<Header user_info={data.user} />

	<div class="m-auto mt-1 min-h-full w-[95%] bg-red-200 sm:w-[70%]">
		{@render children()}
	</div>
</div>
