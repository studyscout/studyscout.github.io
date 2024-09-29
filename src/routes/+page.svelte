<script lang="ts">
	import type { Coordinates } from '../interfaces/interfaces';
	import type { Location } from '../interfaces/interfaces';
	import useLocation from '../hooks/useLocation';
	import LocationTile from '../components/locationTile.svelte';
	import '../styles/global.sass';
	import '../styles/home.sass';

	useLocation(setLocation);

	function setLocation(coordinates: Coordinates) {
		coordinates = coordinates;
	}

	let coordinates: Coordinates | undefined;
	export let data: { locations: Location[] };
</script>

<div class="tile-list">
	{#await data}
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
