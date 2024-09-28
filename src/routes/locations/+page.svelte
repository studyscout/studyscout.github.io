<script lang="ts">
	import type { Location } from '../../scripts/storage';

	export let data: Location;
</script>

{#await data}
	<p>Loading...</p>
{:then place}
	<p>{place.Latitude}</p>
	<p>{place.Longitude}</p>
{/await}
