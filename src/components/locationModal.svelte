<script lang="ts">
	import { onMount } from 'svelte';
	import LocationList from './locationList.svelte';
	import ModalHeader from './modalHeader.svelte';

	let offset: number = 0;
	let top: number;
	let grip: HTMLDivElement;
	let dragging = false;
	let startY: number = 0;
	let windowHeight: number = 0;

	function dragStart(event: MouseEvent | TouchEvent) {
		dragging = true;

		const clientY = event instanceof TouchEvent ? event.touches[0].clientY : event.clientY;
		const rect = grip!.getBoundingClientRect();
		startY = clientY - rect.top;
	}

	function dragMove(event: MouseEvent | TouchEvent) {
		if (dragging) {
			const clientY = event instanceof TouchEvent ? event.touches[0].clientY : event.clientY;
			offset = Math.min(clientY - top - startY, 0);
			console.log(bounds);
		}
	}

	function dragEnd() {
		dragging = false;
	}

	function updatePosition() {
		if (grip) {
			const rect = grip.getBoundingClientRect();
			top = rect.top;
		}
	}

	onMount(() => {
		updatePosition();

		windowHeight = window.innerHeight;
		window.addEventListener('mousemove', dragMove);
		window.addEventListener('mouseup', dragEnd);

		window.addEventListener('touchmove', dragMove);
		window.addEventListener('touchend', dragEnd);
	});

	$: bounds = top ? `top: ${Math.max(top + offset, 0)}px` : '';
</script>

<div class="location-modal" style={bounds}>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="grip"
		on:mousedown|preventDefault={dragStart}
		on:touchstart|preventDefault={dragStart}
		bind:this={grip}
	>
		<div class="handle"></div>
	</div>
	<ModalHeader />
	<LocationList />
</div>
