export const allTags: Record<string, boolean> = {
	'Quiet': true,
	'Hard to Find a Spot': true,
	'Group Study Areas': true,
	'Busy Times': true,
	'Always a Seat Open': true,
	'Frequent Outlet Access': true,
	'Parking Nearby': true,
	'Lots of Space': true,
	'Natural Lighting': true,
	'24/7 Access': true,
	'Outdoor Study Areas': true,
	'Comfortable Seating': true,
	'Study Atmosphere': true,
	'Libraries': true,
	'Bookstores': true,
	'Cafe': true,

};

export const accesbilities: string[] = ['Wheel Chair Access', 'Deaf Friendly', 'Blind Friendly'];

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
