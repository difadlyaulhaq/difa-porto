<script>
  import { onMount } from 'svelte';
  import LiquidEther from './LiquidEther.svelte';
  import Loading from './Loading.svelte';

  let isLoading = true;

  onMount(() => {
    // Simulate initial loading time for assets/shaders
    const timer = setTimeout(() => {
      isLoading = false;
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

  <!-- Content Overlay centered -->
  <div class="absolute inset-0 z-40 pointer-events-none flex flex-col items-center justify-center">
      <div class="text-center space-y-6 md:space-y-10 px-6">
          <div class="space-y-2 md:space-y-4 animate-in fade-in zoom-in duration-1000 delay-300">
              <h1 class="text-white text-4xl md:text-7xl font-bold tracking-tighter drop-shadow-2xl">
                  DIFA <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">DLYAUL HAQ</span>
              </h1>
              <p class="text-white/80 text-lg md:text-2xl font-light tracking-[0.2em] md:tracking-[0.4em] uppercase">
                  Software Engineer & AI Enthusiast
              </p>
          </div>
          
          <div class="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
              <a href="#projects" class="pointer-events-auto inline-block group relative px-8 py-3 md:px-10 md:py-4 overflow-hidden rounded-full bg-white/5 backdrop-blur-md border border-white/20 transition-all duration-500 hover:bg-white/10 hover:border-white/40 hover:scale-105 hover:shadow-[0_0_50px_rgba(34,211,238,0.3)]">
                  <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                  <span class="relative z-10 text-white font-semibold tracking-widest text-xs md:text-base uppercase">Explore Work</span>
              </a>
          </div>
      </div>
  </div>
</div>
