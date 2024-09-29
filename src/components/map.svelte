<script lang="ts">
	import useLocation from '../hooks/useLocation';
	import type { Coordinates } from '../interfaces/interfaces';

	useLocation(setLocation);

	function setLocation(coordinates: Coordinates) {
		coordinates = coordinates;
	}

	let coordinates: Coordinates | undefined;
</script>
