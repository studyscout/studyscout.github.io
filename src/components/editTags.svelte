<script lang="ts">
	import '../styles/location.sass';
	import '../styles/global.sass';
	import { allTags, accessability } from '../scripts/taglist';
	import { editTagsStore } from '../hooks/context';
	import Tag from './tag.svelte';

	// let preset: Record<string, boolean> = {};

	// editTagsStore.set(preset);
</script>

<div class="tile-container">
	<h1 style="flex-wrap: nowrap">
		<p>Features &#129504</p>
	</h1>

	<div class="tags">
		{#each Object.keys(allTags) as tag}
			<Tag tagName={tag} />
		{/each}
	</div>
</div>

<br />

<div class="tile-container">
	<h1>
		<p>Accessibility &#129469</p>
	</h1>
	<div class="tags">
		{#each Object.keys(accessability) as tag}
			<Tag tagName={tag} />
		{/each}
	</div>
</div>
