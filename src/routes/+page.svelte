<script lang="ts">
  import places from "../scripts/storage";
	let count = 0;
	// Function to extract tag strings where value is true
	const getTagList = (tags: Record<string, boolean>) => {
		return Object.keys(tags).join(', ');
	};
	import Counter from '../components/counter.svelte';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#each places as place, index}
  <a href="/location_data?id={index}"> go to {place.Name} <br></a>
{/each}
<Counter />
