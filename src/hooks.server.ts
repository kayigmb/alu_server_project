import '$lib/supabaseClient';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { redirect } from '@sveltejs/kit';

export async function handle({ event, resolve }: { event: any; resolve: any }) {
	const { session, supabaseClient } = await getSupabase(event);

	if (event.route.id && event.route.id.includes('(protected)') && !session)
		return redirect(303, '/auth');

	event.locals.session = session;
	event.locals.user = session?.user?.user_metadata;
	event.locals.client = supabaseClient;

	return resolve(event);
}
