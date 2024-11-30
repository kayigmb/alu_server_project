<script>
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { onMount, onDestroy } from 'svelte';
	import Logo from '$lib/assets/logo.jpg';
	import User from '$lib/assets/user.png';
	let { user_info } = $props();
	let show = $state(false);
	import { supabase } from '$lib/supabaseClient';
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

	function Logout() {
		supabase.auth.signOut();
	}
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
			src={Logo}
			alt="logo"
			class="h-[100%] w-[100%] object-contain
            mix-blend-multiply"
			onclick={() => goto('/')}
		/>
	</div>

	{#if user_info}
		<div
			class="dropdown-container relative flex h-[40px]
			w-[40px] items-center justify-center gap-2
			rounded-full bg-gray-100"
		>
			<img
				aria-hidden="true"
				src={User}
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
					<button
						class="w-full px-4 py-2
						text-left hover:bg-gray-100"
						onclick={() => Logout()}>Log Out</button
					>
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
