<script lang="ts">
	let name = '';
    let lat_long = '';

    function retrieveLocation() {
        if (navigator.geolocation) navigator.geolocation.getCurrentPosition(showLocation);
        else lat_long = 'Not available';
    }

    function showLocation(location : any) {
        lat_long = 'Latitude: ' + location.coords.latitude + '\nLongitude: ' + location.coords.longitude;
    }

    retrieveLocation();
  import places from "../scripts/storage";
	let count = 0;
	// Function to extract tag strings where value is true
	const getTagList = (tags: Record<string, boolean>) => {
		return Object.keys(tags).join(', ');
	};
	import Counter from '../components/counter.svelte';
	import Tags from '../components/tags.svelte';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Tags/>
{#each places as place, index}
  <a href="/location_data?id={index}"> go to {place.Name} <br></a>
{/each}
<Counter />
<input bind:value={name} placeholder="enter your name" />
<p>Hello {name || 'stranger'}!</p>
<p>Location : {lat_long || 'unknown'}</p>
