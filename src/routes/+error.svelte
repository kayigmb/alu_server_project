<script>
	import { page } from '$app/stores';
</script>

<div
	class="bg-principalGray flex min-h-[100vh] w-full flex-col items-center justify-center text-red-700"
>
	<h1 class="text-[10vh] font-bold">{$page.status}: {$page.error && $page.error.message}</h1>

	<div class="flex gap-10">
		<button
			on:click={() => window.location.reload()}
			class="bg-principalYellow
        h-[50px] w-[150px] rounded-lg border text-lg font-bold
        text-black hover:bg-red-300">Reload Page</button
		>

		<button
			on:click={() => window.history.back()}
			class="bg-principalYellow
        h-[50px] w-[150px] rounded-lg border text-lg font-bold
        text-black hover:bg-green-300">Previous Page</button
		>
	</div>
</div>
