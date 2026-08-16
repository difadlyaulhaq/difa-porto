<script>
  export let projects = [];

  let activeFilter = 'All';

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
    {#each filteredProjects as project (project.slug)}
      <a 
        href={`/projects/${project.slug}`}
        class="group flex flex-col space-y-4 outline-none"
      >
        <!-- Image Card -->
        <div 
          class="relative w-full rounded-[24px] overflow-hidden border border-zinc-100 bg-zinc-50 transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
          style="aspect-ratio: 16 / 9;"
        >
          <img 
            src={project.image} 
            alt={project.title} 
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>

        <!-- Project Title & Link (Row layout like screenshot) -->
        <div class="flex items-center gap-3.5 pt-2 px-1">
          <!-- Circle Arrow Icon -->
          <div class="flex-shrink-0 text-zinc-800 transition-transform duration-300 group-hover:translate-x-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
              <circle cx="12" cy="12" r="10"/>
              <path d="M8 12h8"/>
              <path d="m12 16 4-4-4-4"/>
            </svg>
          </div>
          
          <!-- Project Title -->
          <h3 class="text-xl md:text-[22px] font-medium text-zinc-900 leading-tight tracking-tight transition-colors duration-300 group-hover:text-blue-600">
            {project.title}
          </h3>
        </div>
      </a>
    {/each}
  </div>
</div>
