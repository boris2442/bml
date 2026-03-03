<template>
  <header
    :class="[
      'sticky top-0 z-50 transition-transform duration-300 w-full border-b border-[var(--border)]',
      isVisible ? 'translate-y-0' : '-translate-y-full',
    ]"
    style="background-color: var(--background)"
  >
    <nav class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between h-20">
        <RouterLink to="/" class="flex items-center group">
          <div
            class="p-2 rounded-xl transition-all duration-300 group-hover:bg-[var(--surface)]"
          >
            <img
              src="/img/bmllogo.jpeg"
              alt="BodyMacs"
              class="w-10 h-10 rounded-lg object-cover"
            />
          </div>
        </RouterLink>

        <ul class="hidden md:flex items-center h-full">
          <li v-for="route in navRoutes" :key="route.name" class="h-full">
            <RouterLink
              :to="route.path"
              class="flex flex-col items-center justify-center px-6 h-full text-[var(--text-muted)] hover:text-[var(--primary)] transition-all relative group"
            >
              <component :is="route.icon" :size="24" class="mb-1" />
              <span class="text-[10px] uppercase tracking-wider font-bold">
                {{ $t(`nav.${route.label}`) }}
              </span>

              <span
                class="absolute bottom-0 left-0 w-full h-1 bg-[var(--primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-full"
              ></span>
            </RouterLink>
          </li>
        </ul>

        <div class="flex items-center gap-2">
          <button
            @click="toggleDarkMode"
            class="p-3 rounded-full hover:bg-[var(--surface)] text-[var(--text-main)] transition-colors"
          >
            <Sun v-if="isDark" :size="20" />
            <Moon v-else :size="20" />
          </button>
        </div>
      </div>
    </nav>
  </header>

  <div
    class="md:hidden fixed bottom-0 left-0 z-50 w-full h-16 border-t border-[var(--border)] transition-transform duration-300"
    :class="isVisible ? 'translate-y-0' : 'translate-y-full'"
    style="background-color: var(--background)"
  >
    <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
      <RouterLink
        v-for="route in navRoutes"
        :key="route.name"
        :to="route.path"
        class="inline-flex flex-col items-center justify-center px-5 hover:bg-[var(--surface)] group"
        active-class="text-[var(--primary)]"
      >
        <component
          :is="route.icon"
          :size="22"
          class="mb-1 text-[var(--text-muted)] group-hover:text-[var(--primary)] transition-colors"
          :class="{ 'text-[var(--primary)]': $route.path === route.path }"
        />
        <span
          class="text-[10px] text-[var(--text-muted)] group-hover:text-[var(--primary)]"
          :class="{
            'text-[var(--primary)] font-bold': $route.path === route.path,
          }"
        >
          {{ $t(`nav.${route.label}`) }}
        </span>
      </RouterLink>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";
import { useDarkMode, useLanguage } from "../../utils/composables";
import { useI18n } from "vue-i18n";

const { isDark, toggleDarkMode } = useDarkMode();
const { language } = useLanguage();
const { locale } = useI18n();

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

import {
  LayoutGrid, // Pour Services
  Briefcase, // Pour Réalisations
  User, // Pour About
  Mail, // Pour Contact
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-vue-next";

// const navRoutes = [
//   // { path: '/', name: 'home', label: 'home' },
//   { path: "/services", name: "services", label: "services" },
//   { path: "/realisations", name: "realisations", label: "realisations" },
//   { path: "/about", name: "about", label: "about" },
//   { path: "/contact", name: "contact", label: "contact" },
// ];

const changeLanguage = () => {
  locale.value = language.value;
};

const isVisible = ref(true);
const lastScrollPosition = ref(0);

const handleScroll = () => {
  const currentScrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;
  if (currentScrollPosition < 0) return;

  // Cache si on descend, montre si on remonte
  isVisible.value =
    currentScrollPosition < lastScrollPosition.value ||
    currentScrollPosition < 50;
  lastScrollPosition.value = currentScrollPosition;
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));

const navRoutes = [
  { path: "/services", name: "services", label: "services", icon: LayoutGrid },
  {
    path: "/realisations",
    name: "realisations",
    label: "realisations",
    icon: Briefcase,
  },
  { path: "/about", name: "about", label: "about", icon: User },
  { path: "/contact", name: "contact", label: "contact", icon: Mail },
];
</script>
