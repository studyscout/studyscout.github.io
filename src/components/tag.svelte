<script lang="ts">
	export let tagName: string;
	import '../styles/location.sass';

	import { editTagsStore } from '../hooks/context';

	// doesn't work -- change asap
	function handleClick() {
		const index = $editTagsStore.indexOf(tagName);
		console.log(index);

		if (index > 0) {
			$editTagsStore.splice(index, 1);
		} else {
			$editTagsStore.push(tagName);
		}

		$editTagsStore = $editTagsStore;
	}
</script>

<button class="tag {$editTagsStore.includes(tagName) ? 'selected' : ''}" on:click={handleClick}>
	{tagName}
</button>
