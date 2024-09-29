<script lang="ts">
	import type { Location } from '../../../interfaces/interfaces';
	import '../../../styles/global.sass';
	import '../../../styles/create.sass';
	import EditTags from '../../../components/editTags.svelte';
	import { createLocation } from '../../../scripts/firestore';
	import { onMount } from 'svelte';
	import type { PageLoad } from './$types';

	export const load: PageLoad = async ({ url }) => {
		const a = url.searchParams;
		const lat = a.get('lat');
		const lng = a.get('lng');

		if (lat == null || lng == null) {
			throw new Error('Lat or Lng is Null');
		}

		inputs.location.lat = parseInt(lat);
		inputs.location.long = parseInt(lng);
	};

	let inputs: Location = {
		id: '',
		name: '',
		location: { lat: 0, long: 0 },
		tags: {},
		stars: 2.5
	};

	$: inputs;

	function submitForm() {
		createLocation(inputs);
	}
</script>

<div class="cntr">
	<h1>Name</h1>
	<input bind:value={inputs.name} placeholder="Name" />
	<br />
	<br />

	<h1>Rating: {inputs.stars} / 5</h1>
	<input bind:value={inputs.stars} type="range" min="0" max="5" step=".5" />
	<br />

	<h1>Tags</h1>
	<EditTags />
	<br />

	<h1>Location</h1>
	<p>Latitude: {inputs.location.lat}, Longitude: {inputs.location.long}</p>
	<br />

	<button class="submit" on:click={submitForm}>Create</button>
</div>
