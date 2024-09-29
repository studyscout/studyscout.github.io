export const allTags: string[] = [
	'Quiet',
	'Hard to Find a Spot',
	'Group Study Areas',
	'Busy Times',
	'Always a Seat Open',
	'Frequent Outlet Access',
	'Parking Nearby',
	'Lots of Space',
	'Natural Lighting'
];

export const accessabiliy: string[] = ['Wheel Chair Access', 'Deaf Friendly', 'Blind Friendly'];

export function formatTagList(tagObj: Record<string, boolean>): string {
	const tags: string[] = Object.keys(tagObj);

	let res = [];
	for (let i = 0; i < tags.length; i++) {
		let words: string[] = tags[i].replace('_', ' ').split(' ');
		let result = [];

		for (const word of words) {
			let w = word.substring(0, 1).toUpperCase();
			let ord = word.substring(1);
			result.push(w + ord);
		}

		res.push(result.join(' '));
	}

	return res.join(', ');
}
