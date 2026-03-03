<template>
  <section class="py-24 bg-transparent font-medium tracking-tight">
    <div class="max-w-3xl mx-auto px-4">
      <div class="mb-16">
        <div
          class="inline-block px-3 py-1 border border-[var(--primary)]/30 rounded-full mb-4"
        >
          <span
            class="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--primary)]"
            >FAQ</span
          >
        </div>
        <h2
          class="text-3xl md:text-4xl font-medium tracking-tighter text-[var(--text-main)]"
        >
          Questions Fréquentes
        </h2>
      </div>

      <div class="space-y-0">
        <div
          v-for="(faq, idx) in faqs"
          :key="idx"
          class="border-b border-[var(--border)] py-6 group transition-all"
        >
          <button
            @click="faq.open = !faq.open"
            class="w-full flex items-center justify-between text-left group"
          >
            <h3
              :class="[
                'text-lg transition-colors duration-300 pr-8',
                faq.open
                  ? 'text-[var(--primary)]'
                  : 'text-[var(--text-main)] group-hover:text-[var(--primary)]',
              ]"
            >
              {{ faq.q }}
            </h3>

            <div
              class="flex-shrink-0 text-[var(--text-muted)] group-hover:text-[var(--primary)] transition-transform duration-500"
              :class="{ 'rotate-180': faq.open }"
            >
              <Plus v-if="!faq.open" :size="20" stroke-width="1.5" />
              <Minus v-else :size="20" stroke-width="1.5" />
            </div>
          </button>

          <div
            v-show="faq.open"
            class="mt-4 text-sm text-[var(--text-muted)] leading-relaxed max-w-2xl animate-fade-in"
          >
            {{ faq.a }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Plus, Minus } from "lucide-vue-next";

const faqs = ref([
  {
    q: "Quel est le délai minimum pour un projet ?",
    a: "Un MVP simple peut être livré en 4-6 semaines. Un projet plus complet demande 6-12 mois. Nous établissons une timeline réaliste lors de la consultation.",
    open: false,
  },
  {
    q: "Comment se passent les échanges durant le développement ?",
    a: "Méthodologie agile avec sprints bi-hebdomadaires. Vous testez chaque feature en temps réel sur un environnement de staging dédié.",
    open: false,
  },
  {
    q: "Que se passe-t-il après le lancement ?",
    a: "Support post-launch inclus pour bugs et optimisations. Nous proposons également des contrats de maintenance pour le scaling continu.",
    open: false,
  },
  {
    q: "Quel est le coût pour un développeur dédié ?",
    a: "Accès à un ingénieur senior (backend, frontend ou mobile) à partir de 4,500€/mois pour une intégration directe à votre équipe.",
    open: false,
  },
  {
    q: "Proposez-vous une garantie sur la livraison ?",
    a: "Qualité garantie : 2 semaines de tests intensifs après mise en production. Toute correction liée au périmètre initial est gratuite.",
    open: false,
  },
]);
</script>
