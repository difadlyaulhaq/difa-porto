<script lang="ts">
  import { slide } from "svelte/transition";

  interface Learning {
    title: string;
    description: string;
    date: string;
  }

  const learnings: Learning[] = [
  {
    title: "flutter + bloc architecture",
    description:
      "using bloc for state management in multiple production-grade apps including Inventarya and AEDP. solid and scalable.",
    date: "2025-04",
  },
  {
    title: "firebase integration",
    description:
      "used firebase auth, firestore, and storage to build full-featured mobile apps with real-time syncing.",
    date: "2025-04",
  },
  {
    title: "multi-language content & i18n",
    description:
      "implemented dynamic translation system for subject names and content using the translator package in flutter.",
    date: "2025-03",
  },
  {
    title: "sveltekit & web dev",
    description:
      "explored sveltekit for fast static site generation. enjoyed the developer experience and simplicity compared to react.",
    date: "2025-02",
  },
  {
    title: "wound classification ml model",
    description:
      "developed image classification model for identifying wound types using tensorflow. deployed in kotlin-based app.",
    date: "2025-01",
  },
  {
    title: "nlp for content moderation",
    description:
      "built prototype system to detect and help take down illegal gambling websites using keyword-based NLP.",
    date: "2024-12",
  },
  {
    title: "tensorflow deployment",
    description:
      "experimented with tflite model deployment on android devices as part of the wound identification project.",
    date: "2024-11",
  },
  {
    title: "flutter firebase crud",
    description:
      "built full firebase CRUD functionality with custom roles (teacher, student, parent) in education apps.",
    date: "2024-10",
  },
  {
    title: "go_router in flutter",
    description:
      "replaced legacy navigation with declarative navigation using go_router, simplifying auth-based routing.",
    date: "2024-09",
  },
  {
    title: "deep learning specialization",
    description:
      "completed the deeplearning.ai specialization on coursera with strong focus on model training and best practices.",
    date: "2024-06",
  },
  {
    title: "machine learning + nlp",
    description:
      "finished nlp and ml specialization. loved the hands-on approach with attention, rnn, and transformers.",
    date: "2024-05",
  }
];


  function formatDate(date: string) {
    return new Date(date)
      .toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      })
      .toLowerCase();
  }

  let showAll = false;

  $: shownLearnings = showAll ? learnings : [...learnings].slice(0, 3);
</script>

<div class="relative isolate overflow-hidden bg-background">
  <div class="mx-auto max-w-5xl px-6 lg:px-8">
    <div id="learning" class="py-16 md:py-32 section">
      <div class="max-w-2xl">
        <h1
          class="text-4xl font-bold tracking-tight text-base-800 dark:text-base-100 sm:text-5xl"
        >
          always keep learning
        </h1>
        <p class="mt-6 text-base text-base-600 dark:text-base-400">
          one of the things i love most about programming is that there's always
          something new to learn. here's a selection of some of the things i've
          been learning lately:
        </p>
      </div>
      <div
        class="mt-16 md:border-l md:border-base-100 md:pl-6 md:dark:border-base-700/40"
      >
        <div class="flex max-w-3xl flex-col space-y-16">
          {#each shownLearnings as learning}
            <article
              transition:slide
              class="md:grid md:grid-cols-4 md:items-baseline"
            >
              <div
                class="group relative flex flex-col items-start md:col-span-3"
              >
                <div
                  class="text-base font-semibold tracking-tight text-base-800 dark:text-base-100"
                >
                  {learning.title}
                </div>
                <div
                  class="relative z-10 order-first mb-3 flex items-center text-sm text-base-400 dark:text-base-500 pl-3.5 mt-1 md:hidden"
                >
                  <span
                    class="absolute inset-y-0 left-0 flex items-center"
                    aria-hidden="true"
                  >
                    <span
                      class="h-4 w-0.5 rounded-full bg-base-200 dark:bg-base-500"
                    />
                  </span>
                  {formatDate(learning.date)}
                </div>

                <p
                  class="relative z-10 mt-2 text-sm text-base-600 dark:text-base-400"
                >
                  {learning.description}
                </p>
              </div>
              <div
                class="relative z-10 order-first mb-3 items-center text-sm text-base-400 dark:text-base-500 mt-1 hidden md:block"
              >
                {formatDate(learning.date)}
              </div>
            </article>
          {/each}

          {#if !showAll}
            <div class="justify-center flex">
              <button
                on:click={() => (showAll = true)}
                type="button"
                class="group flex items-center rounded-full mr-4 bg-white/90 px-4 py-2 text-sm font-medium text-base-800 shadow-lg shadow-base-800/5 ring-1 ring-base-900/5 backdrop-blur dark:bg-white/5 dark:text-base-200 dark:ring-white/10 dark:hover:ring-white/20"
                aria-label="Update dimensions"
              >
                show more

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="ml-2 h-auto w-4 stroke-base-500 group-hover:stroke-base-700 dark:group-hover:stroke-base-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
