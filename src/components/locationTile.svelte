<script lang="ts">
	import { goto, replaceState } from '$app/navigation';
	import { onMount } from 'svelte';
	import type { Location } from '../interfaces/interfaces';
	import '../styles/home.sass';
	import '../styles/location.sass';
	import ListTag from './listTag.svelte';
	import { getFirstImage } from '../scripts/photo';

	export let location: Location;
	let image: string;

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

	onMount(async () => {
		image = await getFirstImage(location.id);
	});
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="tile" on:click={navigate}>
	{#if image}
		<img src={image} height="100" width="100" alt="img" />
	{:else}
		<div
			style="background-color: gray; height: 100px !important; width: 100px !important; min-width: 100px !important; border-radius: 12px"
		/>
	{/if}
	<div class="tile-content">
		<h3>{location.name}</h3>
		<div>
			<div class="tags" style="margin-left: -12px; margin-right: -12px">
				{#each Object.entries(location.tags) as [tag, beans]}
					<ListTag tagName={getTag(tag)} />
				{/each}
			</div>
		</div>
		<p>{location.stars} / 5</p>
	</div>
</div>
