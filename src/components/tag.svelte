<script lang="ts">
	export let tagName: string;
	import '../styles/location.sass';

	import { editTagsStore } from '../hooks/context';

	// doesn't work -- change asap
	function handleClick() {
		if ($editTagsStore[tagName]) {
			delete $editTagsStore[tagName];
		} else {
			$editTagsStore[tagName] = true;
		}

		$editTagsStore = $editTagsStore;
	}
</script>

<button
	type="button"
	class="tag {Object.keys($editTagsStore).includes(tagName) ? 'selected' : ''}"
	on:click={handleClick}
>
	{tagName}
</button>
