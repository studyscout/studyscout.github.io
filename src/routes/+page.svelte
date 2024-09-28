<script lang="ts">
	import type { Coordinates } from '../interfaces/interfaces';
	import places from '../scripts/storage';
	import useLocation from '../hooks/useLocation';
	import LocationTile from '../components/locationTile.svelte';
	import '../styles/global.sass';
	import '../styles/home.sass';

	useLocation(setLocation);

	function setLocation(coordinates: Coordinates) {
		location = coordinates;
	}

	let location: Coordinates | undefined;
</script>

<div class="tile-list">
	{#each places as place, index}
		<LocationTile location={place} />
		<!-- <a href="/locations?id={index}"> go to {place.Name} <br /></a> -->
	{/each}
</div>
