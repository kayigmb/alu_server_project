import { fail, redirect, type Actions } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';
import type { Provider } from '@supabase/supabase-js';

export const load = async ({ locals }) => {
	if (locals?.session !== null) return redirect(303, '/');
	return;
};

export const actions: Actions = {
	auth: async ({ url }: { url: URL }) => {
		const provider = url.searchParams.get('provider');
		if (!provider) {
			return fail(400, { error: 'Provider is required' });
		}
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: provider as Provider
		});
		if (error) {
			console.log(error);
			return { failed: true };
		}
		return redirect(303, data.url);
	}
};
