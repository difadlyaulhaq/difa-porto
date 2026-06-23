<script lang="ts">
  import { createPopover, melt } from "@melt-ui/svelte";
  import { fade, slide } from "svelte/transition";
  import MobileNavigationItem from "./MobileNavigationItem.svelte";
  import type { Item } from "./items";

  const {
    elements: { trigger, content, arrow, close },
    states: { open },
  } = createPopover({
    forceVisible: true,
  });

  let classes = "";

  export { classes as class };

  function hide() {
    open.set(false);
  }

  export let active: Item;

  export let items: Item[];
</script>

<button
  type="button"
  class="group flex items-center rounded-full mr-4 bg-white/80 border border-zinc-200 px-4 py-2 text-sm font-bold text-zinc-800 shadow-md backdrop-blur-md ring-1 ring-zinc-200/50 hover:ring-zinc-300 transition duration-300 {classes}"
  use:melt={$trigger}
  aria-label="Update dimensions"
>
  menu
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="ml-2 h-auto w-4 stroke-zinc-600 group-hover:stroke-zinc-800"
    aria-hidden="true"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="m4.5 15.75 7.5-7.5 7.5 7.5"
    />
  </svg>

  <span class="sr-only">Open Popover</span>
</button>

{#if $open}
  <div
    transition:fade={{ duration: 300 }}
    class="fixed inset-0 z-50 bg-zinc-900/20 backdrop-blur-sm transition-all duration-300"
  ></div>

  <div use:melt={$content}>
    <div use:melt={$arrow}></div>
    <div
      transition:slide={{ duration: 300 }}
      class="fixed inset-x-4 bottom-8 z-50 origin-top rounded-3xl bg-white border border-zinc-200 p-8 shadow-2xl backdrop-blur-xl ring-1 ring-zinc-200/50"
    >
      <div class="flex flex-row-reverse items-center justify-between">
        <button
          aria-label="Close menu"
          class="-m-1 p-1 focus:outline-none"
          use:melt={$close}
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="h-6 w-6 text-zinc-500"
          >
            <path
              d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
              fill="none"
              stroke="currentColor"
            />
          </svg>
        </button>
        <h2 class="text-sm font-bold text-zinc-600">
          navigation
        </h2>
      </div>
      <nav class="mt-6">
        <ul
          class="-my-2 divide-y divide-zinc-100 text-base text-zinc-800"
        >
          {#each items as item}
            <MobileNavigationItem current={item} {active} {hide} />
          {/each}
        </ul>
      </nav>
    </div>
  </div>
{/if}
