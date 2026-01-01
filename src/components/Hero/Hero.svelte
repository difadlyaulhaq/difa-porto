<script>
  import { onMount } from 'svelte';
  import LiquidEther from './LiquidEther.svelte';
  import Loading from './Loading.svelte';

  let isLoading = true;
  let showContent = false;

  onMount(() => {
    const timer = setTimeout(() => {
      isLoading = false;
      setTimeout(() => {
        showContent = true;
      }, 300);
    }, 1500);

    return () => clearTimeout(timer);
  });
</script>

<div class="relative h-screen h-[100dvh] w-full overflow-hidden bg-black">
  <Loading show={isLoading} />

  <!-- Background: Liquid Ether -->
  <div class="absolute inset-0 z-0">
    <LiquidEther
        colors={['#22d3ee', '#34d399', '#a78bfa']} 
        mouseForce={20}
        cursorSize={100}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
    />
  </div>

  <!-- Overlay Gradient -->
  <div class="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-black/20 to-black/60 pointer-events-none"></div>

  <!-- Content Overlay centered -->
  <div class="absolute inset-0 z-40 pointer-events-none flex flex-col items-center justify-center">
      <div class="text-center space-y-6 md:space-y-10 px-6 max-w-5xl">
          <!-- Main Content with enhanced animations -->
          <div class="space-y-3 md:space-y-5" class:fade-in-up={showContent}>
              <!-- Greeting Badge -->
              <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/20 rounded-full backdrop-blur-md mb-4 animate-fade-in">
                <div class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </div>
                <span class="text-xs md:text-sm text-white/80 font-medium tracking-wide">Welcome to my portfolio</span>
              </div>

              <!-- Name with enhanced gradient -->
              <h1 class="text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter drop-shadow-2xl leading-tight">
                  <span class="inline-block animate-fade-in-up" style="animation-delay: 0.1s;">DIFA</span>
                  <br class="md:hidden" />
                  <span class="inline-block animate-fade-in-up ml-0 md:ml-4" style="animation-delay: 0.2s;">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 animate-gradient">
                      DLYAUL HAQ
                    </span>
                  </span>
              </h1>

              <!-- Subtitle with typing effect feel -->
              <div class="space-y-2">
                <p class="text-white/90 text-base sm:text-lg md:text-2xl font-light tracking-[0.2em] md:tracking-[0.4em] uppercase animate-fade-in-up" style="animation-delay: 0.3s;">
                    Software Engineer
                </p>
                <div class="flex items-center justify-center gap-2 animate-fade-in-up" style="animation-delay: 0.4s;">
                  <div class="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400"></div>
                  <p class="text-cyan-400/80 text-sm md:text-base font-medium tracking-wider">
                      AI Enthusiast
                  </p>
                  <div class="h-px w-8 bg-gradient-to-l from-transparent to-cyan-400"></div>
                </div>
              </div>
          </div>
          
          <!-- CTA Button with enhanced design -->
          <div class="animate-fade-in-up" style="animation-delay: 0.5s;">
              <a href="#projects" class="pointer-events-auto inline-block group relative">
                <!-- Glow effect -->
                <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-emerald-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-75 blur-lg transition-all duration-500 group-hover:duration-300 animate-gradient"></div>
                
                <!-- Button -->
                <div class="relative px-8 py-3 md:px-12 md:py-4 overflow-hidden rounded-full bg-white/10 backdrop-blur-xl border border-white/20 transition-all duration-500 group-hover:bg-white/20 group-hover:border-white/40 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/50">
                  <!-- Shimmer effect -->
                  <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
                  
                  <!-- Content -->
                  <div class="relative z-10 flex items-center gap-3">
                    <span class="text-white font-semibold tracking-widest text-xs md:text-base uppercase">Explore Work</span>
                    <svg class="w-4 h-4 md:w-5 md:h-5 text-white transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </a>
          </div>

          <!-- Social Links / Stats -->
          <div class="flex flex-wrap items-center justify-center gap-6 md:gap-8 pt-6 animate-fade-in-up" style="animation-delay: 0.6s;">
            <div class="flex items-center gap-2 text-white/60 hover:text-white transition-colors group">
              <div class="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span class="text-xs md:text-sm font-medium">Available for work</span>
            </div>

            <div class="w-px h-6 bg-white/20"></div>

            <div class="flex items-center gap-2 text-white/60">
              <svg class="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="text-xs md:text-sm font-medium">Yogyakarta, ID</span>
            </div>
          </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce pointer-events-none">
        <div class="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div class="w-1 h-2 bg-white/60 rounded-full animate-scroll"></div>
        </div>
      </div>
  </div>
</div>

<style>
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes gradient {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  @keyframes scroll {
    0% {
      transform: translateY(0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateY(12px);
      opacity: 0;
    }
  }

  .animate-fade-in {
    animation: fadeIn 0.8s ease-out forwards;
  }

  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
    opacity: 0;
  }

  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 3s ease infinite;
  }

  .animate-scroll {
    animation: scroll 2s ease-in-out infinite;
  }

  .fade-in-up {
    animation: fadeInUp 0.6s ease-out forwards;
  }

  /* Smooth transitions */
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>