<script lang="ts">
	import '../styles/global.sass';
	import '../styles/home.sass';
	import type { LocationPromise } from '../interfaces/interfaces';
	import { locationsStore } from '../hooks/context';
	import LocationModal from '../components/locationModal.svelte';

	export let data: LocationPromise;
	locationsStore.set(data);
</script>

<LocationModal />
