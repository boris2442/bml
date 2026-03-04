<template>
  <main class="bg-[var(--background)] text-[var(--text-main)]">
    <section class="relative py-20 md:py-32">
      <div
        class="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        <div class="space-y-8 animate-fade-in">
          <div
            class="inline-flex items-center gap-3 px-4 py-2 bg-[var(--primary)]/10 rounded-full border border-[var(--primary)]/20"
          >
            <span
              class="w-2 h-2 bg-[var(--primary)] rounded-full animate-ping"
            ></span>
            <span
              class="text-sm font-black text-[var(--primary)] uppercase tracking-widest"
              >Agence Digitale Innovante</span
            >
          </div>
          <h1
            class="text-5xl md:text-7xl font-black leading-tight tracking-tighter"
          >
            Transformez Votre Vision
            <span class="text-[var(--primary)]">en Réalité Digitale</span>
          </h1>
          <p class="text-lg text-[var(--text-muted)] max-w-lg">
            BodyMac Labs accompagne les entreprises ambitieuses à transformer
            leurs défis numériques en opportunités. Stratégie. Technologie.
            Résultats.
          </p>

          <div
            class="grid grid-cols-3 gap-6 pt-8 border-t border-[var(--border)]"
          >
            <div v-for="s in stats" :key="s.label">
              <div class="text-3xl font-black text-[var(--primary)]">
                {{ s.current }}{{ s.suffix }}
              </div>
              <p
                class="text-[10px] uppercase font-bold text-[var(--text-muted)] tracking-widest"
              >
                {{ s.label }}
              </p>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-4">
            <RouterLink
              to="/contact"
              class="px-8 py-4 bg-[var(--primary)] text-white font-black rounded hover:-translate-y-1 transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2"
            >
              Commencer un Projet <ArrowRight :size="20" />
            </RouterLink>
            <!-- <button
              class="px-8 py-4 border-2 border-[var(--border)] font-bold rounded-xl hover:bg-[var(--surface)] transition-all"
            >
              Nos Cas d'Usage
            </button> -->
          </div>
        </div>

        <div class="hidden lg:grid grid-cols-1 gap-4">
          <div
            v-for="(feat, i) in ['Stratégie', 'Technologie', 'Résultats']"
            :key="i"
            class="p-8 bg-[var(--surface)] border border-[var(--border)] rounded-2xl hover:border-[var(--primary)] transition-all group"
          >
            <div class="flex items-center gap-6">
              <div
                class="p-4 bg-[var(--primary)]/10 rounded-xl text-[var(--primary)]"
              >
                <!-- <component :is="i === 0 ? Target : i === 1 ? Zap : BarChart3" /> -->
              </div>
              <div>
                <h3 class="text-xl font-bold">{{ feat }}</h3>
                <p class="text-sm text-[var(--text-muted)]">
                  Expertise Certifiée BodyMac
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      ref="statsSection"
      class="py-16 border-y border-[var(--border)] bg-transparent"
    >
      <div class="max-w-5xl mx-auto px-4">
        <div class="grid grid-cols-3 divide-x divide-[var(--border)]">
          <div
            v-for="s in stats"
            :key="s.label"
            class="flex flex-col items-center justify-center px-4"
          >
            <div
              class="text-3xl md:text-5xl font-medium text-[var(--text-main)] mb-1 tracking-tight"
            >
              {{ s.current
              }}<span class="text-[var(--primary)] ml-0.5">{{ s.suffix }}</span>
            </div>

            <p
              class="text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)] font-semibold"
            >
              {{ s.label }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="pt-4 bg-transparent">
      <div class="max-w-7xl mx-auto px-4 mb-20">
        <div
          class="inline-block px-3 py-1 border border-[var(--primary)]/30 rounded-full mb-2"
        >
          <span
            class="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--primary)]"
            >Expertise</span
          >
        </div>
        <h2 class="text-3xl md:text-4xl font-medium tracking-tight">
          Des solutions end-to-end pour <br />
          vos enjeux digitaux.
        </h2>
      </div>

      <div
        class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12"
      >
        <div
          v-for="service in topServices"
          :key="service.title"
          class="relative group pt-8 border-t border-[var(--border)] hover:border-[var(--primary)] transition-all duration-500"
        >
          <div
            class="mb-6 text-[var(--text-muted)] group-hover:text-[var(--primary)] transition-colors"
          >
            <component :is="service.icon" :size="32" stroke-width="1.5" />
          </div>

          <h3 class="text-xl font-semibold mb-3 tracking-tight">
            {{ service.title }}
          </h3>

          <p
            class="text-[var(--text-muted)] mb-6 text-sm leading-relaxed max-w-xs"
          >
            {{ service.desc }}
          </p>

          <a
            href="#"
            class="text-[10px] uppercase font-bold tracking-[0.2em] text-[var(--text-main)] flex items-center gap-2 group-hover:text-[var(--primary)] transition-colors"
          >
            Découvrir
            <ChevronRight
              :size="12"
              class="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>

    <section class="py-12 pb-0 font-medium tracking-tight">
      <div class="max-w-7xl mx-auto px-4 mb-16">
        <h2 class="text-4xl font-medium tracking-tight">Nos Derniers Succès</h2>
      </div>
      <div
        class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        <div
          v-for="p in featuredProjects"
          :key="p.name"
          class="group relative bg-[var(--surface)] rounded-[32px] overflow-hidden border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-500"
        >
          <div class="overflow-hidden relative w-[400px] h-48">
            <img
              :src="p.image"
              :alt="p.name"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
            >
              <a
                v-if="p.link"
                :href="p.link"
                target="_blank"
                class="px-6 py-3 bg-white text-black font-black rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform"
              >
                Visiter le site <ExternalLink :size="16" />
              </a>
            </div>
          </div>

          <div class="p-8">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-2xl font-black">{{ p.name }}</h3>
                <p
                  v-if="p.link"
                  class="text-[var(--primary)] text-xs font-bold font-mono tracking-tighter opacity-80 mt-1"
                >
                  {{ p.link.replace("https://", "").replace("www.", "") }}
                </p>
              </div>
            </div>
            <p class="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
              {{ p.result }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="t in p.tech"
                :key="t"
                class="px-3 py-1 bg-[var(--background)] border border-[var(--border)] text-[10px] font-black rounded-full uppercase"
                >{{ t }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 py-2 font-medium tracking-tight">
      <div
        class="relative py-20 border-t border-[var(--border)] overflow-hidden"
      >
        <div
          class="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/5 to-transparent pointer-events-none"
        ></div>

        <div class="relative z-10 space-y-10">
          <div class="flex justify-start">
            <span
              class="px-4 py-1.5 border border-[var(--primary)]/20 rounded-full text-[10px] font-black uppercase tracking-[0.4em] text-[var(--primary)]"
            >
              Contact & Collaboration
            </span>
          </div>

          <h2
            class="text-4xl md:text-7xl font-medium tracking-tighter text-[var(--text-main)] max-w-4xl leading-[1.05]"
          >
            Prêt à transformer votre vision <br />
            <span class="text-[var(--primary)]">en produit d'exception ?</span>
          </h2>

          <p
            class="text-sm md:text-base text-[var(--text-muted)] max-w-xl leading-relaxed font-light"
          >
            Rejoignez nos 30+ partenaires. <br />
            Discutons de vos ambitions technologiques dès aujourd'hui.
          </p>

          <div class="flex flex-col sm:flex-row gap-10 items-center pt-6">
            <RouterLink
              to="/contact"
              class="group flex items-center gap-4 text-sm font-black uppercase tracking-widest text-[var(--text-main)] hover:text-[var(--primary)] transition-colors"
            >
              Planifier un appel
              <div
                class="w-10 h-10 rounded-full border border-[var(--border)] group-hover:border-[var(--primary)] flex items-center justify-center transition-all"
              >
                <ArrowRight
                  :size="16"
                  class="group-hover:translate-x-1 transition-transform"
                />
              </div>
            </RouterLink>

            <div class="hidden sm:block w-[1px] h-8 bg-[var(--border)]"></div>

            <button
              class="text-sm font-black uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
            >
              Nous écrire
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  ExternalLink,
  Globe,
  Smartphone,
  Cloud,
  ArrowRight,
  Router,
  ChevronRight,
} from "lucide-vue-next";
import confetti from "canvas-confetti";

const statsSection = ref(null);
const hasAnimated = ref(false);

const stats = ref([
  { label: "Projets Livrés", value: 50, current: 0, suffix: "+" },
  { label: "Clients Heureux", value: 30, current: 0, suffix: "+" },
  { label: "D'Expertise", value: 10, current: 0, suffix: "ans" },
]);

const featuredProjects = [
  {
    image: "/img/acadecol.png",
    name: "Acadecol",
    result: "Solution digitale pour la gestion scolaire, adoption nationale.",
    tech: ["Laravel", "Vue.js"],
    link: "https://acadecol.com",
  },
  {
    image: "/img/Boris-Tech.png",
    name: "Boris Tech",
    result: "Automatisation des processus PME et services informatiques.",
    tech: ["React", "Node.js"],
    link: "https://boristech.cm",
  },
  {
    image: "/img/Stella-Wabo.png",
    name: "Stella Wabo",
    result: "Identité visuelle et portfolio haut de gamme.",
    tech: ["WordPress", "SEO"],
    link: "https://stellawabo.com",
  },
  {
    image: "/img/abec.png",
    name: "ABEC",
    result: "Plateforme de bien-être universel et impact international.",
    tech: ["Laravel", "MySQL"],
    link: "https://universalwelfare.org/",
  },
  {
    image: "/img/studenapp.png",
    name: "StudentApp",
    result: "Gestion académique pour 50k+ étudiants.",
    tech: ["Inertia.js", "Tailwind"],
    link: "https://studentapp.espacecameroun.com/",
  },
];

const triggerConfetti = () => {
  const duration = 3 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ["#0A1B9E", "#FFE600", "#F39200"], // Tes couleurs de marque
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ["#0A1B9E", "#FFE600", "#F39200"],
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};

const animateNumbers = () => {
  stats.value.forEach((s, index) => {
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const update = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      s.current = Math.floor(progress * s.value);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else if (index === stats.value.length - 1) {
        // Déclenche l'explosion de joie quand le DERNIER chiffre finit
        triggerConfetti();
      }
    };
    requestAnimationFrame(update);
  });
};

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !hasAnimated.value) {
        animateNumbers();
        hasAnimated.value = true;
      }
    },
    { threshold: 0.6 },
  );

  if (statsSection.value) observer.observe(statsSection.value);
});

// 2. Contenu Intégral - Services
const topServices = [
  {
    icon: Globe,
    title: "Modernisation Web",
    desc: "Ne laissez plus vos anciens systèmes freiner votre croissance. Nous transformons vos infrastructures existantes en solutions web fluides, sécurisées et évolutives.",
  },
  {
    icon: Smartphone,
    title: "Apps Mobiles Premier",
    desc: "Développement iOS/Android natives pour maximum de performance et user experience",
  },
  {
    icon: Cloud,
    title: "Cloud & Scalabilité",
    desc: "Architecture cloud-native pour croissance sans limites et zéro downtime",
  },
];
</script>
