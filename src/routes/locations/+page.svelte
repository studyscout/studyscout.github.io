<script lang="ts">
	import type { Location } from '../../interfaces/interfaces';
	import "../../styles/locationPage.sass"
	import "../../styles/vars.sass"
	import "../../styles/tags.sass"
	export let data: Location;


	import useLocation from '../../hooks/useLocation';
	import type { Coordinates } from '../../interfaces/interfaces';

	useLocation(setLocation);

	function setLocation(coordinates: Coordinates) {
		coordinates = coordinates;
	}

	let coordinates: Coordinates | undefined;

	function getTag(tag: string) {
		const temp = tag.split("_");
		
		let finalString = "";
		for (let str of temp) {
  			finalString += str.charAt(0).toUpperCase() + str.slice(1) + " ";	
		}

		return finalString.slice(0, finalString.length-1);
		
	}

	function getDist(currCoord: number){
		// eventually do something to get distance from given coord
		return 0;
	}

	function getGoogLink(currCoord: number){
		//eventually get a link to the coordinates through google
		return "www.google.com";
	}

</script>

<!-- media stuff (stretch)
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
	body {
		background-color: yellow;
	}
	@media only screen and (max-width: 600px){
		body{
			background-color: blue;
		}
	}
</style> -->

{#await data}
	<p>Loading...</p>
{:then place}

	<!-- <header>
	<div class = "horizontal">
		<img src = "src/routes/Harry/images.jpeg" alt = "corndog">
		<div class = "rightHandSide">
			<img src = "src/routes/Harry/images.jpeg" alt = "corndog">
			<img src = "src/routes/Harry/images.jpeg" alt = "corndog">
		</div>
	</div>
	</header> -->

	<main>
	<h1>
		<div class = "col">
			<div class = "horizontal">
				<section>
					{place.name}
				</section>
				<section>
					{place.stars} / 5
				</section>
			</div>
		</div>

		<hr>
	</h1>
	<!-- <div>
		<p>{place.location.lat}</p>
		<p>{place.location.long}</p>
	</div> -->
	<div>
		<header>
			{getDist(0)} miles away
		</header>
	</div>

	<div>
		<a href= "www.google.com">
			Here is where the map link would be
		</a>
	</div>

	
	<div class = "horizontal" id = "bottom">
		<p>	
			Tags
		</p>
		<button>
		    Edit
		</button>
	</div>

	<div class = "tagsList">
		
		{#each Object.entries(place.tags) as [tag, beans]}
			<p class="unfilled_tag">
				{getTag(tag)}
			</p>
		{/each}

	</div>
	</main>
{/await}
