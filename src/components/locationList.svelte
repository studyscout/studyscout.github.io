<script lang="ts">
	import LocationTile from './locationTile.svelte';

	import { locationsRead } from '../hooks/context';
</script>

<div class="tile-list">
	{#await $locationsRead}
		<p>Loading...</p>
	{:then { locations }}
		{#each locations as location}
			<LocationTile {location} />
		{/each}
	{:catch error}
		{console.error(error)}
		<p>Something went wrong...</p>
	{/await}
</div>
