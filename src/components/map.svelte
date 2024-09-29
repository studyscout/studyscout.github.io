<script lang="ts">
	import useLocation from '../hooks/useLocation';
	import type { Coordinates, Location } from '../interfaces/interfaces';
	import { locationsRead } from '../hooks/context';
	import { coordinatesToMapPosition, locationToMapPosition } from '../scripts/helper';
	import { onMount } from 'svelte';
	import loadMap from '../hooks/map';
	import '../styles/home.sass';
	import { formatTagList } from '../scripts/taglist';

	export let selecting = true;
	let selectingMarker: { map: null };

	useLocation(initMap);

	onMount(() => {
		loadMap();
	});

	let map: { addListener: (arg0: string, arg1: (e: any) => void) => void };
	async function initMap(coordinates: Coordinates): Promise<void> {
		const center = coordinatesToMapPosition(coordinates);

		const { Map } = (await google.maps.importLibrary('maps')) as google.maps.MapsLibrary;
		const { AdvancedMarkerElement } = (await google.maps.importLibrary(
			'marker'
		)) as google.maps.MarkerLibrary;

		const infoWindow = new google.maps.InfoWindow({ maxWidth: '300' });
		map = new Map(document.getElementById('map') as HTMLElement, {
			zoom: 15,
			center,
			mapId: 'map_id'
		});

		if (selecting) {
			map.addListener('click', (e: any) => {
				placeMarker(map, e.latLng);
			});
		}

		function placeMarker(map: any, location: any) {
			if (selectingMarker) {
				selectingMarker.map = null;
			}

			selectingMarker = new google.maps.marker.AdvancedMarkerElement({
				position: location,
				map
			});

			map.setCenter(location);
			map.setZoom(18);

			infoWindow.close();
			infoWindow.setContent(createContent(location));
			infoWindow.open(selectingMarker.map, selectingMarker);

			infoWindow.addListener('closeclick', () => {
				selectingMarker.map = null;
			});
		}

		const { locations } = await $locationsRead;

		for (const location of locations) {
			const position = locationToMapPosition(location);

			const marker = new google.maps.marker.AdvancedMarkerElement({
				map,
				position,
				title: location.name
			});

			marker.addListener('click', () => {
				infoWindow.close();
				infoWindow.setContent(getContent(location));
				infoWindow.open(marker.map, marker);
			});
		}
	}

	function getContent(location: Location) {
		return `
		<div style="color: black">
			<a style="font-size: 30px" href='/locations?id=${location.id}'>${location.name}</a>
			<p style="color: black">${formatTagList(location.tags)}</p>
			<p style="color: black">${location.stars}/5 starts</p>
		</div>
		`;
	}

	function createContent(location: any) {
		console.log(JSON.stringify(location));
		return `
			<h2 style="color: black">Is this location ok?</h2>
			<a href="/locations/create?lat=${location.lat()}&lng=${location.lng()}">Create a new study location</a>
		`;
	}
</script>

<div style="flex-grow: 1">
	<div id="map"></div>
</div>

<!-- <style>
	div {
		color: black;
	}
</style> -->
