<script lang="ts">
  import { onMount } from 'svelte';

  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<div class="relative min-h-[95vh] lg:min-h-screen w-full bg-[#ebf2f7] text-zinc-900 flex flex-col justify-between overflow-hidden section pt-20 pb-0 select-none" id="home">

  <!-- Background Marquee Running Text (Behind Person) -->
  <div class="absolute inset-0 flex flex-col justify-center pointer-events-none z-0 overflow-hidden opacity-90">
    <!-- Top Row Marquee (Scrolling Left) -->
    <div class="whitespace-nowrap flex marquee-container py-2">
      <div class="marquee-content flex gap-8 items-center">
        <span class="text-[12vw] md:text-[13rem] font-black uppercase tracking-tighter text-zinc-900/10 leading-none">
          Creative Developer & Full-Stack Engineer &nbsp;—&nbsp; Difa Dlyaul Haq &nbsp;—&nbsp;
        </span>
        <span class="text-[12vw] md:text-[13rem] font-black uppercase tracking-tighter text-zinc-900/10 leading-none">
          Creative Developer & Full-Stack Engineer &nbsp;—&nbsp; Difa Dlyaul Haq &nbsp;—&nbsp;
        </span>
      </div>
      <div class="marquee-content flex gap-8 items-center" aria-hidden="true">
        <span class="text-[12vw] md:text-[13rem] font-black uppercase tracking-tighter text-zinc-900/10 leading-none">
          Creative Developer & Full-Stack Engineer &nbsp;—&nbsp; Difa Dlyaul Haq &nbsp;—&nbsp;
        </span>
        <span class="text-[12vw] md:text-[13rem] font-black uppercase tracking-tighter text-zinc-900/10 leading-none">
          Creative Developer & Full-Stack Engineer &nbsp;—&nbsp; Difa Dlyaul Haq &nbsp;—&nbsp;
        </span>
      </div>
    </div>

    <!-- Bottom Row Marquee (Scrolling Right) -->
    <div class="whitespace-nowrap flex marquee-container-reverse py-2 -mt-6 md:-mt-12">
      <div class="marquee-content-reverse flex gap-8 items-center">
        <span class="text-[10vw] md:text-[11rem] font-black uppercase tracking-tighter text-transparent stroke-text leading-none">
          Crafting Digital Experiences &nbsp;—&nbsp; Scalable Architecture &nbsp;—&nbsp;
        </span>
        <span class="text-[10vw] md:text-[11rem] font-black uppercase tracking-tighter text-transparent stroke-text leading-none">
          Crafting Digital Experiences &nbsp;—&nbsp; Scalable Architecture &nbsp;—&nbsp;
        </span>
      </div>
      <div class="marquee-content-reverse flex gap-8 items-center" aria-hidden="true">
        <span class="text-[10vw] md:text-[11rem] font-black uppercase tracking-tighter text-transparent stroke-text leading-none">
          Crafting Digital Experiences &nbsp;—&nbsp; Scalable Architecture &nbsp;—&nbsp;
        </span>
        <span class="text-[10vw] md:text-[11rem] font-black uppercase tracking-tighter text-transparent stroke-text leading-none">
          Crafting Digital Experiences &nbsp;—&nbsp; Scalable Architecture &nbsp;—&nbsp;
        </span>
      </div>
    </div>
  </div>

  <!-- Header Info Row (Top Left & Top Right) -->
  <div class="relative z-20 w-full max-w-7xl mx-auto px-6 pt-4 flex flex-col md:flex-row justify-between items-start md:items-start gap-4">
    <!-- Top Left -->
    <div class="flex flex-col items-start gap-1">
      <div class="flex items-center gap-2">
        <span class="relative flex h-2.5 w-2.5">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span class="text-xs font-mono tracking-wide text-zinc-500 uppercase">Available for projects</span>
      </div>
      <h2 class="text-sm md:text-base font-bold text-zinc-900 tracking-tight">
        @ Code by Difa Dlyaul Haq
      </h2>
    </div>

    <!-- Top Right -->
    <div class="max-w-md md:text-right">
      <p class="text-xs md:text-sm text-zinc-600 leading-relaxed font-normal">
        Passionate Creative Designer & Full-Stack Developer, dedicated to crafting innovative solutions and exceptional digital experiences through modern technologies.
      </p>
    </div>
  </div>

  <!-- Circular Arrow Badge (To the right of the person portrait) -->
  <a 
    href="#projects" 
    aria-label="View Work"
    class="absolute right-6 sm:right-16 md:right-24 lg:right-32 top-1/3 z-30 group flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 border border-zinc-900/20 bg-zinc-900/5 backdrop-blur-sm text-zinc-900 hover:bg-zinc-900 hover:text-white transition-all duration-500 shadow-lg rounded-full"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8 transform group-hover:rotate-45 transition-transform duration-300">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
  </a>

  <!-- Cutout Image Container (FLUSH TO BOTTOM EDGE OF HERO SECTION) -->
  <div class="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 flex justify-center items-end pointer-events-none">
    <img 
      src="/assets/difa-hero.png" 
      alt="Difa Dlyaul Haq - Full-Stack Software Engineer" 
      class="h-[70vh] sm:h-[80vh] md:h-[86vh] lg:h-[92vh] w-auto max-w-none object-contain object-bottom filter contrast-[1.05] drop-shadow-[0_25px_45px_rgba(0,0,0,0.22)] transition-all duration-700 grayscale"
    />
  </div>

  <!-- Bottom Interactive Dock & Stats Bar -->
  <div class="relative z-20 w-full max-w-5xl mx-auto px-4 pb-6 mt-auto">
    <div class="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-xl shadow-zinc-900/5">
      <!-- Stats Left -->
      <div class="flex items-center gap-6 text-xs font-semibold text-zinc-700 px-2">
        <div class="flex flex-col">
          <span class="text-[10px] text-zinc-400 uppercase tracking-widest font-mono">Location</span>
          <span class="text-zinc-900 font-bold">Yogyakarta, ID</span>
        </div>
        <div class="h-6 w-px bg-zinc-200"></div>
        <div class="flex flex-col">
          <span class="text-[10px] text-zinc-400 uppercase tracking-widest font-mono">Role</span>
          <span class="text-zinc-900 font-bold">Full-Stack Dev</span>
        </div>
        <div class="h-6 w-px bg-zinc-200 hidden md:block"></div>
        <div class="hidden md:flex flex-col">
          <span class="text-[10px] text-zinc-400 uppercase tracking-widest font-mono">Experience</span>
          <span class="text-zinc-900 font-bold">3+ Years</span>
        </div>
      </div>

      <!-- Action Buttons Right -->
      <div class="flex items-center gap-3 w-full sm:w-auto">
        <a 
          href="#projects" 
          class="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-zinc-900 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 shadow-md group"
        >
          <span>View My Work</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </a>

        <a 
          href="#contact" 
          class="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-transparent border border-zinc-300 hover:border-zinc-900 text-zinc-900 text-xs font-bold uppercase tracking-wider rounded-full hover:bg-zinc-100 transition-all duration-300"
        >
          <span>Get in Touch</span>
        </a>
      </div>
    </div>
  </div>

</div>

<style>
  /* Seamless Marquee Animation */
  @keyframes marquee {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  @keyframes marquee-reverse {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0%);
    }
  }

  .marquee-container {
    display: flex;
    width: max-content;
    animation: marquee 35s linear infinite;
  }

  .marquee-container-reverse {
    display: flex;
    width: max-content;
    animation: marquee-reverse 45s linear infinite;
  }

  .marquee-container:hover, .marquee-container-reverse:hover {
    animation-play-state: paused;
  }

  /* Stroke text effect for outlined running text */
  .stroke-text {
    -webkit-text-stroke: 1.5px rgba(24, 24, 27, 0.12);
  }
</style>