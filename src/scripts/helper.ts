import type { Coordinates, Location } from '../interfaces/interfaces';

export function coordinatesToMapPosition(coordinates: Coordinates) {
	return { lat: coordinates[0], lng: coordinates[1] };
}

export function locationToMapPosition(location: Location) {
	return { lat: location.location.lat, lng: location.location.long };
}
