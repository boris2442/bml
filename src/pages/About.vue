<template>
  <main
    class="bg-[var(--background)] text-[var(--text-main)] selection:bg-[var(--primary)] selection:text-white overflow-hidden"
  >
    <section
      class="relative min-h-[65vh] flex items-center pt-24 pb-16 border-b border-[var(--border)] overflow-hidden"
    >
      <div
        class="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] [background-image:linear-gradient(to_right,var(--text-main)_1px,transparent_1px),linear-gradient(to_bottom,var(--text-main)_1px,transparent_1px)] [background-size:40px_40px]"
      ></div>

      <div class="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div class="max-w-4xl space-y-10 animate-fade-in">
          <div
            class="inline-flex items-center gap-3 px-3 py-1 border border-[var(--primary)]/30 rounded-full bg-[var(--primary)]/5"
          >
            <span
              class="w-1.5 h-1.5 bg-[var(--primary)] rounded-full animate-pulse"
            ></span>
            <span
              class="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--primary)]"
              >Notre Histoire // Est. 2014</span
            >
          </div>

          <h1
            class="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] italic uppercase text-[var(--text-main)]"
          >
            À Propos de <br />
            <span class="text-outline">BodyMac .</span>
          </h1>

          <p
            class="text-lg md:text-xl text-[var(--text-muted)] font-light max-w-2xl leading-relaxed border-l-2 border-[var(--primary)] pl-8 italic"
          >
            "Depuis 10 ans, nous accompagnons les entreprises à transformer
            leurs défis digitaux en opportunités de croissance."
          </p>
        </div>
      </div>
    </section>

    <section class="py-24 bg-[var(--surface)] border-b border-[var(--border)]">
      <div
        class="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
      >
        <div class="lg:col-span-7 space-y-12">
          <h2
            class="text-4xl md:text-6xl font-black tracking-tighter italic uppercase text-[var(--accent)]"
          >
            Notre Mission
          </h2>
          <p class="text-xl text-[var(--text-main)] leading-relaxed font-light">
            BodyMac  transforme les idées ambitieuses en produits digitaux
            qui impactent.
            <span class="text-[var(--primary)] font-bold"
              >Pas de promesses vides.</span
            >
            Juste du code de qualité, des processus rigoureux et des résultats
            mesurables.
          </p>

          <div
            class="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[var(--border)]"
          >
            <div
              v-for="point in missionHighlights"
              :key="point.title"
              class="space-y-2 group"
            >
              <div
                class="text-[var(--primary)] font-black text-xs uppercase tracking-widest flex items-center gap-2"
              >
                <span
                  class="w-4 h-[1px] bg-[var(--primary)] group-hover:w-8 transition-all"
                ></span>
                {{ point.title }}
              </div>
              <p class="text-[10px] text-[var(--text-muted)] uppercase">
                {{ point.desc }}
              </p>
            </div>
          </div>
        </div>

        <div
          class="lg:col-span-5 bg-[var(--background)] border border-[var(--border)] p-12 relative shadow-xl"
        >
          <div
            class="absolute -top-px -left-px w-6 h-6 border-t-2 border-l-2 border-[var(--primary)]"
          ></div>
          <div class="space-y-12">
            <div v-for="stat in stats" :key="stat.label" class="group">
              <div
                class="text-7xl font-black text-[var(--primary)] italic leading-none group-hover:translate-x-3 transition-transform"
              >
                {{ stat.value }}
              </div>
              <p
                class="text-[10px] uppercase tracking-[0.5em] text-[var(--text-muted)] mt-2"
              >
                {{ stat.label }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="py-24 bg-[var(--background)]">
      <div class="max-w-7xl mx-auto px-4">
        <div class="mb-16">
          <p
            class="text-[10px] font-black uppercase tracking-[0.6em] text-[var(--accent)] mb-4"
          >
            // L'ÉQUIPE EXPERTE
          </p>
          <h2
            class="text-4xl md:text-6xl font-black tracking-tighter italic leading-none uppercase"
          >
            Crafting Excellence.
          </h2>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[var(--border)] gap-2 overflow-hidden"
        >
          <div
            v-for="(member, idx) in team"
            :key="idx"
            class="group relative aspect-[3/4] border-r border-b border-[var(--border)] overflow-hidden bg-[var(--surface)]"
          >
            <img
              v-if="member.photo"
              :src="member.photo"
              :alt="member.name"
              class="absolute inset-0 w-full h-full object-cover group-hover:grayscale grayscale-0 opacity-100 transition-all duration-700 rounded-sm"
              :loading="'lazy'"
            />
            <div
              v-else
              class="absolute inset-0 flex items-center justify-center text-7xl opacity-10"
            >
              {{ member.icon }}
            </div>

            <div
              class="absolute inset-0 bg-gradient-to-t from-[var(--accent)]/90 via-[var(--accent)]/20 to-transparent flex flex-col justify-end p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500"
            >
              <span
                class="text-[9px] font-black text-[var(--primary)] uppercase tracking-[0.3em] mb-2"
                >{{ member.title }}</span
              >
              <h3
                class="text-2xl font-black italic uppercase leading-none mb-4 text-white tracking-tighter"
              >
                {{ member.name }}
              </h3>

              <div
                class="space-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
              >
                <p
                  class="text-[11px] text-white/80 leading-relaxed font-light italic"
                >
                  {{ member.bio }}
                </p>
                <div class="pt-4 border-t border-white/20">
                  <p
                    class="text-[9px] font-bold text-[var(--primary)] uppercase tracking-widest"
                  >
                    Expertise: {{ member.skills }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <section class="py-24 bg-[var(--background)] overflow-hidden">
      <div class="max-w-7xl mx-auto px-4">
        <div class="mb-20 relative">
          <div
            class="absolute -left-4 top-0 bottom-0 w-1 bg-[var(--primary)] shadow-[0_0_15px_var(--primary)]"
          ></div>
          <div class="pl-8">
            <p
              class="text-[10px] font-black uppercase tracking-[0.8em] text-[var(--primary)] mb-4 opacity-80"
            >
              // High-Performance Collective
            </p>
            <h2
              class="text-5xl md:text-7xl font-black tracking-tighter italic leading-none uppercase text-[var(--text-main)]"
            >
              L'Élite <span class="text-outline">Technique.</span>
            </h2>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="(member, idx) in team"
            :key="idx"
            class="group relative aspect-[3/4] overflow-hidden bg-[var(--surface)] border border-[var(--border)] transition-all duration-500 hover:border-[var(--primary)]/50"
          >
            <div
              class="absolute inset-0 z-0 opacity-5 group-hover:opacity-10 transition-opacity"
            >
              <div
                class="absolute inset-0"
                style="
                  background-image:
                    linear-gradient(var(--border) 1px, transparent 1px),
                    linear-gradient(90deg, var(--border) 1px, transparent 1px);
                  background-size: 20px 20px;
                "
              ></div>
            </div>

            <img
              v-if="member.photo"
              :src="member.photo"
              :alt="member.name"
              class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700 z-10 group-hover:grayscale grayscale-0 opacity-100 rounded-sm"
              loading="lazy"
            />
            <div
              v-else
              class="absolute inset-0 flex items-center justify-center text-8xl opacity-10 z-10"
            >
              {{ member.icon }}
            </div>

            <div
              class="absolute inset-0 bg-gradient-to-t from-[var(--accent)] via-[var(--accent)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
            ></div>

            <div
              class="absolute inset-0 z-30 p-8 flex flex-col justify-end translate-y-12 group-hover:translate-y-0 transition-transform duration-500"
            >
              <div
                class="mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100"
              >
                <span
                  class="px-2 py-1 text-[8px] font-black bg-[var(--primary)] text-white uppercase tracking-widest"
                >
                  {{ member.skills }} // EXPERT
                </span>
              </div>

              <h3
                class="text-2xl font-black italic uppercase text-white tracking-tighter leading-none mb-1"
              >
                {{ member.name }}
              </h3>
              <p
                class="text-[9px] font-bold text-[var(--primary)] uppercase tracking-[0.2em] mb-4"
              >
                {{ member.title }}
              </p>

              <div
                class="max-h-0 group-hover:max-h-32 overflow-hidden transition-all duration-700 ease-in-out"
              >
                <p
                  class="text-[11px] text-white/70 leading-relaxed font-light italic border-t border-white/10 pt-4"
                >
                  {{ member.bio }}
                </p>
              </div>
            </div>

            <div
              class="absolute top-0 right-0 w-8 h-8 border-t border-r border-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity z-40"
            ></div>
            <div
              class="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity z-40"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="py-24 bg-[var(--surface)] border-y border-[var(--border)] relative overflow-hidden"
    >
      <div class="max-w-4xl mx-auto px-4 relative z-10">
        <h2
          class="text-center text-[10px] font-black uppercase tracking-[0.6em] text-[var(--primary)] mb-20"
        >
          // MILESTONES
        </h2>

        <div class="relative space-y-16">
          <!-- Ligne verticale -->
          <div
            class="absolute left-[7px] top-0 bottom-0 w-px bg-[var(--border)]"
          ></div>

          <!-- Timeline items -->
          <div
            v-for="(item, idx) in timeline"
            :key="idx"
            class="relative pl-12 group"
          >
            <div
              class="absolute left-0 top-2 w-4 h-4 bg-[var(--background)] border-2 border-[var(--primary)] group-hover:scale-125 transition-transform rounded-full z-10"
            ></div>
            <div
              class="text-4xl font-black italic text-[var(--accent)] leading-none mb-2 group-hover:text-[var(--primary)] transition-colors"
            >
              {{ item.year }}
            </div>
            <p
              class="text-lg font-medium text-[var(--text-main)] max-w-2xl leading-snug"
            >
              {{ item.title }}
            </p>
          </div>
        </div>
      </div>

      <!-- Texte en arrière-plan -->
      <div
        class="absolute inset-0 flex flex-col justify-between px-4 py-24 pointer-events-none"
      >
        <span
          v-for="item in timeline"
          :key="item.year"
          class="text-[8rem] font-extrabold text-[var(--primary)] opacity-5 select-none"
        >
          {{ item.year }}
        </span>
      </div>
    </section>

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
  </main>
</template>

<script setup>
// import { RouterLink } from "vue-router";
// import Call from '@/components/Call.vue';

const stats = [
  { label: "Années de Présence", value: "10+" },
  { label: "Projets Livrés", value: "50+" },
  { label: "Clients en Confiance", value: "30+" },
];
const missionHighlights = [
  { title: "Qualité d'Abord", desc: "Code audité, testé et optimisé." },
  { title: "Partenariat", desc: "On dépasse le client-prestataire." },
  { title: "Responsabilité", desc: "Délais et budgets respectés." },
];

// const team = [
//   {
//     icon: "🖥️",
//     name: "Lontsi Parfait",
//     title: "Développeur Back-end",
//     bio: "Architecture système et monitoring applicatif.",
//     skills: "Laravel, Microservices, DevOps",
//     photo: "/img/equipe/parfait.png",
//   },
//   {
//     icon: "🖥️",
//     name: "Mciagnessi Dominique",
//     title: "Développeur Back-end",
//     bio: "Gestion des API et performance serveur.",
//     skills: "Laravel, SQL, REST",
//     photo: "/img/equipe/mciagnessi dominique.jpg",
//   },
//   {
//     icon: "💻",
//     name: "Nguimfack Yannick",
//     title: "Développeur Front-end",
//     bio: "Optimisation UX et composants interactifs.",
//     skills: "Vue.js, React, UI/UX",
//     photo: "/img/equipe/yannick.png",
//   },
//   {
//     icon: "💻",
//     name: "Simo Boris",
//     title: "Développeur Front-end",
//     bio: "Expérience utilisateur et interfaces modernes.",
//     skills: "Vue.js, React, Tailwind",
//     photo: "/img/equipe/aubin.jpeg",
//   },
//   // Ajoute les autres membres ici...
// ];

const team = [
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
    icon: "🖥️",
    name: "Mciagnessi Dominique",
    title: "Développeur Back-end",
    bio: "Développement et maintenance des API, gestion des bases de données, sécurité et performance côté serveur.",
    skills: "Laravel, SQL, REST",
    gradientClass: "from-gray-100 to-gray-50",
    photo: "/img/equipe/dominique.png",
  },
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
    icon: "💻",
    name: "Simo Boris",
    title: "Développeur Front-end",
    bio: "Optimisation de l’expérience utilisateur, création d’interfaces modernes et performantes.",
    skills: "Vue.js, React, Performance",
    gradientClass: "from-gray-100 to-gray-50",
    photo: "/img/equipe/aubin.png",
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
    icon: "🎨",
    name: "Waffo Rostand",
    title: "Conseiller technique & Designer web",
    bio: "Conseil technique, conception graphique et design web, veille sur les tendances UI/UX.",
    skills: "Design web, UI/UX, Conseil, DevOps, Formateur",
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
    title: "Fondation de BodyMac . Focus sur l'ingénierie logicielle pure.",
  },
  {
    year: "2018",
    title: "Expansion internationale et premiers clients grands comptes.",
  },
  {
    year: "2024",
    title: "Leader digital avec plus de 50 projets livrés avec succès.",
  },
];
</script>

<style scoped>
.text-outline {
  -webkit-text-stroke: 1px var(--text-main);
  color: transparent;
}
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.text-outline {
  -webkit-text-stroke: 1px var(--text-main);
  color: transparent;
}

/* Effet de lueur sur le nom au survol */
.group:hover h3 {
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
}
</style>
