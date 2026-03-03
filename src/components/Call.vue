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
<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
