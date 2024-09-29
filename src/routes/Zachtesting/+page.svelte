<script lang="ts">
	//import '../../styles/tags.sass';
  import '../../styles/location.sass';
	import '../../styles/global.sass';
	import { allTags, accesbilities } from '../../scripts/taglist.ts';
  let count = 0;
  function add(): void{
    count++;
    console.log(count);
}
</script>

<div class="container" on:click={add()}>
  <p style="flex-shrink: 1">cancel</p> 
</div>
<div class="container" on:click={add()}>
  <p>Done</p> 
</div>

<p>&nbsp</p>

<div class="tile-container">
  
  <h1 style="flex-wrap: nowrap">
  <p>Feature&#129504 </p> 
</h1>
  
  <ul class="tags">
    {#each allTags as tag}
      <div class="unfilled_tag" on:click={add()}>
        {tag}
      </div>
    {/each}
    </ul>
</div>

<p>&nbsp</p>

<div class="tile-container">

  <h1>
  <p>Accesbilities&#129469</p> 
  </h1>
  <ul class="tags">
      {#each accesbilities as tag}
        <div class="unfilled_tag" on:click={add()}>
          {tag}
        </div>
      {/each}
    </ul>

</div>


<style>

  
  
</style>



