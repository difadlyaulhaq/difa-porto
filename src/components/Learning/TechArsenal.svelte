<script lang="ts">
  import nextjsLogo from '../../assets/about/tech-logos/nextjs-icon.svg';
  import svelteKitLogo from '../../assets/about/tech-logos/svelte.svg';
  import tailwindLogo from '../../assets/about/tech-logos/tailwind.svg';
  import typescriptLogo from '../../assets/about/tech-logos/typescript-svgrepo-com.svg';

  import nodejsLogo from '../../assets/about/tech-logos/nodejs-icon-svgrepo-com.svg';
  import postgresqlLogo from '../../assets/about/tech-logos/postgresql-logo-svgrepo-com.svg';
  import supabaseLogo from '../../assets/about/tech-logos/supabase-icon.svg';

  import flutterLogo from '../../assets/about/tech-logos/flutter-svgrepo-com.svg';
  import kotlinLogo from '../../assets/about/tech-logos/kotlin-svgrepo-com.svg';
  import firebaseLogo from '../../assets/about/tech-logos/firebase-icon.svg';

  import tensorflowLogo from '../../assets/about/tech-logos/tensorflow-icon.svg';

  import dockerLogo from '../../assets/about/tech-logos/docker-svgrepo-com.svg';
  import viteLogo from '../../assets/about/tech-logos/vite.svg';
  
</script>

