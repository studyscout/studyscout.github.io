import { getLocations } from '../scripts/firestore';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const locations = await getLocations();
	console.log(locations);
	return { locations };
};
