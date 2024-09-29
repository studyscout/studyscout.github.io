<script lang="ts">
	import useLocation from '../hooks/useLocation';
	import type { Coordinates } from '../interfaces/interfaces';
	import { locationsRead } from '../hooks/context';
	import { coordinatesToMapPosition, locationToMapPosition } from '../scripts/helper';
	import { onMount } from 'svelte';
	import loadMap from '../hooks/map';

	useLocation(initMap);

	onMount(() => {
		loadMap();
	});

	let map;
	async function initMap(coordinates: Coordinates): Promise<void> {
		const center = coordinatesToMapPosition(coordinates);

		const { Map } = (await google.maps.importLibrary('maps')) as google.maps.MapsLibrary;
		const { AdvancedMarkerElement } = (await google.maps.importLibrary(
			'marker'
		)) as google.maps.MarkerLibrary;

		const infoWindow = new google.maps.InfoWindow();
		map = new Map(document.getElementById('map') as HTMLElement, {
			zoom: 15,
			center,
			mapId: 'map_id'
		});

		const { locations } = await $locationsRead;

		for (const location of locations) {
			const position = locationToMapPosition(location);

			const marker = new google.maps.Marker({
				map,
				position,
				title: location.name,
				label: location.name,
				optimize: false
			});

			marker.addListener('click', () => {
				infoWindow.close();
				infoWindow.setContent(
					'<h1>' + marker.getTitle() + '</h1>' +
					'<p>' + location.stars + '/5</p><ul class="tags">'
				);
				infoWindow.open(marker.getMap(), marker);
			});
		}
	}
</script>

<div id="map"></div>

<style>
	#map {
		height: 400px; /* The height is 400 pixels */
		width: 100%; /* The width is the width of the web page */
	}
</style>
