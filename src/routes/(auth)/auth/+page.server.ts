import { redirect } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';
import type { Provider } from '@supabase/supabase-js';

export const load = async ({ locals }) => {
	if (locals?.session !== null) return redirect(303, '/');
	return;
};

export const actions = {
	auth: async ({ url }: { url: URL }) => {
		const provider = url.searchParams.get('provider');
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: <Provider>`${provider}`
		});
		if (error) {
			console.log(error);
			return { failed: true };
		}
		return redirect(303, data.url);
	}
};
