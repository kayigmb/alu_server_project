<script>
	let { data } = $props();
	let meals = data?.meals;
</script>

{#if meals}
	{#each meals as meal}
		<div class="my-6 rounded border p-4 shadow-md">
			<img src={meal.strMealThumb} alt={meal.strMeal} class="h-64 w-full rounded-md object-cover" />
			<h2 class="mt-4 text-2xl font-semibold">{meal.strMeal}</h2>
			<p class="text-sm text-gray-500">{meal.strCategory} | {meal.strArea}</p>
			<p class="mt-2">{meal.strInstructions}</p>
			<h3 class="mt-4 text-xl font-bold">Ingredients:</h3>
			<ul class="list-disc pl-5">
				{#each Object.keys(meal).filter((key) => key.startsWith('strIngredient') && meal[key]) as key}
					<li>{meal[key]} - {meal[`strMeasure${key.split('strIngredient')[1]}`]}</li>
				{/each}
			</ul>
			<a href={meal.strSource} target="_blank" class="mt-4 inline-block text-blue-500"
				>Recipe Source</a
			>
			<a href={meal.strYoutube} target="_blank" class="ml-4 inline-block text-blue-500"
				>Watch Recipe Video</a
			>
		</div>
	{/each}
{/if}
