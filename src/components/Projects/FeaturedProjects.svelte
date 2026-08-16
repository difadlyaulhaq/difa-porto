<script>
  import { fade } from 'svelte/transition';

  export let projects = [];

  let activeFilter = 'All';
  let isExpanded = false;

  // Categories list
  const filters = ['All', 'Web', 'Mobile', 'AI'];

  // Helper function to map a project to its category based on tags & title
  function getCategory(project) {
    if (project.category) {
      return project.category;
    }
    const tags = (project.tags || []).map(t => t.toLowerCase());
    const title = (project.title || "").toLowerCase();
    
    // Check AI first (specifically AI, Machine Learning, ML, NLP, PyTorch, Hugging Face, LoRA, RoBERTa, etc.)
    if (
      tags.some(t => ['ai', 'machine learning', 'ml', 'nlp', 'pytorch', 'hugging face', 'lora', 'roberta'].includes(t)) ||
      title.includes('lora') || 
      title.includes('roberta') ||
      title.includes('web risk')
    ) {
      return 'AI';
    }
    // Check Mobile (including design of mobile apps, kotlin, flutter, capacitor, mobile)
    if (
      tags.some(t => ['flutter', 'kotlin', 'mobile', 'android', 'ios', 'mobile app', 'figma', 'ui & ux', 'design'].includes(t)) ||
      title.includes('mobile') || 
      title.includes('app')
    ) {
      return 'Mobile';
    }
    // Check Web
    if (
      tags.some(t => ['next.js', 'react', 'web', 'website', 'web platform', 'clerk', 'getstream', 'laravel', 'blockchain', 'stream', 'video conference'].includes(t)) ||
      title.includes('web') || 
      title.includes('site')
    ) {
      return 'Web';
    }
    // Default fallback to Web if not matched (to ensure only Web, Mobile, and AI remain)
    return 'Web';
  }

  // Filter projects based on active filter
  $: filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => getCategory(p) === activeFilter);

  // Reset page to 1 when filter changes
  $: if (activeFilter) {
    isExpanded = false;
  }

  // Slice list based on expansion state
  $: displayedProjects = isExpanded 
    ? filteredProjects 
    : filteredProjects.slice(0, 6);
</script>

<div class="space-y-12">
  <!-- Filter tabs -->
  <div class="flex flex-wrap justify-center gap-3">
    {#each filters as filter}
      <button
        on:click={() => activeFilter = filter}
        class="px-5 py-2.5 rounded-full text-xs md:text-sm font-bold tracking-wide transition-all duration-300 border {activeFilter === filter 
          ? 'bg-zinc-950 text-white border-zinc-950 shadow-md scale-105' 
          : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:text-black'}"
      >
        {filter}
      </button>
    {/each}
  </div>

  <!-- Projects Grid -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
    {#each displayedProjects as project (project.slug)}
      <a 
        href={`/projects/${project.slug}`}
        class="group flex flex-col bg-white border border-zinc-200/60 rounded-[28px] p-4 pb-6 shadow-md transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-zinc-300/80 hover:-translate-y-1.5 h-full outline-none"
        transition:fade={{ duration: 150 }}
      >
        <!-- Image Card -->
        <div 
          class="relative w-full rounded-[20px] overflow-hidden border border-zinc-100 bg-zinc-50 transition-all duration-500 mb-5"
          style="aspect-ratio: 16 / 9;"
        >
          <!-- Category Pill -->
          <span class="absolute top-3 left-3 z-10 px-3 py-1 bg-white/95 backdrop-blur-sm text-zinc-800 text-[10px] uppercase font-bold tracking-wider rounded-lg shadow-sm border border-zinc-200/30">
            {getCategory(project)}
          </span>

          <img 
            src={project.image} 
            alt={project.title} 
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>

        <!-- Project Title -->
        <div class="px-1">
          <h3 class="text-xl md:text-[22px] font-bold text-zinc-900 leading-tight tracking-tight transition-colors duration-300 group-hover:text-blue-600">
            {project.title}
          </h3>
        </div>

        <!-- Short Description -->
        {#if project.description}
          <p class="text-zinc-500 text-sm leading-relaxed mt-3 px-1 line-clamp-2">
            {project.description}
          </p>
        {/if}

        <!-- Footer Row (Tags & Action button/link) -->
        <div class="mt-auto pt-4 border-t border-zinc-100 flex items-center justify-between gap-4 px-1">
          <!-- Tags -->
          <div class="flex flex-wrap gap-1">
            {#if project.tags && project.tags.length > 0}
              {#each project.tags.slice(0, 2) as tag}
                <span class="px-2.5 py-1 bg-zinc-50 text-zinc-600 border border-zinc-200/60 rounded-lg text-[10px] font-semibold">
                  {tag}
                </span>
              {/each}
            {/if}
          </div>

          <!-- View Details link (replaces standalone list of tags) -->
          <span class="inline-flex items-center text-xs font-bold text-blue-600 group-hover:text-blue-700 transition-colors gap-0.5 whitespace-nowrap">
            View Details
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </span>
        </div>
      </a>
    {/each}
  </div>

  <!-- Show More Button -->
  {#if filteredProjects.length > 6}
    <div class="mt-12 flex justify-center">
      <button 
        class="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold text-white bg-blue-600 hover:bg-blue-750 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30"
        on:click={() => isExpanded = !isExpanded}
      >
        {#if isExpanded}
          <span>Show Less</span>
          <svg class="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
          </svg>
        {:else}
          <span>Show All Projects (+{filteredProjects.length - 6})</span>
          <svg class="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        {/if}
      </button>
    </div>
  {/if}
</div>

<style>
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
</style>
