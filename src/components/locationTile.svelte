<script lang="ts">
	import { goto, replaceState } from '$app/navigation';
	import type { Location } from '../interfaces/interfaces';
	import '../styles/home.sass';
	import '../styles/location.sass';
	import ListTag from './listTag.svelte';

	export let location: Location;

	function navigate() {
		goto(`/locations?id=${location.id}`);
	}

	function getTag(tag: string) {
		const temp = tag.split('_');

		let finalString = '';
		for (let str of temp) {
			finalString += str.charAt(0).toUpperCase() + str.slice(1) + ' ';
		}
		return finalString.slice(0, finalString.length - 1);
	}

	let headThree = Object.entries(location.tags).slice(0, 3);

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="tile" on:click={navigate}>
	<img src="https://placecats.com/neo/100/100" height="100" width="100" alt="img" />
	<div class="tile-content">
		<h3>{location.name}</h3>
		<div>
			<div class="tags" style="margin-left: -12px; margin-right: -12px">
				{#each headThree as [tag, beans]}
					<ListTag tagName={getTag(tag)} />
				{/each}
			</div>
		</div>
		<p>{location.stars} / 5</p>
	</div>
</div>
