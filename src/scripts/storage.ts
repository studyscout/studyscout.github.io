import type { Location } from '../interfaces/interfaces';

const places: Location[] = [
	{
		id: '37.3861122.0839',
		name: 'Mountain View',
		location: {
			lat: 37.3861,
			long: -122.0839
		},
		tags: {
			city: true,
			tech_hub: true,
			tourist_spot: false
		},
		stars: 4.5
	},
	{
		id: '35.6586139.7454',
		name: 'Tokyo Tower',
		location: {
			lat: 35.6586,
			long: 139.7454
		},
		tags: {
			city: false,
			tech_hub: false,
			tourist_spot: true
		},
		stars: 4.8
	},
	{
		id: '36.1069-112.1129',
		name: 'Grand Canyon',
		location: {
			lat: 36.1069,
			long: -112.1129
		},
		tags: {
			city: false,
			tech_hub: false,
			tourist_spot: true
		},
		stars: 4.9
	},
	{
		id: '37.7749-122.4194',
		name: 'San Francisco',
		location: {
			lat: 37.7749,
			long: -122.4194
		},
		tags: {
			city: true,
			tech_hub: true,
			tourist_spot: true
		},
		stars: 4.7
	},
	{
		id: '48.85662.3522',
		name: 'Paris',
		location: {
			lat: 48.8566,
			long: 2.3522
		},
		tags: {
			city: true,
			tech_hub: true,
			tourist_spot: true
		},
		stars: 5.0
	}
];

export default places;
