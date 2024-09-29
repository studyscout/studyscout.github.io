<script lang="ts" , type="module">
	import '../styles/global.sass';
	import '../styles/home.sass';
	import type { LocationPromise } from '../interfaces/interfaces';
	import { locationsStore } from '../hooks/context';
	import LocationModal from '../components/locationModal.svelte';
	import Auth from '../components/auth.svelte';
	import Map from '../components/map.svelte';

	export let data: LocationPromise;
	locationsStore.set(data);
</script>

<Map />
<LocationModal />
<Auth />
