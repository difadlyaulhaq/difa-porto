<script lang="ts">
  import type { Item } from "./items";

  export let current: Item = "home";

  export let active: Item = "home";

  export let hide: () => void;
</script>

<li>
  <a
    href="/#{current}"
    class="block py-2 font-medium {active == current ? 'text-violet-600 font-bold' : 'text-zinc-600'}"
    on:click={hide}
  >
    {current}
  </a>
</li>
