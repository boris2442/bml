<template>
  <footer
    class="bg-[var(--background)] border-t border-[var(--border)] py-12 font-medium"
  >
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
        <div class="col-span-2 lg:col-span-2 space-y-4">
          <div class="flex items-center gap-2">
            <div
              class="w-6 h-6 border border-[var(--primary)] flex items-center justify-center rounded-md"
            >
              <span
                class="text-[var(--primary)] text-[8px] font-black tracking-tighter"
                >BM</span
              >
            </div>
            <span
              class="text-xs font-bold uppercase tracking-widest text-[var(--text-main)]"
            >
              BodyMac <span class="text-[var(--primary)]">Labs</span>
            </span>
          </div>
          <p
            class="text-[11px] text-[var(--text-muted)] leading-tight max-w-[180px]"
          >
            Ingénierie logicielle & design. <br />
            Architecture First.
          </p>
        </div>

        <div v-for="group in footerLinks" :key="group.title">
          <h4
            class="text-[9px] uppercase tracking-[0.2em] text-[var(--text-main)] font-black mb-4"
          >
            {{ group.title }}
          </h4>
          <ul class="space-y-2">
            <li v-for="link in group.links" :key="link.name">
              <RouterLink
                v-if="link.href.startsWith('/')"
                :to="link.href"
                class="text-[11px] text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors"
              >
                {{ link.name }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="pt-6 border-t border-[var(--border)] flex flex-row justify-between items-center"
      >
        <p
          class="text-[9px] uppercase tracking-widest text-[var(--text-muted)]"
        >
          © {{ new Date().getFullYear() }} BM Labs.
        </p>

        <div class="flex items-center gap-5">
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.href"
            class="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors"
          >
            <component :is="social.icon" :size="14" stroke-width="2" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { Github, Linkedin, Twitter, Globe, Mail } from "lucide-vue-next";

const footerLinks = [
  {
    title: "Produits",
    links: [
      { name: "Services", href: "/services" },
      { name: "Réalisations", href: "/realisations" },
      // { name: "Solutions", href: "/solutions" },
    ],
  },
  // {
  //   title: "Entreprise",
  //   links: [
  //     { name: "À propos", href: "#" },
  //     { name: "Carrières", href: "#" },
  //     { name: "Mentions légales", href: "#" },
  //   ],
  // },
  {
    title: "Support",
    links: [
      { name: "Contact", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "FAQ", href: "/faq" },
    ],
  },
];

const socials = [
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "GitHub", href: "#", icon: Github },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Email", href: "#", icon: Mail },
];
</script>
