<script lang="ts">
	//import '../../styles/tags.sass';
	import '../../styles/location.sass';
	import '../../styles/global.sass';
	import { allTags, accesbilities } from '../../scripts/taglist';
	import { goto } from '$app/navigation';
	import { reload } from 'firebase/auth';
	import { onMount } from 'svelte';
	let clicked = false;

	function handleclick() {
		goto('/Zachtesting/testing_routing');
	}
	function isclicked(index) {
		clicked = !clicked;
	}

  

	/*  console.log("Basic: " + allTags);
  $: console.log("Reactive: " + allTags);

  onMount(() => {
    console.log("Tags: " + allTags)
  }) */
</script>

<div class="container" on:click={handleclick}>
	<p>cancel</p>
	<!-- <meta http-equiv="refresh" content="1"> -->
</div>
<div class="container" on:click={handleclick}>
	<p>Done</p>
</div>

<br />

<div class="tile-container">
	<h1 style="flex-wrap: nowrap">
		<p>Feature&#129504</p>
	</h1>

	<ul class="tags">
		{#each allTags as tag}
			<div class="unfilled_tag">
				{tag}
			</div>
		{/each}
	</ul>
</div>

<br />

<div class="tile-container">
	<h1>
		<p>Accesbilities&#129469</p>
	</h1>
	<ul class="tags">
		{#each accesbilities as tag, index}
			<div class="unfilled_tag" on:click={isclicked(index)}>
				{tag}
			</div>
		{/each}
	</ul>
</div>
