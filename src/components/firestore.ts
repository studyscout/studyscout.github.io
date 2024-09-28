import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, Firestore } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

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

// Get a list of cities from your database
export async function getCities(db: Firestore = _db): Promise<any[]> {
	const citiesCol = collection(db, 'locations');
	const citySnapshot = await getDocs(citiesCol);
	const cityList = citySnapshot.docs.map((doc) => doc.data());
	return cityList;
}
