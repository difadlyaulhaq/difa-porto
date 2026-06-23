<script lang="ts">
  import type { Item } from "./items";
  import NavigationItem from "./NavigationItem.svelte";

  let classes = "";

  export { classes as class };

  export let active: Item;

  export let items: Item[];
</script>

<nav class={classes}>
  <ul
    class="flex rounded-full bg-[#070714]/80 px-4 py-1 text-sm font-medium text-gray-200 shadow-xl shadow-black/40 border border-white/5 backdrop-blur-xl ring-1 ring-violet-500/20"
  >
    {#each items as item}
      <NavigationItem href={`/#${item}`} isActive={active == item}>{item}</NavigationItem>
    {/each}
  </ul>
</nav>
