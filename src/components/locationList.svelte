<script lang="ts">
	import LocationTile from './locationTile.svelte';

	import { locationsRead, filtersRead } from '../hooks/context';
	import type { Location } from '../interfaces/interfaces';
	import { onMount } from 'svelte';

	let locations: Location[] = [];
	let loading = true; // To track loading state

	// Load locations when the component mounts
	onMount(async () => {
		try {
			locations = (await $locationsRead).locations; // Wait for the promise to resolve
		} catch (error) {
			console.error(error);
		} finally {
			loading = false; // Update loading state
		}
	});

	// Reactive variable for filtered locations
	$: filteredLocations = $filtersRead ? getFilteredList(locations) : [];

	function getFilteredList(locations: Location[]) {
		let result: Location[] = [];

		for (const location of locations) {
			if (sharedName(location) && sharedTag(location)) {
				result.push(location);
			}
		}

		return result;
	}

	function sharedTag(location: Location): boolean {
		if ($filtersRead.filters.length > 0) {
			return Object.keys(location.tags).some((tag: string) => $filtersRead.filters.includes(tag));
		}
		return true;
	}

	function sharedName(location: Location): boolean {
		if ($filtersRead.search != '') {
			return location.name.toLocaleLowerCase().startsWith($filtersRead.search.toLocaleLowerCase());
		}
		return true;
	}
</script>

<div class="tile-list">
	{#if loading}
		<p>Loading...</p>
	{:else if filteredLocations.length === 0}
		<p>No locations found.</p>
	{:else}
		{#each filteredLocations as location}
			<LocationTile {location} />
		{/each}
	{/if}
</div>
