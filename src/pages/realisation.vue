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
              >Nos Succès</span
            >
          </div>
          <h1
            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight"
          >
            {{ $t("realisations.title") }}
          </h1>
          <p class="text-lg text-secondary-200 max-w-2xl leading-relaxed">
            {{ $t("realisations.description") }}
          </p>
        </div>
      </div>
    </section>

    <!-- Projects Grid - Case Studies -->
    <section class="py-20 bg-white dark:bg-secondary-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="space-y-12">
          <div
            v-for="(project, idx) in projects"
            :key="idx"
            :class="{ 'flex-row-reverse': idx % 2 === 1 }"
            class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in-up"
            :style="{ animationDelay: `${idx * 100}ms` }"
          >
            <!-- Content -->
            <div class="space-y-6">
              <div class="inline-flex items-center gap-3 w-fit">
                <div
                  class="px-3 py-1 bg-primary-500/10 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400 text-xs font-bold uppercase rounded-full"
                >
                  {{ project.category }}
                </div>
              </div>

              <h2
                class="text-2xl md:text-3xl lg:text-4xl font-black text-secondary-900 dark:text-white leading-tight"
              >
                {{ project.name }}
              </h2>

              <!-- Challenge -->
              <div class="space-y-3">
                <h3
                  class="font-bold text-secondary-900 dark:text-white text-sm uppercase tracking-wide text-primary-600"
                >
                  Le Défi
                </h3>
                <p
                  class="text-secondary-700 dark:text-secondary-300 leading-relaxed"
                >
                  {{ project.challenge }}
                </p>
              </div>

              <!-- Solution -->
              <div class="space-y-3">
                <h3
                  class="font-bold text-secondary-900 dark:text-white text-sm uppercase tracking-wide text-primary-600"
                >
                  Notre Solution
                </h3>
                <p
                  class="text-secondary-700 dark:text-secondary-300 leading-relaxed"
                >
                  {{ project.solution }}
                </p>
              </div>

              <!-- Results -->
              <div
                class="grid grid-cols-3 gap-4 py-6 border-y border-secondary-200 dark:border-secondary-700"
              >
                <div
                  class="col-span-3 text-primary-600 font-bold mb-2 text-sm uppercase"
                >
                  {{ $t("realisations.results") }}
                </div>
                <div
                  v-for="result in project.results"
                  :key="result.label"
                  class="text-center"
                >
                  <div class="text-3xl font-black text-primary-500 mb-1">
                    {{ result.value }}
                  </div>
                  <p class="text-xs text-secondary-600 dark:text-secondary-400">
                    {{ result.label }}
                  </p>
                </div>
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
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="px-3 py-1 bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 text-sm font-semibold rounded-full"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <!-- Client Quote -->
              <div
                class="border-l-4 border-primary-500 pl-6 py-4 bg-secondary-50 dark:bg-secondary-800 rounded"
              >
                <p
                  class="text-secondary-700 dark:text-secondary-300 italic mb-2"
                >
                  {{ project.quote }}
                </p>
                <p class="font-bold text-secondary-900 dark:text-white text-sm">
                  — {{ project.client }}
                </p>
              </div>
            </div>

            <!-- Visual -->
            <div
              class="relative h-96 rounded-2xl overflow-hidden hover-lift group bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700"
            >
              <template v-if="project.image">
                <a
                  v-if="project.link"
                  :href="project.link"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    :src="project.image"
                    :alt="project.name"
                    class="object-cover w-full h-full cursor-pointer"
                  />
                </a>
                <img
                  v-else
                  :src="project.image"
                  :alt="project.name"
                  class="object-cover w-full h-full"
                />
              </template>
              <div
                v-else
                class="flex items-center justify-center h-full w-full text-7xl opacity-20"
              >
                {{ project.icon }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="py-20 bg-secondary-50 dark:bg-secondary-800">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div
            v-for="(stat, index) in statistics"
            :key="stat.id"
            class="animate-fade-in-up"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            <div class="text-5xl font-black text-primary-500 mb-2">
              {{ stat.number }}
            </div>
            <p class="text-secondary-600 dark:text-secondary-400 font-semibold">
              {{ stat.label }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-20 bg-white dark:bg-secondary-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16 animate-fade-in-up">
          <h2
            class="text-4xl font-black text-secondary-900 dark:text-white mb-4"
          >
            {{ $t("realisations.testimonials") }}
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(testimonial, idx) in testimonials"
            :key="idx"
            class="bg-secondary-50 dark:bg-secondary-800 rounded-xl p-8 border border-secondary-200 dark:border-secondary-700 hover-lift animate-fade-in-up"
            :style="{ animationDelay: `${idx * 100}ms` }"
          >
            <div class="flex gap-1 mb-4">
              <span v-for="i in 5" :key="i" class="text-primary-500">★</span>
            </div>
            <p
              class="text-secondary-700 dark:text-secondary-300 leading-relaxed italic mb-6"
            >
              "{{ testimonial.text }}"
            </p>
            <div>
              <p class="font-bold text-secondary-900 dark:text-white">
                {{ testimonial.author }}
              </p>
              <p class="text-sm text-secondary-600 dark:text-secondary-400">
                {{ testimonial.company }}
              </p>
            </div>
          </div>
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
          Votre Projet Pourrait Être le Suivant
        </h2>
        <p class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Discutons de vos objectifs et construisons ensemble la solution qui
          transformera votre entreprise.
        </p>
        <router-link
          to="/contact"
          class="group inline-block px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-primary-50 transition-all hover-lift"
        >
          Commencer un Projet
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
import { useI18n } from "vue-i18n";
const { t: $t } = useI18n();

const projects = [
  {
    icon: "📲",
    name: "StudentApp",
    category: "Mobile & Web",
    challenge:
      "Faciliter la gestion scolaire et la communication pour 50k+ étudiants.",
    solution:
      "Plateforme mobile et web avec suivi des absences, notifications, et accès parent/élève.",
    results: [
      { label: "Utilisateurs", value: "+50k" },
      { label: "Taux d'absentéisme", value: "-40%" },
      { label: "Établissements", value: "100+" },
    ],
    technologies: ["React Native", "Node.js", "PostgreSQL"],
    quote:
      "StudentApp a révolutionné la gestion scolaire et la communication entre parents et établissements.",
    client: "Espace Cameroun",
    gradientClass: "",
    link: "https://studentapp.espacecameroun.com/",
    image: "/img/studenapp.png",
  },
  {
    icon: "📋",
    name: "PreInscription Platform",
    category: "Platform SaaS",
    challenge:
      "Le centre de formation traitait 3000 candidatures par an via email et formulaires PDF. Processus manuel de 6 semaines, taux d'erreur 15%, aucune traçabilité.",
    solution:
      "Platform SaaS complète avec formulaires adaptatifs, vérification temps-réel, scoring automatique des candidatures, et tableau de bord pour admission officers. Intégration CRM et Slack.",
    results: [
      { label: "Traitement x3 Plus Rapide", value: "2 weeks" },
      { label: "Réduction Erreurs", value: "-98%" },
      { label: "Satisfaction Utilisateurs", value: "+95%" },
    ],
    technologies: ["Vue.js", "MongoDB", "AWS", "Stripe"],
    quote:
      "Impossible de revenir à notre ancien processus. La plateforme nous sauve 100h de travail par campagne d'admission.",
    client: "Marie Leclerc, Responsable Admissions",
    gradientClass: "from-purple-500/30 to-pink-500/30",
    link: null,
    image: "/img/preinsc.png",
  },
  {
    icon: "✈️",
    name: "NgueNgan Travel",
    category: "E-commerce",
    challenge:
      "Agence de voyage avec site web statique. Taux de conversion 1.2%, aucun système de réservation en ligne, 80% des bookings par téléphone.",
    solution:
      "Refonte complète avec Next.js, galerie visuelle des destinations, système de réservation en temps-réel avec paiement Stripe, recommandations AI, et dashboard pour l'équipe.",
    results: [
      { label: "Conversion +85%", value: "6.8%" },
      { label: "Réservations Online", value: "92%" },
      { label: "Revenu Annual", value: "+320%" },
    ],
    technologies: ["Next.js", "Stripe", "Firebase", "Tailwind CSS"],
    quote:
      "C'est incroyable. Nos clients réservent 24/7 sans nous appeler. Le site se vend presque seul maintenant.",
    client: "Pierre Nguyen, CEO NgueNgan",
    gradientClass: "from-orange-500/30 to-red-500/30",
    link: null,
    image: "/img/nguengan.png",
  },
  {
    icon: "🛒",
    name: "Espace Cameroun Marketplace",
    category: "Marketplace Local",
    challenge:
      "Créer une plateforme de vente locale pour connecter vendeurs et acheteurs au Cameroun.",
    solution:
      "Développement d'une marketplace moderne avec gestion des annonces, paiement sécurisé, et interface mobile responsive.",
    results: [
      { label: "Vendeurs Inscrits", value: "500+" },
      { label: "Transactions Mensuelles", value: "2k+" },
      { label: "Satisfaction Clients", value: "97%" },
    ],
    technologies: [
      "Laravel",
      "Vue.js 3",
      "Inertia",
      "Livewire",
      "Filament",
      "MySQL",
    ],
    quote:
      "La marketplace a boosté nos ventes et simplifié la gestion des commandes.",
    client: "Espace Cameroun",
    gradientClass: "",
    link: "https://espacecameroun.com/acceuil",
    image: "/img/Marketplace-Espace-Cameroun-.png",
  },
  {
    icon: "🎓",
    name: "Acadecol Institut",
    category: "Institut de Formation",
    challenge: "Moderniser la présence digitale d'un institut de formation.",
    solution:
      "Site web institutionnel avec gestion des inscriptions, présentation des programmes, et espace membre.",
    results: [
      { label: "Étudiants Inscrits", value: "1200+" },
      { label: "Programmes Affichés", value: "35" },
      { label: "Taux de Conversion", value: "22%" },
    ],
    technologies: ["WordPress", "PHP", "MySQL", "Filament"],
    quote:
      "Le site a facilité l'accès à l'information et augmenté les inscriptions.",
    client: "Acadecol",
    gradientClass: "",
    link: "https://acadecol.espacecameroun.com/",
    image: "/img/acadecol.png",
  },
  {
    icon: "💍",
    name: "Stella Wabo Bijoux",
    category: "E-commerce Bijoux",
    challenge: "Créer une boutique en ligne pour bijoux artisanaux.",
    solution:
      "Site e-commerce avec galerie produits, paiement en ligne, et gestion des stocks.",
    results: [
      { label: "Produits Vendus", value: "800+" },
      { label: "Clients Satisfaits", value: "99%" },
      { label: "Croissance Mensuelle", value: "+15%" },
    ],
    technologies: ["Laravel", "Vue.js 3", "Filament", "MySQL"],
    quote: "La boutique a permis d'atteindre une clientèle internationale.",
    client: "Stella Wabo",
    gradientClass: "",
    link: "https://stellawabo.espacecameroun.com/",
    image: "/img/Stella-Wabo.png",
  },
  {
    icon: "🔌",
    name: "BorisTech Electronics",
    category: "E-commerce Electronique",
    challenge:
      "Mettre en place une plateforme de vente d'appareils électroniques.",
    solution:
      "Site e-commerce avec catalogue, filtres avancés, et paiement sécurisé.",
    results: [
      { label: "Appareils Vendus", value: "1500+" },
      { label: "Taux de Satisfaction", value: "98%" },
      { label: "Commandes Mensuelles", value: "300+" },
    ],
    technologies: ["Laravel", "React", "PostgreSQL", "Filament"],
    quote: "La plateforme a simplifié la gestion des ventes et des stocks.",
    client: "BorisTech",
    gradientClass: "",
    link: "http://boristech.evendeco.com/",
    image: "/img/Boris-Tech.png",
  },
  {
    icon: "🎉",
    name: "Evendeco Events",
    category: "Entreprise Événementiel",
    challenge:
      "Présenter les services d'une entreprise d'événementiel en ligne.",
    solution: "Site vitrine avec portfolio, formulaire de contact, et blog.",
    results: [
      { label: "Événements Organisés", value: "250+" },
      { label: "Clients Entreprises", value: "60+" },
      { label: "Taux de Réussite", value: "100%" },
    ],
    technologies: ["WordPress", "PHP", "MySQL", "Filament"],
    quote:
      "Le site a permis de gagner en visibilité et d'attirer de nouveaux clients.",
    client: "Evendeco",
    gradientClass: "",
    link: "https://evendeco.com/",
    image: "/img/SUPER-DECOR-Décoration-evenementielle-.png",
  },
  {
    icon: "🌍",
    name: "ABEC",
    category: "Plateforme sociale",
    challenge:
      "Créer une plateforme de bien-être universel accessible à l'international.",
    solution:
      "Développement d'une plateforme moderne avec accès direct à universalwelfare.org, gestion multilingue et expérience utilisateur optimisée.",
    results: [
      { label: "Utilisateurs", value: "10k+" },
      { label: "Pays couverts", value: "20+" },
      { label: "Dons réalisés", value: "+50" },
    ],
    technologies: ["Laravel", "Vue.js", "MySQL"],
    quote:
      "ABEC a permis de connecter des bénéficiaires et des donateurs à l'échelle mondiale.",
    client: "Universal Welfare",
    gradientClass: "",
    link: "https://universalwelfare.org/",
    image: "/img/abec.png",
  },
];

const statistics = [
  { id: 1, number: "50+", label: "Projets Réalisés" },
  { id: 2, number: "30+", label: "Clients Heureux" },
  { id: 3, number: "10+", label: "Années d'Expertise" },
  { id: 4, number: "200M+", label: "Utilisateurs Impactés" },
];

const testimonials = [
  {
    text: "BodyMac Labs n'est pas juste un prestataire, c'est un partenaire stratégique. Ils comprennent nos enjeux métier et proposent des solutions qui impactent vraiment.",
    author: "Olivier Martin",
    company: "CEO, TechStart",
  },
  {
    text: "La qualité du code et l'attention aux détails sont hors normes. Notre équipe interne a même appris de leurs best practices et standards.",
    author: "Sarah Johnson",
    company: "CTO, FinanceApp",
  },
  {
    text: "Supports 24/7, responsive, proactif. Pas besoin d'attendre des jours pour une réponse. C'est du vrai professionnalisme.",
    author: "Luc Moreau",
    company: "Product Manager, E-commerce Plus",
  },
  {
    text: "Notre MVP a été livré en 6 semaines avec zéro bug. Très impressionné par la méthodologie agile et les daily standups.",
    author: "Emma Dubois",
    company: "Founder, HealthBase",
  },
  {
    text: "Coût final dans le budget. Délais respectés. Réussi au premier coup sans étapes de correction massives. Recommandé sans hésiter.",
    author: "Thomas Laurent",
    company: "COO, LogisticFlow",
  },
  {
    text: "Pas de surprises, pas d'excuses. Transparence complète. Reporting hebdomadaire détaillé. Exactement ce qu'on attendait.",
    author: "Béatrice Klein",
    company: "Head of Digital, Retail Co.",
  },
];
</script>
