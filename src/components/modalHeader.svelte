<script lang="ts">
	import { onMount } from 'svelte';
	import { editTagsStore, filtersStore } from '../hooks/context';
	import type { ListFilters } from '../interfaces/interfaces';
	import EditTags from './editTags.svelte';

	let filters: ListFilters = { search: '', filters: [] };
	let filtersVisible = false;

	// Update the store whenever filters change
	function updateFilters() {
		filtersStore.set(filters);
	}

	onMount(() => {
		editTagsStore.set({});
	});

	// Bind the input value and update the store on input event
	$: filters.search, updateFilters(); // This makes sure to update only when filters.search changes
	$: filters.filters = Object.keys($editTagsStore ?? {});
</script>

<div class="list-header">
	<input placeholder="Search" class="search" bind:value={filters.search} on:input={updateFilters} />
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<img
		src="/filter-solid.svg"
		alt="filter"
		class="filter"
		on:click={() => (filtersVisible = !filtersVisible)}
	/>
</div>
{#if filtersVisible}
	<div style="margin-bottom: 12px">
		<EditTags />
	</div>
{/if}
