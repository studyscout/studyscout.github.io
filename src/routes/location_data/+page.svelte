<script lang="ts">
	import type { exampleData } from "../../scripts/storage";

    export let data: {places: exampleData[] };
</script>

{#await data}
    <p>Loading...</p>
    {:then {places}}

        
        <!-- {#each places as place}
            <p>{place.Latitude}</p>
            <p>{place.Longitude}</p>
        {/each} -->
{/await}