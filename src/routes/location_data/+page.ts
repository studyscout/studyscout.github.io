import places from '../../scripts/storage';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url}) => {
	/* const res = await fetch('https://jsonplaceholder.org/posts')
    const item = await res.json();

    return { posts: item}; */
	const a = url.searchParams;	
	console.log(a.get("id"));

	let index: string | null | number = a.get("id");

	if(index != null){
		index = parseInt(index);
		return places[index];
	}

	return undefined;
};
