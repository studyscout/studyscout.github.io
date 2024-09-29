export type Coordinates = [number, number];

export interface Location {
	id: string;
	name: string;
	location: { lat: number; long: number };
	tags: Record<string, boolean>;
	stars: number;
}
