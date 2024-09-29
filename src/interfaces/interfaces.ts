export type Coordinates = [number, number];

export interface Location {
	id: string;
	name: string;
	location: { lat: number; long: number };
	tags: Record<string, boolean>;
	stars: number;
}

export type LocationPromise = Promise<{ locations: Location[] }>;

export interface ListFilters {
	search: string;
	filters: string[];
}
