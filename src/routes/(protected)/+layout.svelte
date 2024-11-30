<script>
	let { children, data } = $props();
	import Header from '$components/Header.svelte';
</script>

<div class="min-h-[100vh] bg-gray-100">
	<Header user_info={data.user} />

	<div
		class="m-auto min-h-full w-[95%] rounded-b-sm border border-t-0 border-gray-100/5
		p-2 shadow-lg sm:w-[50%]"
	>
		{@render children()}
	</div>
</div>
