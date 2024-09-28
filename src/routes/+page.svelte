<script lang="ts">
    import Counter from '../components/counter.svelte';
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
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<Counter />
<input bind:value={name} placeholder="enter your name" />
<p>Hello {name || 'stranger'}!</p>
<p>Location : {lat_long || 'unknown'}</p>

