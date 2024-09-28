<script lang="ts">
	import { onMount } from 'svelte';
	import { getLocations } from './firestore';

	let data: Promise<any[]>;

	onMount(() => {
		data = getLocations();
	});
</script>

{#if data}
	{#await data}
		<p>Loading...</p>
	{:then cities}
		{#each cities as city}
			<p>{JSON.stringify(city)}</p>
		{/each}
	{/await}
{/if}
