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

	useLocation(setLocation);

	function setLocation(coordinates: Coordinates) {
		coordinates = coordinates;
	}

	let coordinates: Coordinates | undefined;

	function getTag(tag: string) {
		const temp = tag.split('_');

		let finalString = '';
		for (let str of temp) {
			finalString += str.charAt(0).toUpperCase() + str.slice(1) + ' ';
		}

		return finalString.slice(0, finalString.length - 1);
	}

	function getDist(currCoord: number) {
		// eventually do something to get distance from given coord
		return 0;
	}

	function getGoogLink(currCoord: number) {
		//eventually get a link to the coordinates through google
		return 'www.google.com';
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
						<img src={image} alt="hi" class='imageclass'/>
					{/each}
				{/await}
			{/if}
		</div>

		<main id="locationPageFormat">
			<h1>
				<div class="col">
					<div class="horizontal">
						<section>
							{place.name}
						</section>
						<section>
							{place.stars} / 5 Stars
						</section>
					</div>
				</div>

				<hr />
			</h1>
			<!-- <div>
		<p>{place.location.lat}</p>
		<p>{place.location.long}</p>
	</div> -->
			<div>
				<header id="locationPageFormat">
					{getDist(0)} miles away
				</header>
			</div>

			<div>
				<a href="www.google.com" id="mapLink"> Here is where the map link would be </a>
			</div>

			<div id="listHeader">
				<div class="horizontal" id="bottom">
					<p>Tags</p>
					<button id="buttonEdit" on:click={changeVisibility}>
						{tagsVisible ? 'Done' : 'Edit'}
					</button>
				</div>

				{#if tagsVisible}
					<EditTags />
				{:else}
					<div id="box">
						<div>
							<h1>
								Features
								<hr />
							</h1>
						</div>
						<div class="tagsList">
							{#each Object.entries($editTagsStore) as [tag, beans]}
								{#if Object.keys(allTags).includes(tag)}
									<p class="tag">
										{getTag(tag)}
									</p>
								{/if}
							{/each}
						</div>

						<div>
							<h1>
								Accessibility
								<hr />
							</h1>
						</div>
						<div class="tagsList">
							{#each Object.entries(place.tags) as [tag, beans]}
								{#if Object.keys(accessability).includes(tag)}
									<p class="tag">
										{getTag(tag)}
									</p>
								{/if}
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</main>
	{/await}
</div>
