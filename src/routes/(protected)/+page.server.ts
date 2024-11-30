import { fail, redirect, type Actions } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	// if (!locals.user || !locals.session) {
	// 	return redirect(302, '/auth');
	// }
	return {
		user: locals.user
	};
};

export const actions: Actions = {
	generate: async ({ request, fetch }) => {
		const formData = await request.formData();

		if (!formData.get('name')) {
			return { error: 'Name is required' };
		}

		const fetchResponse = await fetch(
			`https://www.themealdb.com/api/json/v1/1/search.php?s=${formData.get('name')}`
		);

		if (!fetchResponse.ok) {
			return fail(404, { error: 'Failed to fetch data from API' });
		}

		const data = await fetchResponse.json();

		return {
			meals: data.meals
		};
	}
};
