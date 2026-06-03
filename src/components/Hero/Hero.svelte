<script>
  import { onMount } from 'svelte';
  import PlanetScene from './3D/PlanetScene.svelte';
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

<div class="relative h-screen h-[100dvh] w-full overflow-hidden bg-[#020204]">  
  <Loading show={isLoading} />

  <!-- Background: 3D Planet Scene -->
  <div class="absolute inset-0 z-0 opacity-80">
    <PlanetScene />
  </div>

  <!-- Overlay Gradients for Depth -->
  <div class="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-[#020204] pointer-events-none"></div>
  <div class="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,2,4,0.4)_100%)] pointer-events-none"></div>

  <!-- Content Overlay -->
  <div class="absolute inset-0 z-40 pointer-events-none flex flex-col items-center justify-center pt-24 md:pt-32">
      <div class="text-center space-y-8 md:space-y-12 px-6 max-w-5xl">
          <!-- Main Content -->
          <div class="space-y-3 md:space-y-6" class:fade-in-up={showContent} style="opacity: 0;">
              <!-- Name with Cyber-Tech Aesthetic -->
              <h1 class="text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.8] mix-blend-difference">
                  <span class="block text-white mb-2">DIFA</span>
                  <span class="block relative">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient-x">
                      DLYAUL HAQ
                    </span>
                  </span>
              </h1>

              <!-- Role & Tagline -->
              <div class="space-y-4 max-w-2xl mx-auto">
                <p class="text-gray-400 text-sm md:text-xl font-medium tracking-[0.3em] uppercase">
                    Full-Stack Software Engineer
                </p>
                <div class="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
                <p class="text-white/60 text-xs md:text-sm max-w-md mx-auto leading-relaxed font-light italic">
                  "Building scalable architectures and immersive digital experiences at the intersection of AI and Web Technology."
                </p>
              </div>
          </div>
          
          

          <!-- Quick Stats / Badges -->
          <div class="flex flex-wrap items-center justify-center gap-8 md:gap-24 pt-10 pb-16 animate-fade-in-up" style="animation-delay: 0.7s; opacity: 0;">
            <div class="flex flex-col items-center gap-2 group">
                <span class="text-white/40 text-[10px] font-bold uppercase tracking-widest group-hover:text-cyan-400 transition-colors">Availability</span>
                <span class="text-white text-xs md:text-sm font-medium uppercase tracking-tighter">Remote / Hybrid</span>
            </div>

            <div class="w-px h-8 bg-white/10 hidden md:block"></div>

            <div class="flex flex-col items-center gap-2 group">
                <span class="text-white/40 text-[10px] font-bold uppercase tracking-widest group-hover:text-cyan-400 transition-colors">Location</span>
                <span class="text-white text-xs md:text-sm font-medium uppercase tracking-tighter">Yogyakarta, ID</span>
            </div>

            <div class="w-px h-8 bg-white/10 hidden md:block"></div>

            <div class="flex flex-col items-center gap-2 group">
                <span class="text-white/40 text-[10px] font-bold uppercase tracking-widest group-hover:text-cyan-400 transition-colors">Experience</span>
                <span class="text-white text-xs md:text-sm font-medium uppercase tracking-tighter">3+ Years Coding</span>
            </div>
          </div>
      </div>

      <!-- Tech Stack Floating Bar (Bottom) -->
      <div class="absolute bottom-6 left-0 w-full px-6 flex justify-center items-center gap-8 md:gap-12 animate-fade-in pointer-events-none opacity-20" style="animation-delay: 1.2s;">
        <div class="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div class="flex gap-10">
            <!-- Simple placeholders for tech icons if needed, or just text -->
            <span class="text-[9px] text-white font-mono uppercase tracking-[0.6em]">Svelte</span>
            <span class="text-[9px] text-white font-mono uppercase tracking-[0.6em]">Flutter</span>
            <span class="text-[9px] text-white font-mono uppercase tracking-[0.6em]">Kotlin</span>
            <span class="text-[9px] text-white font-mono uppercase tracking-[0.6em]">Next.js</span>
            <span class="text-[9px] text-white font-mono uppercase tracking-[0.6em]">Astro</span>
            <span class="text-[9px] text-white font-mono uppercase tracking-[0.6em]">Python</span>
            <span class="text-[9px] text-white font-mono uppercase tracking-[0.6em]">Laravel</span>
        </div>
        <div class="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>
  </div>
</div>

<style>
  @keyframes gradient-x {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  .animate-gradient-x {
    background-size: 200% 200%;
    animation: gradient-x 5s ease infinite;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .fade-in-up {
    animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .animate-fade-in-up {
    animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .animate-fade-in {
    animation: fadeIn 1.5s ease-out forwards;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  /* Cyber-Tech Text Shadow */
  h1 {
    text-shadow: 0 0 20px rgba(6, 182, 212, 0.2);
  }

  /* Fix for Safari backdrop-blur */
  * {
    -webkit-backdrop-filter: blur(20px);
  }
</style>