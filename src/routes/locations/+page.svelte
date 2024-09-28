<script lang="ts">
	import type { Location } from '../../interfaces/interfaces';

	export let data: Location;
</script>

{#await data}
	<p>Loading...</p>
{:then place}
	<h1>This is the page for "{place.name}"</h1>
	<p>{place.location.lat}</p>
	<p>{place.location.long}</p>
{/await}
