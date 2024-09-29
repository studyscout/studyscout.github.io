<script lang="ts">
	import { goto, replaceState } from '$app/navigation';
	import type { Location } from '../interfaces/interfaces';
	import '../styles/home.sass';
	import '../styles/tags.sass';

	export let location: Location;

	function navigate() {
		goto(`/locations?id=${location.id}`);
	}

	function getTag(tag: string) {
		const temp = tag.split("_");
		
		let finalString = "";
		for (let str of temp) {
  			finalString += str.charAt(0).toUpperCase() + str.slice(1) + " ";	
		}

		return finalString.slice(0, finalString.length-1);
		
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="tile" on:click={navigate}>
	<img src="https://placecats.com/neo/100/100" height="100" width="100" alt="img" />
	<div class="tile-content">
		<h3>{location.name}</h3>
	    <div>
			<ul class="tags">

				{#each Object.entries(location.tags) as [tag, beans]}
					
					<li class="unfilled_tag">
						{getTag(tag)}
					</li>
				{/each}
			</ul>
		</div>
		<p>{location.stars} / 5</p>
	</div>
</div>
