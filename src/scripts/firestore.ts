import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, getDoc, setDoc } from 'firebase/firestore/lite';
import type { Location } from '../interfaces/interfaces';

const firebaseConfig = {
	apiKey: 'AIzaSyDKiVOYYiN9JCEUQCGwFOhRd-lVk9wGn8M',
	authDomain: 'studyscout-b3a49.firebaseapp.com',
	projectId: 'studyscout-b3a49',
	storageBucket: 'studyscout-b3a49.appspot.com',
	messagingSenderId: '775035862382',
	appId: '1:775035862382:web:5b403e62a55808dd26157f',
	measurementId: 'G-H00WTWRLNC'
};

const app = initializeApp(firebaseConfig);
const _db = getFirestore(app);

export async function getLocations(): Promise<Location[]> {
	const locCol = collection(_db, 'locations');
	const locSnap = await getDocs(locCol);
	const locList = locSnap.docs.map((doc) => doc.data());
	return locList as Location[];
}

export async function getLocation(id: string): Promise<Location> {
	const locRef = doc(_db, 'locations', id);
	const locSnap = await getDoc(locRef);
	return locSnap.data() as Location;
}

export async function createLocation(docData: Location): Promise<void> {
	const id = getId(docData);
	let data: Location = docData;
	data.id = id;

	await setDoc(doc(_db, 'locations', id), docData);
}

function getId(docData: Location) {
	return docData.location.lat.toString() + docData.location.long.toString();
}
