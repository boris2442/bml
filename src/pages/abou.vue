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
              >Notre Histoire</span
            >
          </div>
          <h1
            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight"
          >
            À Propos de BodyMac Labs
          </h1>
          <p class="text-lg text-secondary-200 max-w-2xl leading-relaxed">
            Depuis 10 ans, nous accompagnons les entreprises à transformer leurs
            défis digitaux en opportunités de croissance.
          </p>
        </div>
      </div>
    </section>

    <!-- Who We Are -->
    <section class="py-20 bg-white dark:bg-secondary-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-6 animate-slide-in-left">
            <h2
              class="text-2xl md:text-3xl lg:text-4xl font-black text-secondary-900 dark:text-white leading-tight"
            >
              Notre Mission
            </h2>
            <p
              class="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed"
            >
              BodyMac Labs n'existe que pour une raison: transformer les idées
              ambitieuses en produits digitaux qui impactent. Pas de buzzwords.
              Pas de promesses vides. Juste du code de qualité, des processus
              rigoureux, et des résultats mesurables.
            </p>
            <p
              class="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed"
            >
              Nous ne sommes pas une agence généraliste qui fait "un peu de
              tout". Nous sommes des spécialistes du digital. Des craftspeople.
              Des experts qui savent que chaque pixel compte et chaque ligne de
              code affecte la performance.
            </p>
            <div class="space-y-3 pt-6">
              <div class="flex gap-3 items-start">
                <span class="text-primary-500 font-bold text-2xl flex-shrink-0"
                  >✓</span
                >
                <div>
                  <h3 class="font-bold text-secondary-900 dark:text-white">
                    Qualité d'Abord
                  </h3>
                  <p class="text-secondary-600 dark:text-secondary-400 text-sm">
                    Code audité, testé, et optimisé. Zero compromis.
                  </p>
                </div>
              </div>
              <div class="flex gap-3 items-start">
                <span class="text-primary-500 font-bold text-2xl flex-shrink-0"
                  >✓</span
                >
                <div>
                  <h3 class="font-bold text-secondary-900 dark:text-white">
                    Partenariat Vrai
                  </h3>
                  <p class="text-secondary-600 dark:text-secondary-400 text-sm">
                    On dépasse le client-prestataire. Vous réussissez = on
                    réussit.
                  </p>
                </div>
              </div>
              <div class="flex gap-3 items-start">
                <span class="text-primary-500 font-bold text-2xl flex-shrink-0"
                  >✓</span
                >
                <div>
                  <h3 class="font-bold text-secondary-900 dark:text-white">
                    Responsabilité
                  </h3>
                  <p class="text-secondary-600 dark:text-secondary-400 text-sm">
                    Délais, budgets, KPIs. Tous les objectifs sont documentés et
                    suivis.
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
                    10+
                  </div>
                  <p class="text-secondary-600 dark:text-secondary-400">
                    Années de Présence
                  </p>
                </div>
                <hr class="border-secondary-200 dark:border-secondary-700" />
                <div class="text-center">
                  <div class="text-6xl font-black text-primary-500 mb-2">
                    50+
                  </div>
                  <p class="text-secondary-600 dark:text-secondary-400">
                    Projets Livrés
                  </p>
                </div>
                <hr class="border-secondary-200 dark:border-secondary-700" />
                <div class="text-center">
                  <div class="text-6xl font-black text-primary-500 mb-2">
                    30+
                  </div>
                  <p class="text-secondary-600 dark:text-secondary-400">
                    Clients en Confiance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values -->
    <section class="py-20 bg-secondary-50 dark:bg-secondary-800">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16 animate-fade-in-up">
          <h2
            class="text-4xl font-black text-secondary-900 dark:text-white mb-4"
          >
            Nos Valeurs Fondamentales
          </h2>
          <p
            class="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
          >
            Ce qui nous guide dans chaque décision, chaque projet, chaque
            interaction
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(value, idx) in values"
            :key="idx"
            class="bg-white dark:bg-secondary-900 rounded-xl p-8 border border-secondary-200 dark:border-secondary-700 hover-lift animate-fade-in-up"
            :style="{ animationDelay: `${idx * 100}ms` }"
          >
            <div class="text-5xl mb-4">{{ value.icon }}</div>
            <h3
              class="text-2xl font-black text-secondary-900 dark:text-white mb-3"
            >
              {{ value.title }}
            </h3>
            <p
              class="text-secondary-600 dark:text-secondary-400 leading-relaxed"
            >
              {{ value.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20 bg-white dark:bg-secondary-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16 animate-fade-in-up">
          <h2
            class="text-4xl font-black text-secondary-900 dark:text-white mb-4"
          >
            L'Équipe BodyMac Labs
          </h2>
          <p
            class="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
          >
            Des experts passionnés par le digital et la qualité. Spécialistes
            reconnus avec 10+ ans d'expérience moyenne.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(member, idx) in team"
            :key="idx"
            class="bg-gradient-to-br rounded-2xl p-8 shadow-lg border border-black hover-lift animate-fade-in-up"
            :class="member.gradientClass"
            :style="{ animationDelay: `${idx * 100}ms` }"
          >
            <div class="flex justify-center mb-4 bg-gray-900 rounded-lg">
              <img
                v-if="member.photo"
                :src="member.photo"
                :alt="member.name"
                class="w-full aspect-square rounded-2xl object-cover shadow-lg"
              />
              <span v-else class="text-6xl">{{ member.icon }}</span>
            </div>
            <h3 class="text-2xl font-black mb-1">{{ member.name }}</h3>
            <p class="text-sm font-semibold opacity-90 mb-4">
              {{ member.title }}
            </p>
            <p class="text-sm leading-relaxed opacity-90">{{ member.bio }}</p>
            <div class="mt-4 pt-4 border-t border-white/20 text-xs">
              Expertise: {{ member.skills }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline / History -->
    <section class="py-20 bg-secondary-50 dark:bg-secondary-800">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16 animate-fade-in-up">
          <h2
            class="text-4xl font-black text-secondary-900 dark:text-white mb-4"
          >
            Notre Parcours
          </h2>
          <p class="text-lg text-secondary-600 dark:text-secondary-400">
            Une décennie d'innovation et de croissance
          </p>
        </div>

        <div class="space-y-8">
          <div
            v-for="(milestone, idx) in timeline"
            :key="idx"
            class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center animate-fade-in-up"
            :style="{ animationDelay: `${idx * 100}ms` }"
          >
            <div v-if="idx % 2 === 0" class="md:text-right">
              <h3 class="text-3xl font-black text-primary-500 mb-2">
                {{ milestone.year }}
              </h3>
              <p class="text-secondary-600 dark:text-secondary-400">
                {{ milestone.title }}
              </p>
            </div>
            <div class="flex justify-center">
              <div
                class="w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-secondary-900"
              ></div>
            </div>
            <div v-if="idx % 2 === 1">
              <h3 class="text-3xl font-black text-primary-500 mb-2">
                {{ milestone.year }}
              </h3>
              <p class="text-secondary-600 dark:text-secondary-400">
                {{ milestone.title }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Work With Us -->
    <section class="py-20 bg-white dark:bg-secondary-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16 animate-fade-in-up">
          <h2
            class="text-4xl font-black text-secondary-900 dark:text-white mb-4"
          >
            Pourquoi les Meilleurs Choisissent BodyMac Labs
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(reason, idx) in whyUs"
            :key="idx"
            class="bg-secondary-50 dark:bg-secondary-800 rounded-xl p-8 border border-secondary-200 dark:border-secondary-700 hover-lift animate-fade-in-up"
            :style="{ animationDelay: `${idx * 80}ms` }"
          >
            <div class="text-4xl mb-4">{{ reason.icon }}</div>
            <h3
              class="text-xl font-bold text-secondary-900 dark:text-white mb-3"
            >
              {{ reason.title }}
            </h3>
            <p
              class="text-secondary-600 dark:text-secondary-400 leading-relaxed"
            >
              {{ reason.desc }}
            </p>
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
          Prêt à Créer Quelque Chose d'Extraordinaire ?
        </h2>
        <p class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Parlez avec notre équipe et découvrez comment nous pouvons transformer
          votre vision.
        </p>
        <router-link
          to="/contact"
          class="group inline-block px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-primary-50 transition-all hover-lift"
        >
          Planifier une Consultation
        </router-link>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const values = [
  {
    icon: "🎯",
    title: "Excellence",
    desc: "Pas de MVP moyen. Chaque projet reçoit l'attention complète. Qualité de production dès le départ. Zéro dette technique acceptée.",
  },
  {
    icon: "🤝",
    title: "Transparence",
    desc: "Reporting hebdomadaire. Accès au code. Estimation honnête des délais. Pas de surprises. Budgets vs réalité alignés au 100%.",
  },
  {
    icon: "⚡",
    title: "Rapidité",
    desc: "Agile méthodique. Iterations rapides. Feedback loops court. On livre des features usables toutes les 2 semaines, pas après 6 mois.",
  },
  {
    icon: "🚀",
    title: "Innovation",
    desc: "Toujours à la pointe. Stack moderne. Frameworks last-gen. Performance optimization obsessed. Security-first. DevOps best practices.",
  },
  {
    icon: "💯",
    title: "Responsabilité",
    desc: 'On prend "skin in the game". Si vous n\'êtes pas heureux, nous ne facturons pas. Garantie de satisfait ou améliorations gratuites.',
  },
  {
    icon: "🌟",
    title: "Expertise",
    desc: "Zéro junior developers sur vos projets. Tous seniors. 10+ ans d'expérience. Nous avons vu les pièges. Nous les évitons.",
  },
];

const team = [
  {
    icon: "🖥️",
    name: "Lontsi Parfait",
    title: "Développeur Back-end",
    bio: "Architecture système, conception technique, intégration des services tiers et monitoring applicatif.",
    skills: "Laravel, Microservices, DevOps",
    gradientClass: "from-gray-100 to-gray-50",
    photo: "/img/equipe/parfait.png",
  },
  {
    icon: "🖥️",
    name: "Mciagnessi Dominique",
    title: "Développeur Back-end",
    bio: "Développement et maintenance des API, gestion des bases de données, sécurité et performance côté serveur.",
    skills: "Laravel, SQL, REST",
    gradientClass: "from-gray-100 to-gray-50",
    photo: "/img/equipe/mciagnessi dominique.jpg",
  },
  {
    icon: "💻",
    name: "Nguimfack Yannick",
    title: "Développeur Front-end",

    bio: "devops .Développement de l’interface utilisateur, optimisation UX, création de composants interactifs .",
    skills: "Vue.js, React, UI/UX",
    gradientClass: "from-gray-100 to-gray-50",
    photo: "/img/equipe/yannick.png",
  },
  {
    icon: "💻",
    name: "Fouadzeu Boris",
    title: "Développeur Front-end",
    bio: "Développement à partir des maquettes, ergonomie, création de composants réutilisables.",
    skills: "Vue.js, React, Ergonomie",
    gradientClass: "from-gray-100 to-gray-50",
    photo: "/img/equipe/boris.png",
  },
  {
    icon: "💻",
    name: "Simo Boris",
    title: "Développeur Front-end",
    bio: "Optimisation de l’expérience utilisateur, création d’interfaces modernes et performantes.",
    skills: "Vue.js, React, Performance",
    gradientClass: "from-gray-100 to-gray-50",
    photo: "/img/equipe/aubin.jpeg",
  },
  {
    icon: "🎨",
    name: "Waffo Rostand",
    title: "Conseiller technique & Designer web",
    bio: "Conseil technique, conception graphique et design web, veille sur les tendances UI/UX.",
    skills: "Design web, UI/UX, Conseil",
    gradientClass: "from-gray-100 to-gray-50",
    photo: "/img/equipe/waffo rostand.png",
  },
  {
    icon: "🖌️",
    name: "Kenhago Stephy",
    title: "Infographe",
    bio: "Création de visuels, illustrations et supports graphiques pour les projets.",
    skills: "Infographie, Illustration, Créativité",
    gradientClass: "from-gray-100 to-gray-50",
    photo: "/img/equipe/stephie.jpeg",
  },
];

const timeline = [
  {
    year: "2014",
    title:
      "BodyMac Labs Founded. Première mission: moderniser une legacy app universitaire.",
  },
  {
    year: "2016",
    title:
      "10 clients actifs. Expandons l'équipe à 4 developers. Ouverture bureau parisien.",
  },
  {
    year: "2018",
    title:
      "30+ projets livrés. Recognition comme top agence digital. Premier client Fortune 500.",
  },
  {
    year: "2020",
    title: "Pivot vers SaaS. Lanceons 3 produits propriétaires. Revenue x3.",
  },
  {
    year: "2022",
    title: "Enterprise clients majority. 50+ team. Certified AWS Partner.",
  },
  {
    year: "2024",
    title: "BodyMac Labs classée top digital agency. Expansion internationale.",
  },
];

const whyUs = [
  {
    icon: "👨‍🏫",
    title: "Expertise Reconnue",
    desc: "Nos devs parlent à des conférences internationales. Contributeurs open-source. Mentors pour la communauté tech.",
  },
  {
    icon: "⏱️",
    title: "Deadline Respectées",
    desc: "Rarissime: projet en retard chez nous. Méthodologie agile avec buffer. Planning réaliste basé sur données.",
  },
  {
    icon: "💰",
    title: "ROI Measurable",
    desc: "Chaque feature a KPI. Tracking de l'impact. Vos investissements digital se convertissent en growth tangible.",
  },
  {
    icon: "🛡️",
    title: "Security & Compliance",
    desc: "GDPR compliant. OWASP standards. Pentest regular. Encryption by default. Vos données = our responsibility.",
  },
  {
    icon: "📈",
    title: "Scalability Proven",
    desc: "Infrastructure qui scale avec vous. 10x users x10 perf. Pas de crash quand vous réussissez.",
  },
  {
    icon: "🤝",
    title: "Support 24/7",
    desc: "Post-launch, toujours dispo. Bug critique? Fixed in hours. Question? Response in minutes.",
  },
];
</script>
