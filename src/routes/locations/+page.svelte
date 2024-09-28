<script lang="ts">
	import type { Location } from '../../interfaces/interfaces';

	export let data: Location;
</script>

{#await data}
	<p>Loading...</p>
{:then place}
	<p>{place.location.lat}</p>
	<p>{place.location.long}</p>
{/await}
