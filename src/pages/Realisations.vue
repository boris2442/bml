<template>
  <main class="dark:bg-[var(--background)] text-[var(--text-main)] font-sans">
    <section
      class="relative pt-32 pb-20 overflow-hidden border-b border-[var(--border)]"
    >
      <div
        class="absolute inset-0 pointer-events-none select-none overflow-hidden"
      >
        <div
          class="absolute -right-20 top-1/4 text-[30vw] font-black uppercase text-outline opacity-[0.03] italic leading-none"
        >
          WORKS
        </div>
        <div
          class="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-end space-y-8 opacity-20"
        >
          <div class="text-right">
            <div class="text-6xl font-black italic">50+</div>
            <div
              class="text-[10px] tracking-[0.4em] uppercase text-[var(--primary)]"
            >
              Deployed.Systems
            </div>
          </div>
          <div class="text-right">
            <div class="text-6xl font-black italic text-outline">100%</div>
            <div class="text-[10px] tracking-[0.4em] uppercase">
              Uptime.Architecture
            </div>
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
              >Nos Réalisations</span
            >
          </div>

          <h1
            class="text-6xl md:text-9xl font-medium tracking-tighter leading-[0.85]"
          >
            Impact <br />
            <span class="text-[var(--primary)] text-outline italic"
              >Tangible.</span
            >
          </h1>

          <p
            class="text-sm md:text-base text-[var(--text-muted)] max-w-xl leading-relaxed font-light"
          >
            {{ $t("realisations.description") }}
          </p>
        </div>
      </div>
    </section>

    <section class="py-24">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 gap-32">
          <div
            v-for="(project, idx) in projects"
            :key="idx"
            class="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          >
            <div
              class="lg:col-span-5 space-y-8 order-2"
              :class="idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2 lg:text-right'"
            >
              <div
                :class="[
                  'flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-[var(--primary)]',
                  idx % 2 !== 0 && 'lg:justify-end',
                ]"
              >
                <span
                  class="px-2 py-1 border border-[var(--primary)]/20 rounded-sm"
                  >{{ project.category }}</span
                >
                <span class="w-12 h-px bg-[var(--primary)]/30"></span>
              </div>

              <h2
                class="text-4xl md:text-6xl font-bold tracking-tighter leading-none group-hover:text-[var(--primary)] transition-colors duration-500"
              >
                {{ project.name }}
              </h2>

              <div class="space-y-4">
                <p
                  class="text-[var(--text-muted)] font-light leading-relaxed text-sm md:text-base"
                >
                  <strong
                    class="text-[var(--text-main)] block mb-1 uppercase text-xs tracking-tighter"
                    >Le Défi :</strong
                  >
                  {{ project.challenge }}
                </p>
                <p
                  class="text-[var(--text-muted)] font-light leading-relaxed text-sm md:text-base italic border-l-2 border-[var(--border)] pl-4"
                >
                  "{{ project.quote }}"
                </p>
              </div>

              <div
                :class="[
                  'grid grid-cols-3 gap-4 border-t border-[var(--border)] pt-6',
                  idx % 2 !== 0 && 'lg:justify-items-end text-right',
                ]"
              >
                <div v-for="result in project.results" :key="result.label">
                  <div class="text-xl font-black italic leading-none">
                    {{ result.value }}
                  </div>
                  <div
                    class="text-[8px] uppercase tracking-widest text-[var(--text-muted)] mt-1"
                  >
                    {{ result.label }}
                  </div>
                </div>
              </div>

              <div
                :class="[
                  'flex flex-wrap gap-2',
                  idx % 2 !== 0 && 'lg:justify-end',
                ]"
              >
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="text-[9px] font-mono border border-[var(--border)] px-2 py-1 opacity-60"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <div
              class="lg:col-span-7 relative group order-1"
              :class="idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'"
            >
              <div
                class="relative overflow-hidden bg-black aspect-video rounded-sm border border-[var(--border)] group-hover:border-[var(--primary)]/50 transition-all duration-700"
              >
                <img
                  v-if="project.image"
                  :src="project.image"
                  class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 group-hover:grayscale-0"
                />
                <div
                  class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 backdrop-blur-sm transition-all duration-500"
                >
                  <a
                     v-if="project.link"
                     :href="project.link"
                     target="_blank"
                     class="px-6 py-2 bg-[var(--primary)] text-black text-xs font-black uppercase tracking-widest"
                   
                  >
                    Explorer l'Architecture
                  </a
                     v-if="project.link"
                     :href="project.link"
                     target="_blank"
                     class="px-6 py-2 bg-[var(--primary)] text-black text-xs font-black uppercase tracking-widest">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="py-24  border-y border-[var(--border)] overflow-hidden relative"
    >
      <div
        class="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none"
      >
        <div class="text-[30vw] font-black italic">METRICS</div>
      </div>

      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          <div
            v-for="(stat, index) in statistics"
            :key="stat.id"
            class="flex flex-col items-center text-center group"
          >
            <div
              class="text-[8px] font-black uppercase tracking-[0.4em] text-[var(--primary)] mb-4 opacity-70 group-hover:opacity-100 transition-opacity"
            >
              // {{ stat.label }}
            </div>
            <div
              class="text-5xl md:text-7xl font-black italic tracking-tighter text-[var(--text-main)] group-hover:scale-110 transition-transform duration-500"
            >
              {{ stat.number }}
            </div>
            <div
              class="w-8 h-px bg-[var(--border)] mt-4 group-hover:w-full transition-all duration-700"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-[var(--background)]">
      <div class="max-w-7xl mx-auto px-4">
        <div class="mb-16">
          <h2
            class="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--primary)] mb-4 italic"
          >
            Feedbacks Clients
          </h2>
          <p class="text-4xl md:text-6xl font-medium tracking-tighter italic">
            Ils valident <span class="text-outline">l'architecture.</span>
          </p>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-[var(--border)]"
        >
          <div
            v-for="(testimonial, idx) in testimonials"
            :key="idx"
            class="p-10 border-r border-b border-[var(--border)] hover:bg-[var(--primary)]/[0.02] transition-colors group"
          >
            <div
              class="flex gap-1 mb-6 opacity-30 group-hover:opacity-100 transition-opacity"
            >
              <span
                v-for="i in 5"
                :key="i"
                class="w-1.5 h-1.5 bg-[var(--primary)] rounded-full"
              ></span>
            </div>

            <p
              class="text-[var(--text-muted)] font-light leading-relaxed mb-8 text-sm md:text-base italic"
            >
              "{{ testimonial.text }}"
            </p>

            <div class="flex items-center gap-4">
              <div class="w-8 h-px bg-[var(--primary)]"></div>
              <div>
                <p
                  class="text-xs font-black uppercase tracking-widest text-[var(--text-main)]"
                >
                  {{ testimonial.author }}
                </p>
                <p class="text-[10px] uppercase text-[var(--text-muted)]">
                  {{ testimonial.company }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
<template>
  <section class="relative py-32 overflow-hidden">
    <div
      class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"
    ></div>

    <div class="max-w-4xl mx-auto px-4 text-center relative z-10">
      <div class="inline-block mb-6">
        <div
          class="px-4 py-1 border border-[var(--primary)]/30 rounded-full text-[9px] font-black uppercase tracking-[0.3em] text-[var(--primary)]"
        >
          Prêt pour la suite ?
        </div>
      </div>

      <h2
        class="text-5xl md:text-7xl font-medium tracking-tighter mb-8 leading-[0.9]"
      >
        Votre projet mérite une <br />
        <span class="text-[var(--primary)] italic font-black"
          >Ingénierie d'Élite.</span
        >
      </h2>

      <p class="text-[var(--text-muted)] mb-12 max-w-xl mx-auto font-light">
        Ne vous contentez pas d'un site. Construisons un système robuste,
        scalable et performant.
      </p>

      <router-link
        to="/contact"
        class="group relative inline-flex items-center justify-center px-12 py-5 bg-[var(--primary)] text-black font-black uppercase text-xs tracking-[0.2em] overflow-hidden transition-all"
      >
        <span class="relative z-10">Démarrer l'Audit</span>
        <div
          class="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"
        ></div>
      </router-link>
    </div>
  </section>
</template>
   
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
