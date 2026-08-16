<script>
  const allCertifications = [
    { title: "Build Real World AI Applications with Gemini", issuer: "Google Cloud", date: "Feb 2025", category: "AI & Cloud", url: "https://www.cloudskillsboost.google/public_profiles/a3b54b8c-bd41-4408-97e7-330235cd0318/badges/13832049", featured: true },
    { title: "Prompt Design in Vertex AI", issuer: "Google Cloud", date: "Feb 2025", category: "AI & Cloud", url: "https://www.cloudskillsboost.google/public_profiles/a3b54b8c-bd41-4408-97e7-330235cd0318/badges/13831298" },
    { title: "TensorFlow: Advanced Techniques", issuer: "DeepLearning.AI", date: "Dec 2024", category: "Machine Learning", url: "https://www.coursera.org/account/accomplishments/specialization/DC4NWJO3U30L", featured: true },
    { title: "TensorFlow: Data and Deployment", issuer: "DeepLearning.AI", date: "Dec 2024", category: "Machine Learning", url: "https://www.coursera.org/account/accomplishments/specialization/WTJ3JBTK94GK", featured: true },
    { title: "Generative AI for Everyone", issuer: "DeepLearning.AI", date: "Dec 2024", category: "Artificial Intelligence", url: "https://www.coursera.org/account/accomplishments/verify/MMZ965KB583R" },
    { title: "DeepLearning.AI TensorFlow Developer", issuer: "DeepLearning.AI", date: "Nov 2024", category: "Machine Learning", url: "https://www.coursera.org/account/accomplishments/specialization/0NYNIXH8F2D8", featured: true },
    { title: "Machine Learning Specialization", issuer: "DeepLearning.AI / Stanford", date: "Oct 2024", category: "Machine Learning", url: "https://www.coursera.org/account/accomplishments/specialization/DJ6ML1B19W1X", featured: true },
    { title: "Supervised Machine Learning", issuer: "Stanford University", date: "Oct 2024", category: "Machine Learning", url: "https://www.coursera.org/account/accomplishments/records/2W9LF5N47FHU", featured: true },
    { title: "Linear Algebra for Machine Learning", issuer: "DeepLearning.AI", date: "Oct 2024", category: "Machine Learning", url: "https://www.coursera.org/account/accomplishments/records/KX0P0SF9O1GF" },
    { title: "Python to Interact with the Operating System", issuer: "Google", date: "Sep 2024", category: "Software Engineering", url: "https://www.coursera.org/account/accomplishments/records/37S25FT16J6T" },
    { title: "Crash Course on Python", issuer: "Google", date: "Sep 2024", category: "Software Engineering", url: "https://www.coursera.org/account/accomplishments/records/CN13L7N0KGVO" },
    { title: "Menjadi Pengembang Software", issuer: "Dicoding Indonesia", date: "Sep 2024", category: "Software Engineering", url: "https://www.dicoding.com/certificates/KEXL1R3VYXG2" },
    { title: "Google Play Store Listing Certificate", issuer: "Google Play Academy", date: "Jan 2024", category: "Mobile Dev", url: "https://www.credential.net/8e8a3ada-8fb2-47ce-9622-9e3ce8f1680f" },
    { title: "Belajar Machine Learning untuk Pemula", issuer: "Dicoding Indonesia", date: "Dec 2023", category: "Machine Learning", url: "https://www.dicoding.com/certificates/QLZ94QYM7P5D" },
    { title: "Memulai Pemrograman dengan Python", issuer: "Dicoding Indonesia", date: "Dec 2023", category: "Software Engineering", url: "https://www.dicoding.com/certificates/L4PQQ3RW2PO1" },
    { title: "Belajar Dasar Visualisasi Data", issuer: "Dicoding Indonesia", date: "Oct 2023", category: "Data Science", url: "https://www.dicoding.com/certificates/GRX523V8YX0M" }
  ];

  let selectedCategory = "All";
  const categories = ["All", "Machine Learning", "Artificial Intelligence", "AI & Cloud", "Software Engineering", "Mobile Dev", "Data Science"];
  let isExpanded = false;

  // Dynamically sort: featured items first
  $: sortedCertifications = [...allCertifications].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  // Filter based on selectedCategory
  $: filteredCertifications = selectedCategory === "All" 
    ? sortedCertifications 
    : sortedCertifications.filter(i => i.category === selectedCategory);

  // Slice list based on expansion state
  $: displayedCertifications = isExpanded 
    ? filteredCertifications 
    : filteredCertifications.slice(0, 6);
</script>

<div class="relative py-24 bg-white overflow-hidden border-t border-zinc-100" id="certifications">
  <!-- Subtle blue background accents -->
  <div class="absolute top-0 right-0 -mr-48 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
  <div class="absolute bottom-0 left-0 -ml-48 w-96 h-96 bg-sky-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

  <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight leading-tight mb-4">
        Licenses & <span class="text-blue-600">Certifications</span>
      </h2>
      <p class="text-zinc-500 text-lg max-w-2xl mx-auto font-medium">Verified achievements organized by domain of expertise.</p>
      
      <!-- Category Filters -->
      <div class="mt-8 flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
        {#each categories as cat}
          <button 
            class="px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 border
              {selectedCategory === cat 
                ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-200' 
                : 'bg-white text-zinc-600 border-zinc-200 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50'}"
            on:click={() => { selectedCategory = cat; isExpanded = false; }}
          >
            {cat}
          </button>
        {/each}
      </div>
    </div>

    <!-- Grid Layout (No Timeline) -->
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {#each displayedCertifications as cert}
        <div class="group bg-white border border-zinc-200 rounded-2xl p-7 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-blue-200 transition-all duration-300 relative overflow-hidden flex flex-col h-full">
          
          <!-- Hover gradient effect -->
          <div class="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
          
          <div class="relative z-10 flex flex-col h-full">
            <div class="flex justify-between items-start mb-6">
              <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">
                {cert.category}
              </span>
              <span class="text-xs font-bold text-zinc-400 bg-zinc-50 border border-zinc-100 px-2.5 py-1 rounded-md">{cert.date}</span>
            </div>
            
            <h4 class="font-bold text-zinc-900 text-[17px] leading-snug mb-4 group-hover:text-blue-600 transition-colors duration-300">
              {cert.title}
            </h4>
            
            <div class="mt-auto pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-100 group-hover:border-blue-100 transition-colors">
              <div class="flex items-center text-[13px] font-semibold text-zinc-500">
                <div class="w-6 h-6 mr-2.5 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                  <svg class="w-3.5 h-3.5 text-zinc-400 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                {cert.issuer}
              </div>
              
              <a href={cert.url} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-bold bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white transition-all duration-300 border border-blue-100 hover:border-blue-600 shadow-sm z-20">
                <span>View Certificate</span>
                <svg class="w-3.5 h-3.5 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            
          </div>
        </div>
      {:else}
        <div class="col-span-full py-12 text-center text-zinc-500 font-medium">
          No certifications found for this category.
        </div>
      {/each}
    </div>

    <!-- Show More Button -->
    {#if filteredCertifications.length > 6}
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
            <span>Show All Certificates (+{filteredCertifications.length - 6})</span>
            <svg class="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          {/if}
        </button>
      </div>
    {/if}
  </div>
</div>
