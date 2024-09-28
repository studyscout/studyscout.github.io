import type { Coordinates } from '../interfaces/interfaces';

export default function getCoordinates(callback: (geolocation: Coordinates) => void): void {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((pos: GeolocationPosition) =>
			getCurrentPosition(pos, callback)
		);
	} else {
		console.warn('Geolocation Not Enabled');
	}
}

function getCurrentPosition(
	position: GeolocationPosition,
	callback: (geolocation: Coordinates) => void
): void {
	callback([position.coords.latitude, position.coords.longitude]);
}
