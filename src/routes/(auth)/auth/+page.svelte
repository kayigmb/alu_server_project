<script lang="ts">
	import { supabase } from '$lib/supabaseClient';
	import type { Provider } from '@supabase/supabase-js';

	export async function handlelogin(provider: Provider) {
		if (!provider) {
			return { error: 'Provider is required' };
		}

		const { data, error } = await supabase.auth.signInWithOAuth({
			provider
		});

		if (error) {
			console.error('Error during login:', error);
			return { error: error.message };
		}

		return { url: data.url };
	}
</script>

<div>
	<h1 class="mt-5 text-center text-[50px] font-medium">Login</h1>
	<div class="mt-10">
		<button
			onclick={() => handlelogin('github')}
			formaction="?/auth&provider=github"
			class="mb-[20px] flex h-[41px] w-[100%]
  items-center justify-center gap-2 rounded-[5px] bg-white text-[20px]
		font-bold"
		>
			<iconify-icon icon="logos:github-icon" class="text-[25px] text-black"></iconify-icon>
			Github
		</button>

		<button
			onclick={() => handlelogin('github')}
			formaction="?/auth&provider=google"
			class="mb-[20px] flex h-[41px] w-[100%]
  items-center justify-center gap-2 rounded-[5px] bg-white text-[20px] font-bold"
		>
			<iconify-icon icon="devicon:google" class="text-[25px] text-black"></iconify-icon>
			Google
		</button>
	</div>
</div>
