import { onMount } from 'svelte';
import type { Coordinates } from '../interfaces/interfaces';
import getCoordinates from './location';

export default function useLocation(callback: (geolocation: Coordinates) => void) {
	onMount(() => {
		getCoordinates(callback);
	});
}
