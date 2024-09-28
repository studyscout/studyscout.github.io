<script lang="ts">
	import type { Coordinates } from '../interfaces/interfaces';
	import places from '../scripts/storage';
	import useLocation from '../hooks/useLocation';

	useLocation(setLocation);

	function setLocation(coordinates: Coordinates) {
		location = coordinates;
	}

	let location: Coordinates | undefined;
</script>

{#each places as place, index}
	<a href="/locations?id={index}"> go to {place.Name} <br /></a>
{/each}
