<script lang="ts">
    export let tagName: string;
    import "../styles/tags.sass"

    import { editTagsStore } from "../hooks/context"

    function handleClick() {
        console.log("Here")
        const index = $editTagsStore.indexOf(tagName);

        if(index > 0) {
            $editTagsStore.splice(index, 1);
        } else {
            $editTagsStore.push(tagName);
        }

        $editTagsStore = $editTagsStore
    }
</script>

<div class="{$editTagsStore.includes(tagName) ? "filled_tag" : "unfilled_tag"}" on:click={handleClick}>
    {tagName}
</div>