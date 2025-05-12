  <script lang="ts">
  import { slide } from "svelte/transition";

  interface Learning {
    title: string;
    description: string;
    date: string;
  }

const learnings: Learning[] = [
  {
    title: "Store Listing on Google Play",
    description:
      "Created a store listing for the app on Google Play. Included screenshots, descriptions, and other details.",
    date: "2024-01",
  },
  {
    title: "Flutter & Dart",
    description:
      "Built several mobile apps using Flutter and Dart for Android.",
    date: "2022-02",
  },
  {
    title: "GoRouter in Flutter",
    description:
      "Replaced legacy navigation with declarative navigation using GoRouter, simplifying auth-based routing.",
    date: "2024-03",
  },
  {
    title: "Flutter + BLoC Architecture",
    description:
      "Used BLoC for state management in multiple production-grade apps including Inventarya and AEDP. Solid and scalable.",
    date: "2024-04",
  },
  {
    title: "Firebase Integration",
    description:
      "Used Firebase Auth, Firestore, and Storage to build full-featured mobile apps with real-time syncing.",
    date: "2024-04",
  },
  {
    title: "Multi-language Content & i18n",
    description:
      "Implemented a dynamic translation system for subject names and content using the translator package in Flutter.",
    date: "2024-05",
  },
  {
    title: "Flutter Payments Gateway Integration",
    description:
      "Integrated payment gateway for in-app purchases and subscriptions using Flutter's in_app_purchase package.",
    date: "2025-05",
  },
  {
    title: "Flutter Bitcoin Wallet Integration",
    description:
      "Integrated Bitcoin wallet functionality using Flutter's bitcoin package for secure transactions.",
    date: "2025-05",
  },
  {
    title: "SvelteKit & Web Development",
    description:
      "Explored SvelteKit for fast static site generation. Enjoyed the developer experience and simplicity compared to React.",
    date: "2025-02",
  },
  {
    title: "Wound Classification ML Model",
    description:
      "Developed an image classification model for identifying wound types using TensorFlow. Deployed in a Kotlin-based app.",
    date: "2024-11",
  },
  {
    title: "NLP for Content Moderation",
    description:
      "Built a prototype system to detect and help take down illegal gambling websites using keyword-based NLP.",
    date: "2025-01",
  },
  {
    title: "TensorFlow Deployment",
    description:
      "Experimented with TFLite model deployment on Android devices as part of the wound identification project.",
    date: "2024-10",
  },
  {
    title: "Deep Learning Specialization",
    description:
      "Completed the DeepLearning.AI specialization on Coursera with a strong focus on model training and best practices.",
    date: "2024-06",
  },
  {
    title: "Machine Learning Specialization",
    description:
      "Finished NLP and ML specializations. Enjoyed the hands-on approach with Attention, RNN, and Transformers.",
    date: "2024-05",
  }
];


  function formatDate(date: string) {
    return new Date(date)
      .toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      })
      // .toLowerCase();
  }

  let showAll = false;

  $: sortedLearnings = [...learnings].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  $: shownLearnings = showAll ? sortedLearnings : sortedLearnings.slice(0, 3);
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
