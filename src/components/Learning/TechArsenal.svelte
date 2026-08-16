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

<div class="relative isolate overflow-hidden bg-[#09090b] text-white py-24 md:py-32 border-t border-zinc-900" id="skills">
  <!-- Subtle glowing accents -->
  <div class="absolute top-0 left-1/4 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
  <div class="absolute bottom-0 right-1/4 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
    
  <div class="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
    
    <div class="text-center mb-20 space-y-4">
      <h2 class="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter relative inline-block">
        Technical Arsenal
        <span class="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white rounded-full"></span>
      </h2>
      <p class="text-zinc-400 max-w-md mx-auto pt-4 text-sm sm:text-base font-medium">
        My preferred weapons of choice for building scalable solutions.
      </p>
    </div>

    <!-- Bento Masonry Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
      
      <!-- Column 1 -->
      <div class="flex flex-col gap-6">
        
        <!-- Front-End Development -->
        <div class="bg-[#131316]/90 border border-zinc-800/60 rounded-[24px] p-7 transition-all duration-300 hover:border-zinc-700/80 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col gap-6">
          <div class="flex flex-wrap gap-3">
            <div class="w-12 h-12 rounded-full bg-zinc-850 border border-zinc-800/80 flex items-center justify-center p-2.5 transition-transform duration-300 hover:scale-110" title="Next.js">
              <img src={nextjsLogo.src} alt="Next.js" class="w-full h-full object-contain" />
            </div>
            <div class="w-12 h-12 rounded-full bg-zinc-850 border border-zinc-800/80 flex items-center justify-center p-2.5 transition-transform duration-300 hover:scale-110" title="SvelteKit">
              <img src={svelteKitLogo.src} alt="SvelteKit" class="w-full h-full object-contain" />
            </div>
            <div class="w-12 h-12 rounded-full bg-zinc-850 border border-zinc-800/80 flex items-center justify-center p-2.5 transition-transform duration-300 hover:scale-110" title="Tailwind CSS">
              <img src={tailwindLogo.src} alt="Tailwind CSS" class="w-full h-full object-contain" />
            </div>
            <div class="w-12 h-12 rounded-full bg-zinc-850 border border-zinc-800/80 flex items-center justify-center p-2.5 transition-transform duration-300 hover:scale-110" title="TypeScript">
              <img src={typescriptLogo.src} alt="TypeScript" class="w-full h-full object-contain" />
            </div>
          </div>
          <div class="space-y-2">
            <h3 class="font-bold text-white text-[18px] tracking-wide">Frontend</h3>
            <p class="text-xs md:text-sm text-zinc-400 leading-relaxed font-medium">Building responsive, modern, and high-performance user interfaces with clean styling and robust typing.</p>
          </div>
        </div>

        <!-- Tools & Workflow -->
        <div class="bg-[#131316]/90 border border-zinc-800/60 rounded-[24px] p-7 transition-all duration-300 hover:border-zinc-700/80 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col gap-6">
          <div class="flex flex-wrap gap-3">
            <div class="w-12 h-12 rounded-full bg-zinc-850 border border-zinc-800/80 flex items-center justify-center p-2.5 transition-transform duration-300 hover:scale-110" title="Docker">
              <img src={dockerLogo.src} alt="Docker" class="w-full h-full object-contain" />
            </div>
            <div class="w-12 h-12 rounded-full bg-zinc-850 border border-zinc-800/80 flex items-center justify-center p-2.5 transition-transform duration-300 hover:scale-110" title="Vite">
              <img src={viteLogo.src} alt="Vite" class="w-full h-full object-contain" />
            </div>
            <div class="w-12 h-12 rounded-full bg-zinc-850 border border-zinc-800/80 flex items-center justify-center p-2.5 transition-transform duration-300 hover:scale-110" title="Git">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-[#F05032]">
                <circle cx="18" cy="18" r="3" />
                <circle cx="6" cy="6" r="3" />
                <circle cx="6" cy="18" r="3" />
                <path d="M18 15V9a4 4 0 0 0-4-4H9" />
                <path d="M6 9v6" />
              </svg>
            </div>
          </div>
          <div class="space-y-2">
            <h3 class="font-bold text-white text-[18px] tracking-wide">Tools & Workflow</h3>
            <p class="text-xs md:text-sm text-zinc-400 leading-relaxed font-medium">Streamlining local development, environment containerization, and version control for reliable collaboration.</p>
          </div>
        </div>

      </div>

      <!-- Column 2 -->
      <div class="flex flex-col gap-6">
        
        <!-- Back-End Development -->
        <div class="bg-[#131316]/90 border border-zinc-800/60 rounded-[24px] p-7 transition-all duration-300 hover:border-zinc-700/80 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col gap-6">
          <div class="flex flex-wrap gap-3">
            <div class="w-12 h-12 rounded-full bg-zinc-850 border border-zinc-800/80 flex items-center justify-center p-2.5 transition-transform duration-300 hover:scale-110" title="Node.js">
              <img src={nodejsLogo.src} alt="Node.js" class="w-full h-full object-contain" />
            </div>
            <div class="w-12 h-12 rounded-full bg-zinc-850 border border-zinc-800/80 flex items-center justify-center p-2.5 transition-transform duration-300 hover:scale-110" title="PostgreSQL">
              <img src={postgresqlLogo.src} alt="PostgreSQL" class="w-full h-full object-contain" />
            </div>
            <div class="w-12 h-12 rounded-full bg-zinc-850 border border-zinc-800/80 flex items-center justify-center p-2.5 transition-transform duration-300 hover:scale-110" title="Supabase">
              <img src={supabaseLogo.src} alt="Supabase" class="w-full h-full object-contain" />
            </div>
            <div class="w-12 h-12 rounded-full bg-zinc-850 border border-zinc-800/80 flex items-center justify-center p-2.5 transition-transform duration-300 hover:scale-110" title="C++">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" class="w-full h-full object-contain" />
            </div>
          </div>
          <div class="space-y-2">
            <h3 class="font-bold text-white text-[18px] tracking-wide">Backend</h3>
            <p class="text-xs md:text-sm text-zinc-400 leading-relaxed font-medium">Designing secure, scalable server architectures, database structures, and efficient backend services.</p>
          </div>
        </div>

        <!-- AI & Machine Learning -->
        <div class="bg-[#131316]/90 border border-zinc-800/60 rounded-[24px] p-7 transition-all duration-300 hover:border-zinc-700/80 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col gap-6">
          <div class="flex flex-wrap gap-3">
            <div class="w-12 h-12 rounded-full bg-zinc-850 border border-zinc-800/80 flex items-center justify-center p-2.5 transition-transform duration-300 hover:scale-110" title="TensorFlow">
              <img src={tensorflowLogo.src} alt="TensorFlow" class="w-full h-full object-contain" />
            </div>
            <div class="w-12 h-12 rounded-full bg-zinc-850 border border-zinc-800/80 flex items-center justify-center p-2.5 transition-transform duration-300 hover:scale-110" title="NLP/Vision">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-sky-500">
                <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-4.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2z"/>
                <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-4.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2z"/>
              </svg>
            </div>
            <div class="w-12 h-12 rounded-full bg-zinc-850 border border-zinc-800/80 flex items-center justify-center p-2.5 transition-transform duration-300 hover:scale-110" title="Python">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" class="w-full h-full object-contain" />
            </div>
            <div class="w-12 h-12 rounded-full bg-zinc-850 border border-zinc-800/80 flex items-center justify-center p-2.5 transition-transform duration-300 hover:scale-110" title="Google Gemini">
              <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-sky-400">
                <path d="M12 2a1 1 0 0 0-1 1v5.5a1.5 1.5 0 0 1-1.5 1.5H4a1 1 0 0 0 0 2h5.5A1.5 1.5 0 0 1 11 13.5V19a1 1 0 0 0 2 0v-5.5a1.5 1.5 0 0 1 1.5-1.5H20a1 1 0 0 0 0-2h-5.5A1.5 1.5 0 0 1 13 8.5V3a1 1 0 0 0-1-1z"/>
              </svg>
            </div>
          </div>
          <div class="space-y-2">
            <h3 class="font-bold text-white text-[18px] tracking-wide">AI</h3>
            <p class="text-xs md:text-sm text-zinc-400 leading-relaxed font-medium">Creating and implementing deep learning, natural language processing, and generative AI models for real-world solutions.</p>
          </div>
        </div>

      </div>

      <!-- Column 3 -->
      <div class="flex flex-col gap-6">
        
        <!-- Mobile App Development -->
        <div class="bg-[#131316]/90 border border-zinc-800/60 rounded-[24px] p-7 transition-all duration-300 hover:border-zinc-700/80 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col gap-6">
          <div class="flex flex-wrap gap-3">
            <div class="w-12 h-12 rounded-full bg-zinc-850 border border-zinc-800/80 flex items-center justify-center p-2.5 transition-transform duration-300 hover:scale-110" title="Flutter">
              <img src={flutterLogo.src} alt="Flutter" class="w-full h-full object-contain" />
            </div>
            <div class="w-12 h-12 rounded-full bg-zinc-850 border border-zinc-800/80 flex items-center justify-center p-2.5 transition-transform duration-300 hover:scale-110" title="Kotlin">
              <img src={kotlinLogo.src} alt="Kotlin" class="w-full h-full object-contain" />
            </div>
            <div class="w-12 h-12 rounded-full bg-zinc-850 border border-zinc-800/80 flex items-center justify-center p-2.5 transition-transform duration-300 hover:scale-110" title="Firebase">
              <img src={firebaseLogo.src} alt="Firebase" class="w-full h-full object-contain" />
            </div>
            <div class="w-12 h-12 rounded-full bg-zinc-850 border border-zinc-800/80 flex items-center justify-center p-2.5 transition-transform duration-300 hover:scale-110" title="Dart">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" alt="Dart" class="w-full h-full object-contain" />
            </div>
          </div>
          <div class="space-y-2">
            <h3 class="font-bold text-white text-[18px] tracking-wide">Mobile</h3>
            <p class="text-xs md:text-sm text-zinc-400 leading-relaxed font-medium">Developing smooth cross-platform and native mobile applications with elegant UI and real-time database support.</p>
          </div>
        </div>

      </div>

    </div>
  </div>
</div>

<style>
  /* Custom utility classes */
  .bg-zinc-850 {
    background-color: #1a1a1e;
  }
</style>