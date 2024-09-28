export interface Location {
	Name: string;
	Latitude: number;
	Longitude: number;
	Tags: {
		city: boolean;
		tech_hub: boolean;
		tourist_spot: boolean;
	};
	Stars: number;
}

const places: Location[] = [
	{
		Name: 'Mountain View',
		Latitude: 37.3861,
		Longitude: -122.0839,
		Tags: {
			city: true,
			tech_hub: true,
			tourist_spot: false
		},
		Stars: 4.5
	},
	{
		Name: 'Tokyo Tower',
		Latitude: 35.6586,
		Longitude: 139.7454,
		Tags: {
			city: false,
			tech_hub: false,
			tourist_spot: true
		},
		Stars: 4.8
	},
	{
		Name: 'Grand Canyon',
		Latitude: 36.1069,
		Longitude: -112.1129,
		Tags: {
			city: false,
			tech_hub: false,
			tourist_spot: true
		},
		Stars: 4.9
	},
	{
		Name: 'San Francisco',
		Latitude: 37.7749,
		Longitude: -122.4194,
		Tags: {
			city: true,
			tech_hub: true,
			tourist_spot: true
		},
		Stars: 4.7
	},
	{
		Name: 'Paris',
		Latitude: 48.8566,
		Longitude: 2.3522,
		Tags: {
			city: true,
			tech_hub: true,
			tourist_spot: true
		},
		Stars: 5.0
	}
];

export default places;
