<script lang="ts">
	//import '../../styles/tags.sass';
	import '../../styles/location.sass';
	import '../../styles/global.sass';
	import { allTags, accesbilities } from '../../scripts/taglist';
	import { goto } from '$app/navigation';
	import { reload } from 'firebase/auth';
	import { onMount } from 'svelte';
	import Tag from '../../components/tag.svelte';
	import { editTagsStore } from '../../hooks/context';
	let clicked = false;

	function handleclick() {
		goto('/Zachtesting/testing_routing');
	}
	function isclicked(index) {
		clicked = !clicked;
	}

	editTagsStore.set(["Quiet"])

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

	<div class="tags">
		{#each allTags as tag}
			<Tag tagName={tag} />
		{/each}
	</div>
</div>

<br />

<div class="tile-container">
	<h1>
		<p>Accesbilities&#129469</p>
	</h1>
	<ul class="tags">
		{#each accesbilities as tag}
			<Tag tagName={tag}/>
		{/each}
	</ul>
</div>
