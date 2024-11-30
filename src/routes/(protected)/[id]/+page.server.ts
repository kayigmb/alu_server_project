export const load = async ({ fetch, url, params }: { fetch: any; url: URLSearchParams }) => {
	const fetchResponse = await fetch(
		`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
	);
	if (!fetchResponse.ok) {
		return { error: 'Failed to fetch data from API' };
	}
	const dataOfMeal = await fetchResponse.json();
	return { meals: dataOfMeal.meals };
};
