import { getLocations } from '../scripts/firestore';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const locations = await getLocations();
	return { locations };
};
