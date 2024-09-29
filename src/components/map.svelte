<script lang="ts">
	import useLocation from '../hooks/useLocation';
	import type { Coordinates, Location } from '../interfaces/interfaces';
	import { locationsRead } from '../hooks/context';
	import { coordinatesToMapPosition, locationToMapPosition } from '../scripts/helper';
	import { onMount } from 'svelte';
	import loadMap from '../hooks/map';
	import '../styles/home.sass';
	import { formatTagList } from '../scripts/taglist';

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

		const infoWindow = new google.maps.InfoWindow({ maxWidth: '300px' });
		map = new Map(document.getElementById('map') as HTMLElement, {
			zoom: 15,
			center,
			mapId: 'map_id'
		});

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
			<a style="color: inherit; font-size: 30px" href="/locations?id=${location.id}">${location.name}</a>
			<p style="color: inherit">${formatTagList(location.tags)}</p>
			<p style="color: inherit">${location.stars}/5 starts</p>
		</div>
		`;
	}
</script>

<div style="flex-grow: 1">
	<div id="map"></div>
</div>
