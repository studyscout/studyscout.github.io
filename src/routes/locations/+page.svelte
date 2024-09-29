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

	import useLocation from '../../hooks/useLocation';
	import type { Coordinates } from '../../interfaces/interfaces';
	import { onMount } from 'svelte';

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
	});
</script>

<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<!-- <style>
	h1 {
		background-color: yellow;	
	}
/* 
	#rhs {
		flex-direction: row;
		flex: 1;
	} */
	/* .rightHandSide {
    	display: flex;
    	flex-direction: column;
		flex: 1;
	} */
	
	@media only screen and (max-width: 600px){


		h1{
			background-color: blue;
		}

		/* .rightHandSide {
			display: flex;
			flex-direction: row;
			flex: 2;
		} */
	}
	
</style> -->

<div style="height: 100dvh; overflow: scroll">
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
					<button id="buttonEdit"> Edit</button>
				</div>

				<div id="box">
					<div>
						<h1>
							Features
							<hr />
						</h1>
					</div>
					<div class="tagsList">
						{#each Object.entries(place.tags) as [tag, beans]}
							<p class="tag">
								{getTag(tag)}
							</p>
						{/each}
					</div>

					<div>
						<h1>
							Accessibility
							<hr />
						</h1>
					</div>
					<div class="tagsList">
						{#each Object.entries(accessability) as [tag, beans]}
							<p class="tag">
								{getTag(tag)}
							</p>
						{/each}
					</div>
				</div>
			</div>
		</main>
	{/await}
</div>
