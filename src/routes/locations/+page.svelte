<script lang="ts">
	import type { Location } from '../../interfaces/interfaces';
	import '../../styles/vars.sass';
	import '../../styles/location.sass';
	import '../../styles/locationPage.sass';
	import { allTags, accessability } from '../../scripts/taglist';
	import { getImages } from '../../scripts/photo';
	import '../../styles/global.sass';

	export let data: Location;
	let images: string[] = [];
	let tagsVisible = false;

	import useLocation from '../../hooks/useLocation';
	import type { Coordinates } from '../../interfaces/interfaces';
	import { onMount } from 'svelte';
	import EditTags from '../../components/editTags.svelte';
	import { editTagsStore } from '../../hooks/context';
	import { createLocation } from '../../scripts/firestore';
	import calcCrow from '../../scripts/distance';
	import places from '../../scripts/storage';

	// useLocation(setLocation);

	// function setLocation(coordinates: Coordinates) {
	// 	console.log(coordinates);
	// 	coordinates = coordinates;
	// }

	// let coordinates: Coordinates | undefined;
	// console.log(coordinates);

	function getTag(tag: string) {
		const temp = tag.split('_');

		let finalString = '';
		for (let str of temp) {
			finalString += str.charAt(0).toUpperCase() + str.slice(1) + ' ';
		}

		return finalString.slice(0, finalString.length - 1);
	}

	onMount(async () => {
		images = await getImages(data.id);
		editTagsStore.set(data.tags);
	});

	function changeVisibility() {
		if (tagsVisible) {
			createLocation(data);
		}

		tagsVisible = !tagsVisible;
	}

	function returnGoogleMapQuery(lat: number, long: number) {
		if (lat == undefined || long == undefined) return undefined;
		return (
			'https://www.google.com/maps/search/?api=1&query=' +
			data.location.lat +
			'%2C' +
			data.location.long
		);
	}

	function isFeatures(tags: Record<string, boolean>) {
		return Object.keys(tags).filter((tag) => Object.keys(allTags).includes(tag));
	}

	function isAccessible(tags: Record<string, boolean>) {
		return Object.keys(tags).filter((tag) => Object.keys(accessability).includes(tag));
	}
</script>

<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<div style="height: 100dvh; overflow-y: scroll; overflow-x: hidden">
	{#await data}
		<p>Loading...</p>
	{:then place}
		<div class="horizontal" id="firstImages">
			{#if images}
				{#await images}
					<p>Loading photos...</p>
				{:then imgs}
					{#each imgs as image}
						<img src={image} alt="hi" class="imageclass" />
					{/each}
				{/await}
			{/if}
		</div>

		<main id="locationPageFormat">
			<h1>{place.name}</h1>
			<h3>{place.stars} / 5 Stars</h3>
			<hr />

			<!-- <div>
				<p>{place.location.lat}</p>
				<p>{place.location.long}</p>
				</div> -->

			<!-- {#if coordinates}
				<p id="locationPageFormat">
					{calcCrow(place.location.lat, place.location.long, coordinates[0], coordinates[1])} miles away
				</p>
			{:else}
				<p>Distance not available</p>
			{/if} -->

			<div style="display: flex; justify-content: space-between">
				<a href={returnGoogleMapQuery(place.location.lat, place.location.long)} id="mapLink">
					Google Maps
				</a>

				<button id="buttonEdit" on:click={changeVisibility}>
					{tagsVisible ? 'Done' : 'Edit'}
				</button>
			</div>

			<div id="listHeader">
				{#if tagsVisible}
					<EditTags />
				{:else}
					<div id="box">
						{#if isFeatures(place.tags)}
							<div>
								<h1>Features</h1>
								<br />
							</div>
							<div class="tagsList">
								{#each isFeatures(place.tags) as tag}
									<p class="tag">
										{getTag(tag)}
									</p>
								{/each}
							</div>
						{/if}

						{#if isAccessible(place.tags).length > 0}
							<div>
								<h1>Accessibility</h1>
								<br />
							</div>
							<div class="tagsList">
								{#each isAccessible(place.tags) as tag}
									<p class="tag">
										{getTag(tag)}
									</p>
								{/each}

								<!-- {#each Object.entries(place.tags) as [tag, beans]}
								{#if Object.keys(accessability).includes(tag)}
									<p class="tag">
										{getTag(tag)}
									</p>
								{/if}
							{/each} -->
							</div>
						{/if}
					</div>
				{/if}
			</div>
		</main>
	{/await}
</div>
