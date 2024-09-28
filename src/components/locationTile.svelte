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
	<p>{location.Name}</p>
</div>
