<script lang="ts">
	export let value: number;

	const i: any = 0;

	function func(param: number) {
		return param + 1;
	}

	for (let j = 0; j < 10; j++) {}

	const arr = [1, 2, 3];

	for (const a in arr) {
		// a
	}

	const obj = { apple: 'bees', loop: 'deloop' };
</script>

{#each Object.entries(obj) as [a, b]}
	<p>{a} = {b}</p>
{/each}
