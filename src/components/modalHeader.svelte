<script lang="ts">
	import { filtersStore } from '../hooks/context';
	import type { ListFilters } from '../interfaces/interfaces';

	let filters: ListFilters = { search: '', filters: [] };

	// Update the store whenever filters change
	function updateFilters() {
		filtersStore.set(filters);
	}

	// Bind the input value and update the store on input event
	$: filters.search, updateFilters(); // This makes sure to update only when filters.search changes
</script>

<div class="list-header">
	<input placeholder="Search" class="search" bind:value={filters.search} on:input={updateFilters} />
	<img src="/filter-solid.svg" alt="filter" class="filter" />
</div>