<div class="relative isolate overflow-hidden bg-transparent py-16 md:py-32 section" id="skills">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    
    <div class="text-center mb-16 space-y-4">
      <h2 class="text-4xl md:text-5xl font-black text-zinc-900 uppercase tracking-tighter relative inline-block">
        Technical Arsenal
        <span class="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-sky-500 rounded-full"></span>
      </h2>
      <p class="text-zinc-500 max-w-md mx-auto pt-4 text-sm sm:text-base font-medium">
        My preferred weapons of choice for building scalable solutions.
      </p>
    </div>

    <div class="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
      
      <!-- Card 1: Frontend -->
      <div class="bg-white border border-zinc-200 shadow-md backdrop-blur-md rounded-3xl p-8 hover:border-sky-500/20 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col items-center justify-between text-center min-h-[320px] w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] xl:w-[calc(20%-20px)] min-w-[240px]">
        <h3 class="font-bold text-zinc-900 text-lg tracking-wide mb-6">Frontend</h3>
        <div class="grid grid-cols-2 gap-4 mb-6">
          <div class="w-14 h-14 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-center p-2.5 transition-transform duration-300 hover:scale-105" title="Next.js">
            <img src={nextjsLogo.src} alt="Next.js" class="w-full h-full object-contain" />
          </div>
          <div class="w-14 h-14 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-center p-2.5 transition-transform duration-300 hover:scale-105" title="SvelteKit">
            <img src={svelteKitLogo.src} alt="SvelteKit" class="w-full h-full object-contain" />
          </div>
          <div class="w-14 h-14 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-center p-2.5 transition-transform duration-300 hover:scale-105" title="Tailwind">
            <img src={tailwindLogo.src} alt="Tailwind" class="w-full h-full object-contain" />
          </div>
          <div class="w-14 h-14 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-center p-2.5 transition-transform duration-300 hover:scale-105" title="TypeScript">
            <img src={typescriptLogo.src} alt="TypeScript" class="w-full h-full object-contain" />
          </div>
        </div>
        <p class="text-xs text-zinc-400 font-bold tracking-wide mt-auto">Next.js, SvelteKit, Tailwind, TypeScript</p>
      </div>

      <!-- Card 2: Backend -->
      <div class="bg-white border border-zinc-200 shadow-md backdrop-blur-md rounded-3xl p-8 hover:border-sky-500/20 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col items-center justify-between text-center min-h-[320px] w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] xl:w-[calc(20%-20px)] min-w-[240px]">
        <h3 class="font-bold text-zinc-900 text-lg tracking-wide mb-6">Backend</h3>
        <div class="grid grid-cols-2 gap-4 mb-6">
          <div class="w-14 h-14 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-center p-2.5 transition-transform duration-300 hover:scale-105" title="Node.js">
            <img src={nodejsLogo.src} alt="Node.js" class="w-full h-full object-contain" />
          </div>
          <div class="w-14 h-14 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-center p-2.5 transition-transform duration-300 hover:scale-105" title="PostgreSQL">
            <img src={postgresqlLogo.src} alt="PostgreSQL" class="w-full h-full object-contain" />
          </div>
          <div class="col-span-2 flex justify-center">
            <div class="w-14 h-14 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-center p-2.5 transition-transform duration-300 hover:scale-105" title="Supabase">
              <img src={supabaseLogo.src} alt="Supabase" class="w-full h-full object-contain" />
            </div>
          </div>
        </div>
        <p class="text-xs text-zinc-400 font-bold tracking-wide mt-auto">Node.js, PostgreSQL, Supabase</p>
      </div>

      <!-- Card 3: Mobile -->
      <div class="bg-white border border-zinc-200 shadow-md backdrop-blur-md rounded-3xl p-8 hover:border-sky-500/20 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col items-center justify-between text-center min-h-[320px] w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] xl:w-[calc(20%-20px)] min-w-[240px]">
        <h3 class="font-bold text-zinc-900 text-lg tracking-wide mb-6">Mobile</h3>
        <div class="grid grid-cols-2 gap-4 mb-6">
          <div class="w-14 h-14 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-center p-2.5 transition-transform duration-300 hover:scale-105" title="Flutter">
            <img src={flutterLogo.src} alt="Flutter" class="w-full h-full object-contain" />
          </div>
          <div class="w-14 h-14 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-center p-2.5 transition-transform duration-300 hover:scale-105" title="Kotlin">
            <img src={kotlinLogo.src} alt="Kotlin" class="w-full h-full object-contain" />
          </div>
          <div class="col-span-2 flex justify-center">
            <div class="w-14 h-14 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-center p-2.5 transition-transform duration-300 hover:scale-105" title="Firebase">
              <img src={firebaseLogo.src} alt="Firebase" class="w-full h-full object-contain" />
            </div>
          </div>
        </div>
        <p class="text-xs text-zinc-400 font-bold tracking-wide mt-auto">Flutter, Kotlin, Firebase</p>
      </div>

      <!-- Card 4: AI -->
      <div class="bg-white border border-zinc-200 shadow-md backdrop-blur-md rounded-3xl p-8 hover:border-sky-500/20 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col items-center justify-between text-center min-h-[320px] w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] xl:w-[calc(20%-20px)] min-w-[240px]">
        <h3 class="font-bold text-zinc-900 text-lg tracking-wide mb-6">AI</h3>
        <div class="grid grid-cols-2 gap-4 mb-6">
          <div class="w-14 h-14 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-center p-2.5 transition-transform duration-300 hover:scale-105" title="TensorFlow">
            <img src={tensorflowLogo.src} alt="TensorFlow" class="w-full h-full object-contain" />
          </div>
          <div class="w-14 h-14 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-center p-2.5 transition-transform duration-300 hover:scale-105" title="NLP/Vision">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-7 h-7 text-sky-500">
              <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-4.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2z"/>
              <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-4.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2z"/>
            </svg>
          </div>
        </div>
        <p class="text-xs text-zinc-400 font-bold tracking-wide mt-auto">TensorFlow, NLP/Vision</p>
      </div>

      <!-- Card 5: Tools -->
      <div class="bg-white border border-zinc-200 shadow-md backdrop-blur-md rounded-3xl p-8 hover:border-sky-500/20 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col items-center justify-between text-center min-h-[320px] w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] xl:w-[calc(20%-20px)] min-w-[240px]">
        <h3 class="font-bold text-zinc-900 text-lg tracking-wide mb-6">Tools</h3>
        <div class="grid grid-cols-2 gap-4 mb-6">
          <div class="w-14 h-14 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-center p-2.5 transition-transform duration-300 hover:scale-105" title="Docker">
            <img src={dockerLogo.src} alt="Docker" class="w-full h-full object-contain" />
          </div>
          <div class="w-14 h-14 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-center p-2.5 transition-transform duration-300 hover:scale-105" title="Vite">
            <img src={viteLogo.src} alt="Vite" class="w-full h-full object-contain" />
          </div>
          <div class="col-span-2 flex justify-center">
            <div class="w-14 h-14 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-center p-2.5 transition-transform duration-300 hover:scale-105" title="Git">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-7 h-7 text-[#F05032]">
                <circle cx="18" cy="18" r="3" />
                <circle cx="6" cy="6" r="3" />
                <circle cx="6" cy="18" r="3" />
                <path d="M18 15V9a4 4 0 0 0-4-4H9" />
                <path d="M6 9v6" />
              </svg>
            </div>
          </div>
        </div>
        <p class="text-xs text-zinc-400 font-bold tracking-wide mt-auto">Docker, Vite, Git</p>
      </div>

    </div>
  </div>
</div>