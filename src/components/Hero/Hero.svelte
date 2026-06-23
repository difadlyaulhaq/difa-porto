<script>
  import { onMount } from 'svelte';

  let showContent = false;

  onMount(() => {
    const timer = setTimeout(() => {
      showContent = true;
    }, 100);
    return () => clearTimeout(timer);
  });
</script>

<div class="relative min-h-screen lg:h-screen w-full overflow-hidden bg-white flex flex-col justify-between items-center pt-24 pb-12 lg:pb-18 section" id="home">
  <!-- Top Spacer to prevent collision with top Navigation menu -->
  <div class="h-12 w-full"></div>

  <!-- Centered Main Content -->
  <div class="relative z-20 flex flex-col items-center justify-center text-center px-6 max-w-5xl w-full my-auto">
    <div class="space-y-8 md:space-y-10">
      <!-- Staggered Animated Name with slightly reduced font sizes to prevent overlapping -->
      <h1 class="flex flex-col items-center gap-2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] uppercase select-none">
        <div class="flex flex-wrap justify-center gap-x-2">
          {#each "DIFA".split('') as char, i}
            <span class="inline-block text-zinc-900 char-anim" style="animation-delay: {i * 60}ms">{char}</span>
          {/each}
        </div>
        <div class="flex flex-wrap justify-center gap-x-2">
          {#each "DLYAUL".split('') as char, i}
            <span class="inline-block text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-400 char-anim" style="animation-delay: {(i + 4) * 60}ms">{char}</span>
          {/each}
        </div>
        <div class="flex flex-wrap justify-center gap-x-2">
          {#each "HAQ.".split('') as char, i}
            <span class="inline-block text-zinc-900 char-anim" style="animation-delay: {(i + 10) * 60}ms">{char}</span>
          {/each}
        </div>
      </h1>

      <!-- Tagline & Description with Fade-in Delay -->
      <div class="space-y-4 max-w-2xl mx-auto fade-in-up-delay">
        <p class="text-sky-600 text-xs sm:text-sm md:text-base font-bold tracking-[0.3em] uppercase">
          Full-Stack Software Engineer
        </p>
        <p class="text-zinc-500 text-sm sm:text-base md:text-lg leading-relaxed font-medium max-w-lg mx-auto">
          Crafting high-performance digital experiences at the intersection of scalable architectures and immersive interfaces.
        </p>
      </div>

      <!-- CTA Buttons with Fade-in Delay -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 fade-in-up-delay">
        <a 
          href="#projects" 
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 text-white font-semibold rounded-full hover:bg-zinc-800 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] group"
        >
          <span>View My Work</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </a>

        <a 
          href="#contact" 
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-zinc-200 hover:border-sky-600 text-zinc-900 font-semibold rounded-full hover:bg-zinc-50 transition-all duration-300 transform hover:scale-105 group"
        >
          <span>Get in Touch</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </a>
      </div>
    </div>
  </div>

  <!-- Bottom Container: Stats and Tech stack (contained in flex flow) -->
  <div class="w-full z-20 mt-auto flex flex-col gap-5">
    <!-- Stats Grid (Subtle, transparent panels - Desktop Only) -->
    <div class="max-w-4xl w-full mx-auto hidden lg:flex items-center justify-between border-t border-zinc-200/60 pt-6 px-6">
      <div class="flex flex-col items-start gap-1">
        <span class="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Availability</span>
        <span class="text-zinc-800 text-xs font-bold tracking-wide uppercase">Remote / Hybrid</span>
      </div>
      <div class="h-8 w-px bg-zinc-200/60"></div>
      <div class="flex flex-col items-start gap-1">
        <span class="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Location</span>
        <span class="text-zinc-800 text-xs font-bold tracking-wide uppercase">Yogyakarta, ID</span>
      </div>
      <div class="h-8 w-px bg-zinc-200/60"></div>
      <div class="flex flex-col items-start gap-1">
        <span class="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Experience</span>
        <span class="text-zinc-800 text-xs font-bold tracking-wide uppercase">3+ Years Coding</span>
      </div>
    </div>
  </div>
</div>

<style>
  /* Character stagger reveal animation */
  @keyframes charFadeInUp {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .char-anim {
    opacity: 0;
    animation: charFadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  /* Fade-in animations for taglines/buttons */
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .fade-in-up-delay {
    opacity: 0;
    animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    animation-delay: 1s;
  }

  /* Floating background blobs animations */
  @keyframes float-1 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(30px, -40px) scale(1.1); }
  }
  @keyframes float-2 {
    0%, 100% { transform: translate(0, 0) scale(1.1); }
    50% { transform: translate(-40px, 30px) scale(0.9); }
  }
  @keyframes float-3 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(20px, 20px) scale(1.05); }
  }

  .animate-blob-1 {
    animation: float-1 20s ease-in-out infinite;
  }
  .animate-blob-2 {
    animation: float-2 25s ease-in-out infinite;
  }
  .animate-blob-3 {
    animation: float-3 18s ease-in-out infinite;
  }
</style>