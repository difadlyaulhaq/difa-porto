<script lang="ts">
  import { onMount } from 'svelte';
  import { type Item, items } from "./items";
  import MobileNavigation from "./MobileNavigation.svelte";

  export let active: Item = "home";

  let isScrolled = false;

  function setActive() {
    // @ts-ignore
    if (typeof mostVisible !== 'undefined') {
      let currentlyActive = mostVisible(document.querySelectorAll(".section"));
      if (currentlyActive && currentlyActive.id) {
        active = currentlyActive.id;
      }
    }
  }

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 20;
      setActive();
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set active on mount
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<header 
  class="fixed top-0 left-0 w-full z-50 transition-all duration-300 py-6 {isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-zinc-200/50 py-4 shadow-sm' : 'bg-transparent'}"
>
  <div class="container mx-auto px-6 max-w-7xl">
    <nav class="flex items-center justify-between">
      <!-- Logo -->
      <a href="#home" class="text-2xl font-bold tracking-tighter text-zinc-900 hover:text-sky-600 transition-colors">
        Difa.
      </a>

      <!-- Desktop Nav Items -->
      <div class="hidden md:flex items-center gap-8">
        {#each items as item}
          <a 
            href={`/#${item}`} 
            class="text-sm font-bold transition-colors relative py-1 uppercase tracking-wider {active === item ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-900'}"
          >
            {item}
            {#if active === item}
              <div class="absolute left-0 top-full block h-[2px] w-full bg-zinc-900 rounded-full"></div>
            {/if}
          </a>
        {/each}

        <!-- Let's Talk Button -->
        <a 
          href="#contact" 
          class="inline-flex items-center justify-center whitespace-nowrap text-xs font-semibold uppercase tracking-wider bg-zinc-900 text-white hover:bg-zinc-800 h-9 rounded-full px-6 transition-all shadow-md"
        >
          Let's Talk
        </a>
      </div>

      <!-- Mobile Nav Trigger -->
      <div class="md:hidden">
        <MobileNavigation {items} bind:active />
      </div>
    </nav>
  </div>
</header>
