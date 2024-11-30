<script>
	import { cubicInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	let { message, type } = $props();
	const alertMessagesEnum = ['success', 'error'];

	if (!alertMessagesEnum.includes(type)) {
		console.log('Unknown Alert Type');
		show = false;
	}

	let show = $state(true);

	setTimeout(() => {
		show = false;
	}, 3000);
</script>

{#if show}
	<div
		transition:fly={{ x: 500, delay: 100, duration: 800, easing: cubicInOut }}
		class="fixed right-4 top-4 w-[80%] md:w-auto"
	>
		<div
			class={`h-[50px] min-w-[300px] ${
				type === 'success' ? 'bg-green-400' : 'bg-red-500'
			} flex items-center gap-5 rounded p-4 text-center`}
		>
			<iconify-icon
				icon={type === 'success' ? 'akar-icons:info-fill' : 'bxs:error'}
				class="text-[20px] text-black"
			>
			</iconify-icon>
			{message || 'Unknown Alert'}
			<div
				onclick={() => (show = !show)}
				aria-hidden="true"
				class="flex
                items-center justify-center rounded-full bg-white/50 px-1
                hover:bg-white/90"
			>
				<p>X</p>
			</div>
		</div>
	</div>{/if}
