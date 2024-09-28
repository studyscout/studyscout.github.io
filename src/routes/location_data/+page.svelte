<script lang="ts">
	import type { exampleData } from "../../scripts/storage";

    export let data: exampleData;
</script>

{#await data}
    <p>Loading...</p>
    {:then place}
        
        <p>Name: {place.Name}</p>
        <p>latitude: {place.Latitude}</p>
        <p>longitutde: {place.Longitude}</p>
        <p>tags: {place.Tags}</p>
        <p>stars: {place.Stars}</p>


{/await}