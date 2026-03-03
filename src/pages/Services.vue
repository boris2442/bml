<template>
  <main class="font-medium tracking-tight bg-[var(--background)]">
    <!-- <section
      class="relative pt-32 pb-20 overflow-hidden border-b border-[var(--border)]"
    >
      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="space-y-8">
          <div
            class="inline-flex items-center gap-3 px-3 py-1 border border-[var(--primary)]/30 rounded-full w-fit"
          >
            <span
              class="w-1.5 h-1.5 bg-[var(--primary)] rounded-full animate-pulse"
            ></span>
            <span
              class="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--primary)]"
              >Expertise Technique</span
            >
          </div>

          <h1
            class="text-5xl md:text-8xl font-medium tracking-tighter text-[var(--text-main)] leading-[0.95]"
          >
            Services <br />
            <span class="text-[var(--primary)] text-outline">sur Mesure.</span>
          </h1>

          <p
            class="text-sm md:text-base text-[var(--text-muted)] max-w-xl leading-relaxed font-light"
          >
            Architectures scalables et solutions digitales de haute précision,
            alignées sur vos impératifs business. De la modélisation à la mise
            en production.
          </p>
        </div>
      </div>
    </section> -->

    <!-- <section
      class="relative pt-32 pb-20 overflow-hidden border-b border-[var(--border)] bg-[var(--background)]"
    >
      <div
        class="absolute top-0 right-0 w-1/2 h-full hidden lg:block pointer-events-none overflow-hidden"
      >
        <div class="relative w-full h-full flex items-center justify-center">
          <div
            class="absolute right-[-10%] top-1/2 -translate-y-1/2 text-[20vw] font-black leading-none uppercase text-outline opacity-[0.03] select-none italic"
          >
            DASH
          </div>

          <div class="relative z-10 w-full max-w-md space-y-12 pr-10">
            <div
              class="flex flex-col items-end animate-fade-in"
              style="animation-delay: 200ms"
            >
              <span
                class="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--primary)] mb-2"
                >System.Performance</span
              >
              <div
                class="text-7xl font-black tracking-tighter text-[var(--text-main)] opacity-20 italic"
              >
                99.9%
              </div>
              <div
                class="w-full h-px bg-gradient-to-r from-transparent via-[var(--border)] to-[var(--primary)]/30 mt-2"
              ></div>
            </div>

            <div
              class="flex flex-col items-end animate-fade-in"
              style="animation-delay: 400ms"
            >
              <span
                class="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-main)] mb-2"
                >Network.Latency</span
              >
              <div
                class="text-7xl font-black tracking-tighter text-[var(--primary)] opacity-40 italic"
              >
                12ms
              </div>
              <div class="flex gap-1 mt-2">
                <div
                  v-for="i in 5"
                  :key="i"
                  class="w-6 h-1 bg-[var(--primary)]/20"
                  :class="{ 'bg-[var(--primary)]': i < 4 }"
                ></div>
              </div>
            </div>

            <div
              class="flex flex-col items-end animate-fade-in"
              style="animation-delay: 600ms"
            >
              <span
                class="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-main)] mb-2"
                >Status.Core_Engine</span
              >
              <div
                class="text-4xl font-black tracking-tighter text-[var(--text-main)] opacity-20 uppercase"
              >
                Operational
              </div>
            </div>
          </div>

          <svg
            class="absolute inset-0 w-full h-full opacity-[0.05]"
            viewBox="0 0 400 400"
          >
            <rect
              x="250"
              y="50"
              width="80"
              height="100"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
            />
            <rect
              x="100"
              y="250"
              width="80"
              height="60"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
            />
            <path
              d="M 180 280 L 250 100"
              stroke="currentColor"
              stroke-width="1"
              stroke-dasharray="5,5"
            />
          </svg>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 relative z-20">
        <div class="space-y-8">
          <div
            class="inline-flex items-center gap-3 px-3 py-1 border border-[var(--primary)]/30 rounded-full w-fit bg-[var(--background)]"
          >
            <span
              class="w-1.5 h-1.5 bg-[var(--primary)] rounded-full animate-pulse"
            ></span>
            <span
              class="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--primary)]"
              >Expertise Technique</span
            >
          </div>

          <h1
            class="text-6xl md:text-8xl font-medium tracking-tighter text-[var(--text-main)] leading-[0.95]"
          >
            Services <br />
            <span class="text-[var(--primary)] text-outline">sur Mesure.</span>
          </h1>

          <p
            class="text-sm md:text-base text-[var(--text-muted)] max-w-xl leading-relaxed font-light"
          >
            Architectures scalables et solutions digitales de haute précision,
            alignées sur vos impératifs business. De la modélisation à la mise
            en production.
          </p>
        </div>
      </div>
    </section> -->

    <section
      class="relative pt-32 pb-20 overflow-hidden border-b border-[var(--border)] bg-[var(--background)]"
    >
      <div class="absolute inset-0 pointer-events-none select-none">
        <div
          class="absolute -right-20 top-1/4 text-[40vw] lg:text-[20vw] font-black uppercase text-outline opacity-[0.03] italic leading-none"
        >
          DASH
        </div>

        <div
          class="absolute inset-0 flex flex-col justify-around items-end pr-4 lg:pr-20 opacity-[0.07] lg:opacity-100"
        >
          <div
            class="flex flex-col items-end transform lg:translate-y-0 -translate-y-10"
          >
            <div
              class="text-8xl lg:text-7xl font-black tracking-tighter text-[var(--text-main)] italic"
            >
              99.9
            </div>
            <span
              class="text-[8px] font-black uppercase tracking-[0.4em] text-[var(--primary)]"
              >System.Perf</span
            >
          </div>

          <div
            class="flex flex-col items-end transform translate-x-10 lg:translate-x-0"
          >
            <div
              class="text-8xl lg:text-7xl font-black tracking-tighter text-[var(--primary)] italic"
            >
              12ms
            </div>
            <span
              class="text-[8px] font-black uppercase tracking-[0.4em] text-[var(--text-main)]"
              >Net.Latency</span
            >
          </div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="space-y-8">
          <div
            class="inline-flex items-center gap-3 px-3 py-1 border border-[var(--primary)]/30 rounded-full w-fit bg-[var(--background)]/80 backdrop-blur-sm"
          >
            <span
              class="w-1.5 h-1.5 bg-[var(--primary)] rounded-full animate-pulse"
            ></span>
            <span
              class="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--primary)]"
              >Expertise Technique</span
            >
          </div>

          <h1
            class="text-6xl md:text-8xl font-medium tracking-tighter text-[var(--text-main)] leading-[0.95]"
          >
            Services <br />
            <span class="text-[var(--primary)] text-outline">sur Mesure.</span>
          </h1>

          <p
            class="text-sm md:text-base text-[var(--text-muted)] max-w-xl leading-relaxed font-light"
          >
            Architectures scalables et solutions digitales de haute précision,
            alignées sur vos impératifs business. De la modélisation à la mise
            en production.
          </p>
        </div>
      </div>
    </section>

    <section class="py-24">
      <div class="max-w-7xl mx-auto px-4">
        <div class="space-y-32">
          <div
            v-for="(service, idx) in mainServices"
            :key="idx"
            class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start"
          >
            <div class="space-y-10">
              <div class="flex items-center gap-4">
                <component
                  :is="service.iconComponent"
                  :size="32"
                  stroke-width="1"
                  class="text-[var(--primary)]"
                />
                <span class="text-[40px] font-light opacity-10 font-mono italic"
                  >0{{ idx + 1 }}</span
                >
              </div>

              <div class="space-y-4">
                <h2
                  class="text-3xl md:text-5xl font-medium tracking-tighter text-[var(--text-main)]"
                >
                  {{ service.title }}
                </h2>
                <p
                  class="text-sm text-[var(--text-muted)] leading-relaxed max-w-lg"
                >
                  {{ service.intro }}
                </p>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-4">
                <div class="space-y-4">
                  <h3
                    class="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-main)]"
                  >
                    Livrables
                  </h3>
                  <ul class="space-y-2">
                    <li
                      v-for="item in service.deliverables"
                      :key="item"
                      class="text-[11px] text-[var(--text-muted)] flex items-center gap-2"
                    >
                      <span
                        class="w-1 h-1 bg-[var(--primary)]/40 rounded-full"
                      ></span>
                      {{ item }}
                    </li>
                  </ul>
                </div>
                <div class="space-y-4">
                  <h3
                    class="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-main)]"
                  >
                    Stack
                  </h3>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tech in service.technologies"
                      :key="tech"
                      class="px-2 py-1 border border-[var(--border)] text-[9px] uppercase tracking-widest text-[var(--text-muted)] rounded"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="relative p-8 border border-[var(--border)] rounded-3xl bg-[var(--primary)]/5 aspect-video flex flex-col justify-end overflow-hidden group"
            >
              <div
                class="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none italic font-black text-9xl -translate-x-10 -translate-y-10"
              >
                {{ service.title.split(" ")[0] }}
              </div>
              <div class="grid grid-cols-2 gap-4 relative z-10">
                <div
                  v-for="metric in service.metrics"
                  :key="metric.label"
                  class="p-4 border border-white/10 backdrop-blur-md rounded-xl"
                >
                  <p
                    class="text-[9px] uppercase tracking-widest text-[var(--text-muted)] mb-1"
                  >
                    {{ metric.label }}
                  </p>
                  <p class="text-xl font-bold text-[var(--primary)]">
                    {{ metric.value }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="py-24 border-y border-[var(--border)] bg-[var(--primary)]/[0.02]"
    >
      <div class="max-w-7xl mx-auto px-4">
        <h2
          class="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--primary)] mb-16 text-center italic"
        >
          Workflow / {{ new Date().getFullYear() }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div
            v-for="(step, idx) in processSteps"
            :key="idx"
            class="space-y-4 relative"
          >
            <span class="text-4xl font-light text-[var(--primary)] opacity-20"
              >0{{ idx + 1 }}</span
            >
            <h3
              class="text-sm font-black uppercase tracking-widest text-[var(--text-main)]"
            >
              {{ step.title }}
            </h3>
            <p class="text-[11px] text-[var(--text-muted)] leading-relaxed">
              {{ step.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24">
      <div class="max-w-7xl mx-auto px-4">
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[var(--border)] rounded-[40px] overflow-hidden"
        >
          <div
            v-for="(pkg, idx) in packages"
            :key="idx"
            class="p-12 border-r last:border-r-0 border-[var(--border)] hover:bg-[var(--primary)]/5 transition-colors duration-500 group"
          >
            <h3
              class="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--primary)] mb-6 italic"
            >
              {{ pkg.name }}
            </h3>
            <div class="mb-8">
              <span
                class="text-3xl font-medium tracking-tighter text-[var(--text-main)]"
                >{{ pkg.startPrice }}</span
              >
              <p class="text-[11px] text-[var(--text-muted)] mt-2">
                {{ pkg.desc }}
              </p>
            </div>
            <ul class="space-y-4 mb-12">
              <li
                v-for="f in pkg.features"
                :key="f"
                class="text-[11px] text-[var(--text-muted)] flex items-center gap-3"
              >
                <Check :size="12" class="text-[var(--primary)]" /> {{ f }}
              </li>
            </ul>
            <button
              class="w-full py-4 border border-[var(--text-main)] text-[10px] font-black uppercase tracking-widest group-hover:bg-[var(--text-main)] group-hover:text-[var(--background)] transition-all"
            >
              Commander
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import {
  Globe,
  Smartphone,
  Cloud,
  ShieldCheck,
  Check,
  ArrowRight,
} from "lucide-vue-next";

const mainServices = [
  {
    iconComponent: Globe,
    title: "Web Engineering",
    intro:
      "Applications haute performance avec focus sur l'architecture Merise/UML et la scalabilité Laravel/Vue.",
    deliverables: [
      "Audit Architecture",
      "Frontend (Vue/Inertia)",
      "API RESTful",
    ],
    technologies: ["Laravel", "Inertia.js", "Vue.js", "Tailwind"],
    metrics: [
      { label: "Core Web Vitals", value: "99/100" },
      { label: "SEO Score", value: "A+" },
    ],
  },
  {
    iconComponent: Smartphone,
    title: "Mobile Solutions",
    intro:
      "Développement cross-platform optimisé pour l'engagement utilisateur et la fluidité native.",
    deliverables: ["UI Mobile-First", "iOS & Android", "Offline Sync"],
    technologies: ["Flutter", "React Native", "Firebase"],
    metrics: [
      { label: "Crash Rate", value: "< 0.01%" },
      { label: "Performance", value: "60 FPS" },
    ],
  },
  {
    iconComponent: Cloud,
    title: "DevOps & Cloud",
    intro:
      "Automatisation et déploiement continu. Infrastructure as Code pour une fiabilité totale.",
    deliverables: ["CI/CD Pipelines", "Dockerization", "Cloud Security"],
    technologies: ["Docker", "AWS", "Terraform", "GitHub Actions"],
    metrics: [
      { label: "Uptime", value: "99.99%" },
      { label: "Deploy Time", value: "5 min" },
    ],
  },
];

const processSteps = [
  {
    title: "Modélisation",
    desc: "UML, Merise et schématisation de la base de données avant toute ligne de code.",
  },
  {
    title: "Design System",
    desc: "Création d'une identité visuelle cohérente et minimaliste.",
  },
  {
    title: "Sprints",
    desc: "Développement agile avec revues de code hebdomadaires.",
  },
  {
    title: "Staging",
    desc: "Tests rigoureux en environnement de pré-production.",
  },
];

const packages = [
  {
    name: "Starter",
    startPrice: "5.000 €",
    desc: "Pour MVP et prototypes",
    features: ["1-2 mois de dev", "UI Standard", "3 mois support"],
  },
  {
    name: "Pro",
    startPrice: "15.000 €",
    desc: "Pour entreprises en croissance",
    features: ["3-6 mois de dev", "Architecture Custom", "1 an support"],
  },
  {
    name: "Enterprise",
    startPrice: "50.000 €",
    desc: "Solutions complexes",
    features: ["6+ mois de dev", "Microservices", "Support 24/7"],
  },
];
</script>
