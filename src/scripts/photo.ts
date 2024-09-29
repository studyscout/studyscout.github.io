import { getDownloadURL, getStorage, list, ref } from 'firebase/storage';
import { app } from './firestore';

const storage = getStorage(app);

export async function getImages(id: string): Promise<string[]> {
	const reference = ref(storage, id);
	const l = await list(reference);
	console.log(l);
	let result: string[] = [];

	for (const item of l.items) {
		const r = ref(storage, item.fullPath);
		const url = await getDownloadURL(r);
		result.push(url);
	}

	return result;
}
