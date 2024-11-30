<script>
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { onMount, onDestroy } from 'svelte';

	let { user_info } = $props();
	let show = $state(false);

	const handleOutsideClick = (event) => {
		if (!event.target.closest('.dropdown-container')) {
			show = false;
		}
	};

	onMount(() => {
		if (browser) {
			window.document.addEventListener('click', handleOutsideClick);
		}
	});

	onDestroy(() => {
		if (browser) {
			window.document.removeEventListener('click', handleOutsideClick);
		}
	});
</script>

<div
	class="flex h-[70px] w-full items-center justify-between
	bg-primary_cream/70 p-1 sm:justify-around sm:p-5"
>
	<div
		class="h-[60px] w-[60px] rounded-[100%]
        bg-gray-100 object-contain"
	>
		<img
			aria-hidden="true"
			src="logo.png"
			alt="logo"
			class="h-[100%] w-[100%] object-contain
            mix-blend-multiply"
			onclick={() => goto('/')}
		/>
	</div>

	<div class="hidden sm:block">
		<div class="flex">
			<div
				class="flex w-[40px] items-center justify-center rounded-l-[20px]
				bg-gray-100"
			>
				<iconify-icon icon="ic:round-search" class="text-[25px] text-black"></iconify-icon>
			</div>
			<input
				type="text"
				class="h-[40px] w-[300px] rounded-r-[20px] border-none
			bg-gray-100 p-2 focus:border-none active:border-none"
				placeholder="Search"
			/>
		</div>
	</div>

	{#if user_info}
		<div
			class="dropdown-container relative flex h-[40px]
			w-[40px] items-center justify-center gap-2
			rounded-full bg-gray-100"
		>
			<img
				aria-hidden="true"
				src="user.png"
				alt="logo"
				class="h-[100%] w-[100%] cursor-pointer object-contain mix-blend-multiply"
				onclick={() => (show = !show)}
			/>
			{#if show}
				<div class="absolute right-0 mt-44 w-48 rounded-md bg-white shadow-lg">
					<div class="px-4 py-2">
						<p class="font-bold">
							Hello,
							{user_info.full_name}
						</p>
					</div>
					<button class="w-full px-4 py-2 text-left hover:bg-gray-100">Manage Blogs</button>
					<form action="/api/logout" method="POST">
						<button class="w-full px-4 py-2 text-left hover:bg-gray-100">Log Out</button>
					</form>
				</div>
			{/if}
		</div>
	{:else}
		<button
			onclick={() => goto('/auth')}
			class="h-[40px] w-[70px] rounded-[80px] bg-black text-[20px] font-bold text-white"
		>
			Login
		</button>
	{/if}
</div>
