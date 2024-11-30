<script>
	let { children } = $props();
</script>

<div
	class="flex min-h-[100vh] w-[100%] items-start sm:items-center justify-normal
	bg-primary_cream sm:justify-center sm:bg-gray-100"
>
	<div
		class="min-h-[300px] w-[95%] items-center rounded-lg
		bg-primary_cream p-5 sm:w-[40%]"
	>
		{@render children()}
	</div>
</div>
