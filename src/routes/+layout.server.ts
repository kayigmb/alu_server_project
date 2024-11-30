import { SUPABASE_URL, SUPABASE_ANON_KEY } from '$env/static/private';

export const load = async ({ locals }) => {
	return {
		users: locals.user,
		session: locals.session,
		supabase_url: SUPABASE_URL,
		supabase_anon_key: SUPABASE_ANON_KEY
	};
};
