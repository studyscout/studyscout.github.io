import { getLocation } from '../../scripts/firestore';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
	const a = url.searchParams;
	let id = a.get('id');

	if (id == null) {
		throw new Error('ID not defined');
	}

	const location = getLocation(id);
	return location;
};
