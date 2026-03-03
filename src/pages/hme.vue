<template>
  <main>
    <!-- Hero Section - Premium -->
    <section
      class="relative bg-white dark:bg-secondary-900 py-20 md:py-32 overflow-hidden"
    >
      <!-- Animated background elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-float"
        ></div>
        <div
          class="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl animate-float"
          style="animation-delay: 1s"
        ></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Left Content -->
          <div class="space-y-8 animate-slide-in-left">
            <div
              class="inline-flex items-center gap-3 px-4 py-2 bg-primary-500/10 dark:bg-primary-500/20 rounded-full w-fit"
            >
              <span
                class="w-2 h-2 bg-primary-500 rounded-full animate-pulse"
              ></span>
              <span
                class="text-sm font-semibold text-primary-600 dark:text-primary-400"
                >Agence Digitale Innovante</span
              >
            </div>

            <h1
              class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-secondary-900 dark:text-white"
            >
              Transformez Votre Vision
              <span class="block text-transparent bg-clip-text bg-primary-500"
                >en Réalité Digitale</span
              >
            </h1>

            <p
              class="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed max-w-lg"
            >
              BodyMac Labs accompagne les entreprises ambitieuses à transformer
              leurs défis numériques en opportunités de croissance. Stratégie.
              Technologie. Résultats.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                class="group px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-lg transition-all duration-300 hover-lift flex items-center gap-2"
              >
                Commencer un Projet
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
              <button
                class="px-8 py-4 border-2 border-secondary-300 dark:border-secondary-700 text-secondary-900 dark:text-white hover:bg-secondary-50 dark:hover:bg-secondary-800 font-bold rounded-lg transition-all duration-300"
              >
                Nos Cas d'Usage
              </button>
            </div>

            <!-- Stats -->
            <div
              class="grid grid-cols-3 gap-6 pt-8 border-t border-secondary-200 dark:border-secondary-800"
            >
              <div class="animate-fade-in-up">
                <div class="text-2xl md:text-3xl font-black text-primary-500">
                  50+
                </div>
                <p class="text-sm text-secondary-600 dark:text-secondary-400">
                  Projets Livrés
                </p>
              </div>
              <div class="animate-fade-in-up" style="animation-delay: 100ms">
                <div class="text-2xl md:text-3xl font-black text-primary-500">
                  30+
                </div>
                <p class="text-sm text-secondary-600 dark:text-secondary-400">
                  Clients Heureux
                </p>
              </div>
              <div class="animate-fade-in-up" style="animation-delay: 200ms">
                <div class="text-2xl md:text-3xl font-black text-primary-500">
                  10ans
                </div>
                <p class="text-sm text-secondary-600 dark:text-secondary-400">
                  D'Expertise
                </p>
              </div>
            </div>
          </div>

          <!-- Right Visual -->
          <div class="hidden lg:block animate-slide-in-right">
            <div class="relative">
              <!-- Floating cards -->
              <div
                class="absolute top-0 right-0 w-80 h-64 bg-gradient-to-br from-primary-500/20 to-transparent rounded-2xl border border-primary-500/30 backdrop-blur-sm p-6 transform hover-lift"
              >
                <div class="text-4xl mb-3">🎯</div>
                <h3 class="font-bold text-secondary-900 dark:text-white mb-2">
                  Stratégie
                </h3>
                <p class="text-sm text-secondary-600 dark:text-secondary-400">
                  Nous définissons la direction
                </p>
              </div>
              <div
                class="absolute top-48 -left-12 w-80 h-64 bg-gradient-to-br from-secondary-500/20 to-transparent rounded-2xl border border-secondary-500/30 backdrop-blur-sm p-6 transform hover-lift"
                style="animation-delay: 200ms"
              >
                <div class="text-4xl mb-3">⚡</div>
                <h3 class="font-bold text-secondary-900 dark:text-white mb-2">
                  Technologie
                </h3>
                <p class="text-sm text-secondary-600 dark:text-secondary-400">
                  Nous construisons la solution
                </p>
              </div>
              <div
                class="absolute -bottom-8 right-12 w-80 h-64 bg-gradient-to-br from-primary-500/20 to-transparent rounded-2xl border border-primary-500/30 backdrop-blur-sm p-6 transform hover-lift"
                style="animation-delay: 400ms"
              >
                <div class="text-4xl mb-3">📊</div>
                <h3 class="font-bold text-secondary-900 dark:text-white mb-2">
                  Résultats
                </h3>
                <p class="text-sm text-secondary-600 dark:text-secondary-400">
                  Nous mesurons l'impact
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview - Compact -->
    <section class="py-20 bg-secondary-50 dark:bg-secondary-800">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16 animate-fade-in-up">
          <h2
            class="text-4xl md:text-4xl font-black text-secondary-900 dark:text-white mb-4"
          >
            Notre Expertise
          </h2>
          <p
            class="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
          >
            Des solutions end-to-end pour tous vos enjeux digitaux
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(service, index) in topServices"
            :key="index"
            class="group animated-fade-in-up"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            <div
              class="bg-white dark:bg-secondary-900 rounded-xl p-8 border border-secondary-200 dark:border-secondary-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 hover-lift h-full"
            >
              <div
                class="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300"
              >
                {{ service.icon }}
              </div>
              <h3
                class="text-xl font-bold text-secondary-900 dark:text-white mb-3"
              >
                {{ service.title }}
              </h3>
              <p class="text-secondary-600 dark:text-secondary-400 mb-6">
                {{ service.desc }}
              </p>
              <a
                href="#"
                class="text-primary-500 font-semibold hover:text-primary-600 inline-flex items-center gap-2"
              >
                En savoir plus →
              </a>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <router-link
            to="/services"
            class="inline-block px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-lg transition-all hover-lift"
          >
            Voir Tous les Services →
          </router-link>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-20 bg-white dark:bg-secondary-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-8 animate-slide-in-left">
            <h2
              class="text-4xl font-black text-secondary-900 dark:text-white leading-tight"
            >
              Pourquoi les Meilleurs Choisissent BodyMac Labs
            </h2>
            <div class="space-y-4">
              <div
                v-for="(benefit, idx) in benefits"
                :key="idx"
                class="flex gap-4 animate-fade-in-up"
                :style="{ animationDelay: `${idx * 80}ms` }"
              >
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center h-10 w-10 rounded-lg bg-primary-500 text-white font-bold"
                  >
                    ✓
                  </div>
                </div>
                <div>
                  <h3 class="font-bold text-secondary-900 dark:text-white">
                    {{ benefit.title }}
                  </h3>
                  <p class="text-secondary-600 dark:text-secondary-400 text-sm">
                    {{ benefit.desc }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="relative animate-slide-in-right">
            <div
              class="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent rounded-2xl blur-2xl"
            ></div>
            <div
              class="relative bg-white dark:bg-secondary-800 rounded-2xl p-12 border border-secondary-100 dark:border-secondary-700"
            >
              <div class="space-y-8">
                <div class="text-center">
                  <div class="text-6xl font-black text-primary-500 mb-2">
                    95%
                  </div>
                  <p class="text-secondary-600 dark:text-secondary-400">
                    De Satisfaction Client
                  </p>
                </div>
                <hr class="border-secondary-200 dark:border-secondary-700" />
                <div class="text-center">
                  <div class="text-6xl font-black text-primary-500 mb-2">
                    2.5x
                  </div>
                  <p class="text-secondary-600 dark:text-secondary-400">
                    ROI Moyen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Projects Teaser -->
    <section class="py-20 bg-secondary-50 dark:bg-secondary-800">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16 animate-fade-in-up">
          <h2
            class="text-4xl md:text-4xl font-black text-secondary-900 dark:text-white mb-4"
          >
            Nos Derniers Succès
          </h2>
          <p class="text-lg text-secondary-600 dark:text-secondary-400">
            Découvrez comment nous avons transformé des idées en produits
            remarquables
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div
            v-for="(project, idx) in featuredProjects"
            :key="idx"
            class="group animate-fade-in-up"
            :style="{ animationDelay: `${idx * 100}ms` }"
          >
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              rel="noopener"
              class="block"
            >
              <div
                class="relative h-64 bg-gradient-to-br from-primary-500 to-secondary-600 dark:from-primary-700 dark:to-secondary-900 rounded-2xl overflow-hidden mb-6 hover-lift"
              >
                <img
                  v-if="project.image"
                  :src="project.image"
                  alt="Image du projet"
                  class="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  class="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-semibold"
                >
                  {{ project.category }}
                </div>
              </div>
            </a>
            <div
              v-else
              class="relative h-64 bg-gradient-to-br from-primary-500 to-secondary-600 dark:from-primary-700 dark:to-secondary-900 rounded-2xl overflow-hidden mb-6 hover-lift"
            >
              <img
                v-if="project.image"
                :src="project.image"
                alt="Image du projet"
                class="absolute inset-0 w-full h-full object-cover"
              />
              <div
                class="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-semibold"
              >
                {{ project.category }}
              </div>
            </div>
            <h3
              class="text-xl font-bold text-secondary-900 dark:text-white mb-2"
            >
              {{ project.name }}
            </h3>
            <p class="text-secondary-600 dark:text-secondary-400 mb-4">
              {{ project.result }}
            </p>
            <div class="flex gap-2">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="px-2 py-1 bg-primary-500/10 dark:bg-primary-500/20 text-primary-700 dark:text-primary-300 text-xs font-semibold rounded"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>

        <div class="text-center">
          <router-link
            to="/realisations"
            class="inline-block px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-lg transition-all hover-lift"
          >
            Voir Tous les Projets →
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA Section - Powerful -->
    <section
      class="relative py-20 md:py-32 bg-primary-500 dark:bg-primary-700 text-white overflow-hidden"
    >
      <div class="absolute inset-0 opacity-20">
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
        <h2 class="text-5xl md:text-6xl font-black mb-6 leading-tight">
          Prêt à Lancer Votre Projet ?
        </h2>
        <p
          class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Rejoignez nos 30+ clients qui ont transformé leur vision en solutions
          digitales performantes. Discutons de vos ambitions dès aujourd'hui.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            class="group px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-primary-50 transition-all hover-lift flex items-center justify-center gap-2"
          >
            Planifier une Consultation
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
          <router-link
            to="/contact"
            class="px-8 py-4 border-2 border-white text-white hover:bg-white/10 font-bold rounded-lg transition-all"
          >
            Nous Contacter
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const topServices = [
  {
    icon: "🌐",
    title: "Web Modernisation",
    desc: "Transformez vos sites legacy en applications web ultra-performantes avec technologies latest-gen",
  },
  {
    icon: "📱",
    title: "Apps Mobiles Premier",
    desc: "Développement iOS/Android natives pour maximum de performance et user experience",
  },
  {
    icon: "☁️",
    title: "Cloud & Scalabilité",
    desc: "Architecture cloud-native pour croissance sans limites et zéro downtime",
  },
];

const benefits = [
  {
    title: "Équipe Senior",
    desc: "Nos experts ont 10+ ans d'expérience moyenne. Zero junior developers.",
  },
  {
    title: "100% Custom",
    desc: "Pas de template. Chaque pixel est pensé pour vos objectifs.",
  },
  {
    title: "De la Stratégie",
    desc: "On ne code pas sans plan. Étude, roadmap, validation d'hypothèses.",
  },
  {
    title: "Support Illimité",
    desc: "Post-launch, on reste. Support, optimisations, évolutions continues.",
  },
  {
    title: "Qualité Garantie",
    desc: "Tests automatisés, code review, monitoring 24/7 en production.",
  },
  {
    title: "Délais Respectés",
    desc: "Méthodologie agile. Transparence totale. Zéro dérive budgétaire.",
  },
];

const featuredProjects = [
  {
    image: "/img/acadecol.png",
    name: "Acadecol",
    category: "Plateforme éducative",
    result:
      "Solution digitale pour la gestion scolaire, adoption nationale, impact sur 100+ établissements.",
    tech: ["Laravel", "Vue.js", "MySQL"],
    impact: "100+ écoles",
  },
  {
    image: "/img/Boris-Tech.png",
    name: "Boristech",
    category: "Tech & Innovation",
    result:
      "Développement d'outils sur-mesure pour PME, automatisation des processus, gain de productivité.",
    tech: ["React", "Node.js", "PostgreSQL"],
    impact: "Productivité x2",
  },
  {
    image: "/img/Stella-Wabo.png",
    name: "Stella Wabo",
    category: "Branding & Web",
    result:
      "Création d'une identité visuelle forte et site web performant pour une artiste reconnue.",
    tech: ["WordPress", "Figma", "SEO"],
    impact: "Visibilité accrue",
  },
  {
    image: "/img/abec.png",
    name: "ABEC",
    category: "Plateforme sociale",
    result:
      "Plateforme de bien-être universel, accès direct à universalwelfare.org, impact international.",
    tech: ["Laravel", "Vue.js", "MySQL"],
    impact: "Portée mondiale",
    link: "https://universalwelfare.org/",
  },
  {
    image: "/img/studenapp.png",
    name: "StudentApp",
    category: "Mobile & Web",
    result:
      "Plateforme pour 50k+ étudiants. Réduction du taux d'absentéisme de 40%.",
    tech: ["React Native", "Node.js", "PostgreSQL"],
    impact: "+50k utilisateurs",
    link: "https://studentapp.espacecameroun.com/",
  },
];
</script>
