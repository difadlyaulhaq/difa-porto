<script>
  export let projects = [];

  let activeFilter = 'All';

  // Categories list
  const filters = ['All', 'Web', 'Mobile', 'AI'];

  // Helper function to map a project to its category based on tags & title
  function getCategory(project) {
    const tags = (project.tags || []).map(t => t.toLowerCase());
    const title = (project.title || "").toLowerCase();
    
    // Check AI first (including AI, Machine Learning, ML, NLP, TensorFlow, Python, SKOps, etc.)
    if (
      tags.some(t => ['ai', 'machine learning', 'ml', 'nlp', 'tensorflow', 'pytorch', 'deep learning', 'skops', 'scikit-learn', 'python', 'gradio'].includes(t)) ||
      title.includes('ai') || 
      title.includes('analyzer')
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
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each filteredProjects as project (project.slug)}
      <a 
        href={`/projects/${project.slug}`}
        class="group flex flex-col space-y-4 outline-none"
      >
        <!-- Image Card -->
        <div 
          class="relative w-full rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50 shadow-md transition-all duration-500 group-hover:border-zinc-300 group-hover:-translate-y-1 group-hover:shadow-[0_12px_30px_rgba(0,0,0,0.1)]"
          style="aspect-ratio: 16 / 9;"
        >
          <img 
            src={project.image} 
            alt={project.title} 
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
            loading="lazy"
          />
        </div>

        <!-- Project Info -->
        <div class="space-y-1">
          <div class="flex items-center justify-between gap-3">
            <h3 class="text-lg md:text-xl font-bold text-zinc-900 group-hover:text-sky-600 transition-colors leading-tight">
              {project.title}
            </h3>
            <span class="px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-zinc-100 border border-zinc-200 text-zinc-500 uppercase tracking-wider whitespace-nowrap">
              {getCategory(project)}
            </span>
          </div>
          <p class="text-sm text-zinc-500 line-clamp-2 leading-relaxed pt-1 font-medium">
            {project.description}
          </p>
        </div>
      </a>
    {/each}
  </div>
</div>
