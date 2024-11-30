export const load = async ({ locals }) => {
	return {
		users: locals.user,
		session: locals.session
	};
};
