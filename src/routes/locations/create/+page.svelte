<script lang="ts">
	import type { Location } from '../../../interfaces/interfaces';
	import '../../../styles/global.sass';
	import '../../../styles/create.sass';
	import EditTags from '../../../components/editTags.svelte';
	import { createLocation } from '../../../scripts/firestore';
	import { goto } from '$app/navigation';
	import { editTagsStore } from '../../../hooks/context';

	export let data: { lat: string; lng: string };
	let inputs: Location = {
		id: '',
		name: '',
		location: { lat: 0, long: 0 },
		tags: {},
		stars: 2.5
	};

	$: inputs;

	function submitForm() {
		let loc: Location = inputs;
		loc.location = { lat: parseFloat(data.lat), long: parseFloat(data.lng) };
		loc.tags = $editTagsStore;

		createLocation(loc);
		goto('/');
	}
</script>

<div style="overflow-y: scroll; height: 100dvh; width: 100%">
	<form class="cntr">
		<h1>Name</h1>
		<input bind:value={inputs.name} placeholder="Name" required />
		<br />
		<br />

		<h1>Rating: {inputs.stars} / 5</h1>
		<input bind:value={inputs.stars} type="range" min="0" max="5" step=".5" />
		<br />

		<h1>Tags</h1>
		<EditTags />
		<br />

		<h1>Location</h1>
		<p>Latitude: {data.lat}</p>
		<p>Longitude: {data.lng}</p>
		<br />

		<button type="submit" class="submit" on:click|preventDefault={submitForm}>Create</button>
	</form>
</div>
