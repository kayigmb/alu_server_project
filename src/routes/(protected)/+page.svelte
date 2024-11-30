<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Alert from '$components/Alert.svelte';

	let name: string = '';
	let form: { meals: any[] | null; error: string | null; resp?: string } = {
		meals: null,
		error: null
	};

	onMount(() => {
		const queryParams = new URLSearchParams(window.location.search);
		name = queryParams.get('name') || '';
	});

	async function handleSearch() {
		if (!name) {
			form.error = 'Name is required';
			return;
		}

		const fetchResponse = await fetch(
			`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
		);

		if (!fetchResponse.ok) {
			form.error = 'Failed to fetch data from API';
			return;
		}

		const data = await fetchResponse.json();

		if (data.meals) {
			form.meals = data.meals;
		} else {
			form.meals = null;
			form.error = 'Meal not found';
		}
	}
</script>

<div class="m-auto">
	<h1 class="text-center text-5xl">Search Meal Recipes</h1>
	<form class="w-[100%]" onsubmit={() => handleSearch()}>
		<div class="flex w-[100%] flex-col justify-center">
			<input
				type="text"
				name="name"
				bind:value={name}
				class="m-auto mt-4 h-[40px] w-[70%] rounded-lg text-center"
			/>
			<button
				type="submit"
				class="m-auto mt-4 h-[40px] w-[300px] rounded-[40px] border bg-green-500 shadow-lg"
			>
				Submit
			</button>
		</div>
	</form>

	{#if form.error}
		<Alert message={form.error} type="error" />
	{/if}

	{#if form?.meals}
		<h1 class="my-5 text-center text-4xl font-bold">Search Results</h1>
		<div class="flex flex-wrap gap-2">
			{#each form?.meals as meal}
				<div class="h-[300px] w-[300px] rounded-lg shadow-lg">
					<img src={meal.strMealThumb} alt={meal.name} class="h-[200px] w-[100%] object-contain" />
					<p class="my-2 text-center">{meal.strMeal}</p>
					<div class="flex items-center justify-center">
						<button
							onclick={() => goto(`${meal?.idMeal}`)}
							class="text-bold m-auto h-[50px] w-[60%] rounded-lg border bg-green-500 text-xl"
						>
							View More
						</button>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>
