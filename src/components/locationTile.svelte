<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Location } from '../scripts/storage';
	import '../styles/home.sass';

	export let location: Location;

	function navigate() {
		goto(`/locations?id=${location}`);
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="tile" on:click={navigate}>
	<img src="https://placecats.com/neo/100/100" height="100" width="100" alt="img" />
	<div class="tile-content">
		<h3>{location.Name}</h3>
		<p>{location.Stars} / 5</p>
	</div>
</div>
