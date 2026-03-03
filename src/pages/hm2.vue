<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  ArrowRight,
  Target,
  Zap,
  BarChart3,
  Globe,
  Smartphone,
  Cloud,
  ChevronRight,
  CheckCircle2,
  Award,
  Users,
  Timer,
  ShieldCheck,
  Layers,
  Headphones,
  Rocket,
  Search,
} from "lucide-vue-next";

// 1. Logique des Compteurs Animés
const stats = ref([
  { label: "Projets Livrés", value: 50, current: 0, suffix: "+" },
  { label: "Clients Heureux", value: 30, current: 0, suffix: "+" },
  { label: "D'Expertise", value: 10, current: 0, suffix: "ans" },
]);

onMounted(() => {
  stats.value.forEach((s) => {
    let start = 0;
    const duration = 1200; // Animation rapide (1.2s)
    const startTime = performance.now();
    const update = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const easeOutQuad = (t: number) => t * (2 - t);
      s.current = Math.floor(easeOutQuad(progress) * s.value);
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  });
});

// 2. Contenu Intégral - Services
const topServices = [
  {
    icon: Globe,
    title: "Web Modernisation",
    desc: "Transformez vos sites legacy en applications web ultra-performantes avec technologies latest-gen",
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

// 3. Contenu Intégral - Pourquoi BodyMac Labs (6 bénéfices)
const benefits = [
  {
    icon: Users,
    title: "Équipe Senior",
    desc: "Nos experts ont 10+ ans d'expérience moyenne. Zero junior developers.",
  },
  {
    icon: Target,
    title: "100% Custom",
    desc: "Pas de template. Chaque pixel est pensé pour vos objectifs.",
  },
  {
    icon: Layers,
    title: "De la Stratégie",
    desc: "On ne code pas sans plan. Étude, roadmap, validation d'hypothèses.",
  },
  {
    icon: Headphones,
    title: "Support Illimité",
    desc: "Post-launch, on reste. Support, optimisations, évolutions continues.",
  },
  {
    icon: ShieldCheck,
    title: "Qualité Garantie",
    desc: "Tests automatisés, code review, monitoring 24/7 en production.",
  },
  {
    icon: Timer,
    title: "Délais Respectés",
    desc: "Méthodologie agile. Transparence totale. Zéro dérive budgétaire.",
  },
];

// 4. Contenu Intégral - Les 5 Projets
const featuredProjects = [
  {
    image: "/img/acadecol.png",
    name: "Acadecol",
    category: "Plateforme éducative",
    result:
      "Solution digitale pour la gestion scolaire, adoption nationale, impact sur 100+ établissements.",
    tech: ["Laravel", "Vue.js", "MySQL"],
  },
  {
    image: "/img/Boris-Tech.png",
    name: "Boristech",
    category: "Tech & Innovation",
    result:
      "Développement d'outils sur-mesure pour PME, automatisation des processus, gain de productivité.",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  {
    image: "/img/Stella-Wabo.png",
    name: "Stella Wabo",
    category: "Branding & Web",
    result:
      "Création d'une identité visuelle forte et site web performant pour une artiste reconnue.",
    tech: ["WordPress", "Figma", "SEO"],
  },
  {
    image: "/img/abec.png",
    name: "ABEC",
    category: "Plateforme sociale",
    result:
      "Plateforme de bien-être universel, accès direct à universalwelfare.org, impact international.",
    tech: ["Laravel", "Vue.js", "MySQL"],
    link: "https://universalwelfare.org/",
  },
  {
    image: "/img/studenapp.png",
    name: "StudentApp",
    category: "Mobile & Web",
    result:
      "Plateforme pour 50k+ étudiants. Réduction du taux d'absentéisme de 40%.",
    tech: ["React Native", "Node.js"],
    link: "https://studentapp.espacecameroun.com/",
  },
];
</script>
<template>
  <main
    class="bg-[var(--background)] text-[var(--text-main)] overflow-x-hidden"
  >
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
            <button
              class="px-8 py-4 bg-[var(--primary)] text-white font-black rounded-xl hover:-translate-y-1 transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2"
            >
              Commencer un Projet <ArrowRight :size="20" />
            </button>
            <button
              class="px-8 py-4 border-2 border-[var(--border)] font-bold rounded-xl hover:bg-[var(--surface)] transition-all"
            >
              Nos Cas d'Usage
            </button>
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
                <component :is="i === 0 ? Target : i === 1 ? Zap : BarChart3" />
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

    <section class="py-24 bg-[var(--surface)]">
      <div class="max-w-7xl mx-auto px-4 text-center mb-16">
        <h2 class="text-4xl font-black mb-4">Notre Expertise</h2>
        <p class="text-[var(--text-muted)]">
          Des solutions end-to-end pour tous vos enjeux digitaux.
        </p>
      </div>
      <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="service in topServices"
          :key="service.title"
          class="p-8 bg-[var(--background)] border border-[var(--border)] rounded-3xl hover:border-[var(--primary)] transition-all group"
        >
          <div
            class="w-14 h-14 bg-[var(--primary)]/10 rounded-2xl flex items-center justify-center text-[var(--primary)] mb-6 group-hover:bg-[var(--primary)] group-hover:text-white transition-all"
          >
            <component :is="service.icon" />
          </div>
          <h3 class="text-xl font-bold mb-4">{{ service.title }}</h3>
          <p class="text-[var(--text-muted)] mb-6 text-sm">
            {{ service.desc }}
          </p>
          <a
            href="#"
            class="text-[var(--primary)] font-bold inline-flex items-center gap-2"
            >En savoir plus <ChevronRight :size="16"
          /></a>
        </div>
      </div>
    </section>

    <section class="py-24 bg-[var(--background)]">
      <div
        class="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
      >
        <div class="space-y-8">
          <h2 class="text-4xl font-black leading-tight">
            Pourquoi les Meilleurs Choisissent BodyMac Labs
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div
              v-for="b in benefits"
              :key="b.title"
              class="flex gap-4 p-4 rounded-xl hover:bg-[var(--surface)] transition-all"
            >
              <div
                class="flex-shrink-0 w-10 h-10 bg-[var(--primary)] rounded-lg flex items-center justify-center text-white"
              >
                <component :is="b.icon" :size="20" />
              </div>
              <div>
                <h3 class="font-bold text-sm">{{ b.title }}</h3>
                <p class="text-[12px] text-[var(--text-muted)]">{{ b.desc }}</p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="bg-[var(--primary)]/5 border border-[var(--primary)]/20 p-12 rounded-[40px] text-center"
        >
          <div class="text-7xl font-black text-[var(--primary)] mb-2">95%</div>
          <p
            class="font-bold uppercase tracking-widest text-[var(--text-muted)]"
          >
            Satisfaction Client
          </p>
          <div class="h-[1px] bg-[var(--border)] my-8"></div>
          <div class="text-7xl font-black text-[var(--primary)] mb-2">2.5x</div>
          <p
            class="font-bold uppercase tracking-widest text-[var(--text-muted)]"
          >
            ROI Moyen
          </p>
        </div>
      </div>
    </section>

    <section class="py-24 bg-[var(--surface)]">
      <div class="max-w-7xl mx-auto px-4 mb-16">
        <h2 class="text-4xl font-black">Nos Derniers Succès</h2>
      </div>
      <div
        class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <div
          v-for="p in featuredProjects"
          :key="p.name"
          class="bg-[var(--background)] rounded-[32px] overflow-hidden border border-[var(--border)] hover:border-[var(--primary)] transition-all group"
        >
          <div class="h-60 overflow-hidden relative">
            <img
              :src="p.image"
              :alt="p.name"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div
              class="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-white text-[10px] font-bold uppercase"
            >
              {{ p.category }}
            </div>
          </div>
          <div class="p-8">
            <h3 class="text-xl font-bold mb-2">{{ p.name }}</h3>
            <p class="text-sm text-[var(--text-muted)] mb-6">{{ p.result }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="t in p.tech"
                :key="t"
                class="px-2 py-1 bg-[var(--primary)]/10 text-[var(--primary)] text-[10px] font-black rounded uppercase"
                >{{ t }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 py-20">
      <div
        class="bg-[var(--primary)] p-12 md:p-24 rounded-[50px] text-center text-white relative overflow-hidden shadow-2xl shadow-orange-500/30"
      >
        <h2 class="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
          Prêt à Lancer Votre Projet ?
        </h2>
        <p class="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
          Rejoignez nos 30+ clients satisfaits. Discutons de vos ambitions dès
          aujourd'hui.
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            class="px-12 py-5 bg-white text-[var(--primary)] font-black rounded-2xl hover:scale-105 transition-all"
          >
            Planifier une Consultation
          </button>
          <button
            class="px-12 py-5 border-2 border-white/40 font-black rounded-2xl hover:bg-white/10 transition-all"
          >
            Nous Contacter
          </button>
        </div>
      </div>
    </section>
  </main>
</template>
