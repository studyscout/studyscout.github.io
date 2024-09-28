export type Coordinates = [number, number];

export interface Location {
	name: string;
	location: { lat: number; long: number };
	tags: Record<string, boolean>;
	stars: number;
}
