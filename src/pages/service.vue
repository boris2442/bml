<template>
  <main>
    <!-- Header Section -->
    <section
      class="relative bg-secondary-900 dark:bg-secondary-950 text-white py-12 md:py-16 overflow-hidden"
    >
      <!-- Animated background elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="absolute top-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float"
        ></div>
        <div
          class="absolute bottom-0 left-1/3 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-float"
          style="animation-delay: 1s"
        ></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="space-y-6 animate-fade-in-up">
          <div
            class="inline-flex items-center gap-3 px-4 py-2 bg-primary-500/20 dark:bg-primary-500/30 rounded-full w-fit border border-primary-500/30"
          >
            <span
              class="w-2 h-2 bg-primary-500 rounded-full animate-pulse"
            ></span>
            <span class="text-sm font-semibold text-primary-300"
              >Expertise Reconnue</span
            >
          </div>
          <h1
            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight"
          >
            Services sur Mesure
          </h1>
          <p class="text-lg text-secondary-200 max-w-2xl leading-relaxed">
            Solutions digitales complètes alignées avec vos objectifs. De la
            stratégie à la livraison.
          </p>
        </div>
      </div>
    </section>

    <!-- Main Services Grid -->
    <section class="py-20 bg-white dark:bg-secondary-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="space-y-12">
          <div
            v-for="(service, idx) in mainServices"
            :key="idx"
            :class="{ 'flex-row-reverse': idx % 2 === 1 }"
            class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in-up"
            :style="{ animationDelay: `${idx * 100}ms` }"
          >
            <!-- Content -->
            <div class="space-y-6">
              <div class="inline-flex items-center gap-3 w-fit">
                <div class="text-4xl">{{ service.icon }}</div>
                <div class="h-8 w-1 bg-primary-500 rounded"></div>
              </div>

              <div class="space-y-4">
                <h2
                  class="text-2xl md:text-3xl lg:text-4xl font-black text-secondary-900 dark:text-white"
                >
                  {{ service.title }}
                </h2>
                <p
                  class="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed"
                >
                  {{ service.intro }}
                </p>
              </div>

              <!-- What We Deliver -->
              <div class="space-y-3">
                <h3
                  class="font-bold text-secondary-900 dark:text-white text-sm uppercase tracking-wide text-primary-600"
                >
                  Nous Livrons
                </h3>
                <ul class="space-y-2">
                  <li
                    v-for="item in service.deliverables"
                    :key="item"
                    class="flex gap-3 items-start"
                  >
                    <span
                      class="text-primary-500 font-bold text-lg flex-shrink-0"
                      >✓</span
                    >
                    <span class="text-secondary-700 dark:text-secondary-300">{{
                      item
                    }}</span>
                  </li>
                </ul>
              </div>

              <!-- Technologies -->
              <div class="space-y-3">
                <h3
                  class="font-bold text-secondary-900 dark:text-white text-sm uppercase tracking-wide text-primary-600"
                >
                  Stack Technologique
                </h3>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in service.technologies"
                    :key="tech"
                    class="px-3 py-1 bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 text-sm font-semibold rounded-full"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <!-- CTA -->
              <button
                class="group mt-6 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-lg transition-all hover-lift inline-flex items-center gap-2"
              >
                Discuter du Projet
                <svg
                  class="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  ></path>
                </svg>
              </button>
            </div>

            <!-- Visual -->
            <div
              class="relative h-80 bg-gradient-to-br rounded-2xl overflow-hidden hover-lift group"
              :class="service.gradientClass"
            >
              <div class="absolute inset-0 flex items-center justify-center">
                <div
                  class="text-9xl opacity-20 group-hover:scale-110 transition-transform duration-300"
                >
                  {{ service.icon }}
                </div>
              </div>
              <!-- Success Metrics Box -->
              <div
                class="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-secondary-900/95 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div class="space-y-3">
                  <div
                    v-for="metric in service.metrics"
                    :key="metric.label"
                    class="flex justify-between items-center"
                  >
                    <span
                      class="text-sm font-semibold text-secondary-600 dark:text-secondary-400"
                      >{{ metric.label }}</span
                    >
                    <span class="text-lg font-black text-primary-500">{{
                      metric.value
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-20 bg-secondary-50 dark:bg-secondary-800">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16 animate-fade-in-up">
          <h2
            class="text-4xl font-black text-secondary-900 dark:text-white mb-4"
          >
            Notre Processus
          </h2>
          <p
            class="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
          >
            Une approche méthodique et collaborative pour garantir votre succès
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div
            v-for="(step, idx) in processSteps"
            :key="idx"
            class="relative animate-fade-in-up"
            :style="{ animationDelay: `${idx * 100}ms` }"
          >
            <!-- Connector Line -->
            <div
              v-if="idx < processSteps.length - 1"
              class="hidden md:block absolute top-12 -right-3 w-6 h-1 bg-primary-500/30"
            ></div>

            <div
              class="bg-white dark:bg-secondary-900 rounded-xl p-6 border-2 border-secondary-200 dark:border-secondary-700 hover:border-primary-500 transition-all hover-lift"
            >
              <div
                class="flex items-center justify-center w-12 h-12 bg-primary-500 text-white font-bold rounded-full mb-4 text-lg"
              >
                {{ idx + 1 }}
              </div>
              <h3
                class="font-bold text-secondary-900 dark:text-white text-lg mb-2"
              >
                {{ step.title }}
              </h3>
              <p
                class="text-secondary-600 dark:text-secondary-400 text-sm leading-relaxed"
              >
                {{ step.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing / Packages -->
    <section class="py-20 bg-white dark:bg-secondary-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16 animate-fade-in-up">
          <h2
            class="text-4xl font-black text-secondary-900 dark:text-white mb-4"
          >
            Modèles d'Engagement
          </h2>
          <p
            class="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
          >
            Flexible. Transparent. Adapté à votre budget et timeline
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(pkg, idx) in packages"
            :key="idx"
            :class="{
              'ring-2 ring-primary-500 transform scale-105': pkg.featured,
            }"
            class="bg-white dark:bg-secondary-800 rounded-2xl border border-secondary-200 dark:border-secondary-700 overflow-hidden hover-lift transition-all animate-fade-in-up"
            :style="{ animationDelay: `${idx * 100}ms` }"
          >
            <div class="p-8 relative">
              <div
                v-if="pkg.featured"
                class="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-bold"
              >
                POPULAIRE
              </div>
              <h3
                class="text-2xl font-black text-secondary-900 dark:text-white mb-2"
              >
                {{ pkg.name }}
              </h3>
              <p
                class="text-secondary-600 dark:text-secondary-400 text-sm mb-6"
              >
                {{ pkg.desc }}
              </p>

              <div
                class="mb-6 pb-6 border-b border-secondary-200 dark:border-secondary-700"
              >
                <div class="text-4xl font-black text-primary-500">
                  À partir de<br /><span
                    class="text-base text-secondary-600 dark:text-secondary-400"
                    >{{ pkg.startPrice }}</span
                  >
                </div>
              </div>

              <ul class="space-y-3 mb-8">
                <li
                  v-for="feature in pkg.features"
                  :key="feature"
                  class="flex gap-3 items-start text-sm text-secondary-700 dark:text-secondary-300"
                >
                  <span class="text-primary-500 font-bold flex-shrink-0"
                    >+</span
                  >
                  <span>{{ feature }}</span>
                </li>
              </ul>

              <button
                :class="
                  pkg.featured
                    ? 'bg-primary-500 hover:bg-primary-600 text-white'
                    : 'border-2 border-secondary-300 dark:border-secondary-600 text-secondary-900 dark:text-white hover:bg-secondary-50 dark:hover:bg-secondary-700'
                "
                class="w-full py-3 font-bold rounded-lg transition-all"
              >
                {{ pkg.featured ? "Demander une Démo" : "En Savoir Plus" }}
              </button>
            </div>
          </div>
        </div>

        <div
          class="mt-12 p-8 bg-secondary-50 dark:bg-secondary-800 rounded-xl text-center"
        >
          <p class="text-secondary-700 dark:text-secondary-300 mb-4">
            Tous les projets commencent par une consultation gratuite
          </p>
          <button
            class="text-primary-600 dark:text-primary-400 font-bold hover:text-primary-700 dark:hover:text-primary-300"
          >
            Planifier aujourd'hui →
          </button>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section
      class="relative py-20 md:py-32 bg-primary-500 dark:bg-primary-700 text-white overflow-hidden"
    >
      <div class="absolute inset-0 opacity-10">
        <div
          class="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        ></div>
        <div
          class="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        ></div>
      </div>

      <div
        class="max-w-4xl mx-auto px-4 text-center relative z-10 animate-fade-in-up"
      >
        <h2 class="text-5xl md:text-5xl font-black mb-6 leading-tight">
          Quel Service Vous Intéresse ?
        </h2>
        <p class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Parlons de vos enjeux digitaux et trouvons la solution idéale
          ensemble.
        </p>
        <router-link
          to="/contact"
          class="group inline-block px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-primary-50 transition-all hover-lift"
        >
          Prendre Rendez-Vous
          <svg
            class="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            ></path>
          </svg>
        </router-link>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";

const mainServices = [
  {
    icon: "🌐",
    title: "Web Development",
    intro:
      "Nous créons des applications web modernes, scalables et performantes. Du MVP au produit enterprise.",
    deliverables: [
      "Design UI/UX professionnel avec prototypage",
      "Frontend responsive (React, Vue, Next.js)",
      "Backend robuste avec microservices",
      "Database architecture optimisée",
      "Déploiement et monitoring en production",
      "Documentation et formation d'équipe",
    ],
    technologies: [
      "React",
      "Vue.js",
      "Next.js",
      "Node.js",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "AWS",
    ],
    metrics: [
      { label: "Temps de Réponse", value: "< 100ms" },
      { label: "Uptime", value: "99.9%" },
      { label: "Performance", value: "A+" },
      { label: "SEO Score", value: "95+" },
    ],
    gradientClass: "from-blue-500/30 to-cyan-500/30",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    intro:
      "Applications mobiles natives et cross-platform qui engage vos utilisateurs et génère du revenue.",
    deliverables: [
      "iOS et Android natifs (Swift, Kotlin)",
      "Cross-platform (React Native, Flutter)",
      "Design mobile-first intuitive",
      "Intégration API et backend",
      "Push notifications et offline mode",
      "AppStore et Google Play deployment",
    ],
    technologies: [
      "Swift",
      "Kotlin",
      "React Native",
      "Flutter",
      "Firebase",
      "Realm",
    ],
    metrics: [
      { label: "App Store Rating", value: "4.8★" },
      { label: "User Retention", value: "+60%" },
      { label: "Crash Rate", value: "< 0.1%" },
      { label: "Install Size", value: "< 50MB" },
    ],
    gradientClass: "from-purple-500/30 to-pink-500/30",
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    intro:
      "Infrastructure moderne, sécurisée et scalable. Zero-downtime deployments et disaster recovery.",
    deliverables: [
      "Architecture cloud-native design",
      "CI/CD pipelines automatisés",
      "Containerisation (Docker, Kubernetes)",
      "Infrastructure as Code",
      "Monitoring et logging 24/7",
      "Security hardening et compliance",
    ],
    technologies: [
      "AWS",
      "GCP",
      "Azure",
      "Kubernetes",
      "Docker",
      "Terraform",
      "Jenkins",
      "ELK",
    ],
    metrics: [
      { label: "Déploiements/jour", value: "50+" },
      { label: "Cost Optimization", value: "-40%" },
      { label: "Deployment Time", value: "< 5min" },
      { label: "Incident Response", value: "< 15min" },
    ],
    gradientClass: "from-orange-500/30 to-red-500/30",
  },
  {
    icon: "🔒",
    title: "Backend & Security",
    intro:
      "Architectures backend performantes avec sécurité enterprise grade et conformité complète.",
    deliverables: [
      "API REST et GraphQL scalable",
      "Microservices architecture",
      "Authentication & Authorization (OAuth2, JWT)",
      "Data encryption et secure storage",
      "Penetration testing",
      "GDPR, CCPA, ISO 27001 compliance",
    ],
    technologies: [
      "Node.js",
      "Python",
      "Java",
      "Go",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "Elasticsearch",
    ],
    metrics: [
      { label: "API Latency", value: "< 50ms" },
      { label: "Security Score", value: "A+" },
      { label: "Data Loss Risk", value: "0%" },
      { label: "Uptime SLA", value: "99.99%" },
    ],
    gradientClass: "from-green-500/30 to-emerald-500/30",
  },
];

const processSteps = [
  {
    title: "Discovery",
    desc: "Audit complet de votre situation, analyse des besoins, définition des KPIs et roadmap.",
  },
  {
    title: "Design",
    desc: "Wireframes, prototypes interactifs, design system. Validation avec stakeholders.",
  },
  {
    title: "Development",
    desc: "Sprints agiles bi-hebdomadaires. Code reviews. Tests automatisés. Documentation.",
  },
  {
    title: "Launch & Support",
    desc: "Déploiement production. Monitoring. Support technique. Optimisations continues.",
  },
];

const packages = [
  {
    name: "Starter",
    desc: "Pour les petits projets et MVP",
    startPrice: "5,000 €",
    featured: false,
    features: [
      "Projet simple (1-2 mois)",
      "Une page de landing ou app MVP",
      "Design professionnel",
      "Responsive mobile",
      "3 mois de support",
      "Herbergement inclus",
    ],
  },
  {
    name: "Professional",
    desc: "Pour les entreprises en croissance",
    startPrice: "15,000 €",
    featured: true,
    features: [
      "Projet complet (3-6 mois)",
      "App web ou mobile full-stack",
      "Design system personnalisé",
      "API backend robuste",
      "1 an de support & maintenance",
      "Analytics et monitoring",
      "Formation équipe interne",
    ],
  },
  {
    name: "Enterprise",
    desc: "Solutions custom complexes",
    startPrice: "50,000 €",
    featured: false,
    features: [
      "Projet complexe (6+ mois)",
      "Microservices et scaling",
      "Infrastructure cloud haute disponibilité",
      "Security & compliance experts",
      "Support 24/7 dédié",
      "Retro-engineering et audit",
      "Team augmentation possible",
    ],
  },
];
</script>
