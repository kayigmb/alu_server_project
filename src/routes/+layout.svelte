<script lang="ts">
	import '../app.css';
	import 'iconify-icon';
	import { invalidateAll } from '$app/navigation';
	import { onMount } from 'svelte';
	let { children } = $props();
	import { supabase } from '$lib/supabaseClient';

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			invalidateAll();
		});
		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<svelte:head>
	<title>Meal Preping System</title>
</svelte:head>

{@render children()}
