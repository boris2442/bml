import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("../pages/Home.vue"),
  },
  {
    path: "/services",
    name: "services",
    component: () => import("../pages/Services.vue"),
  },
  {
    path: "/realisations",
    name: "realisations",
    component: () => import("../pages/Realisations.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../pages/About.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../pages/Contact.vue"),
  },
  {
    path: "/faq",
    name: "faq",
    component: () => import("../pages/Faq.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
