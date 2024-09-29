import type { PageLoad } from '../$types';

export const load: PageLoad = async ({ url }) => {
	const a = url.searchParams;
	const lat = a.get('lat');
	const lng = a.get('lng');

	if (lat == null || lng == null) {
		throw new Error('Lat or Lng is Null');
	}

	return { lat, lng };
};
