<script lang="ts">
  export let show = false;
</script>

{#if show}
<div
  class="absolute z-[100] inset-0 bg-black flex items-center justify-center transition-opacity duration-700"
>
    <div class="relative flex flex-col items-center gap-4">
        <!-- Modern Spinner -->
        <div class="w-12 h-12 border-4 border-white/10 border-t-cyan-500 rounded-full animate-spin"></div>
        <span class="text-white/40 text-xs tracking-[0.3em] uppercase animate-pulse">Initializing</span>
    </div>
</div>
{/if}