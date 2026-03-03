import { createApp } from "vue";
import { createI18n } from "vue-i18n";
// import './styles/main.css'
import "./styles/style.css";
import App from "./App.vue";
import router from "./router";

const messages = {
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      realisations: "Réalisations",
      about: "À propos",
      contact: "Contact",
    },
    common: {
      startProject: "Commencer un Projet",
      readMore: "En savoir plus",
      contactUs: "Nous Contacter",
      learnMore: "Voir Tous les Services →",
      bookConsultation: "Planifier une Consultation",
    },
    home: {
      badge: "Agence Digitale Innovante",
      title: "Transformez Votre Vision",
      subtitle: "en Réalité Digitale",
      description:
        "BodyMac Labs accompagne les entreprises ambitieuses à transformer leurs défis numériques en opportunités de croissance. Stratégie. Technologie. Résultats.",
      statsProjects: "Projets Livrés",
      statsClients: "Clients Heureux",
      statsYears: "D'Expertise",
    },
    services: {
      badge: "Expertise Reconnue",
      title: "Services sur Mesure",
      description:
        "Solutions digitales complètes alignées avec vos objectifs. De la stratégie à la livraison.",
      ourProcess: "Notre Processus",
      pricing: "Modèles d'Engagement",
      faq: "Questions Fréquentes",
    },
    realisations: {
      badge: "Nos Succès",
      title: "Nos Réalisations",
      description:
        "Découvrez comment nous avons aidé 30+ clients à transformer leurs visions en produits digitaux performants et profitables.",
      challenge: "Le Défi",
      solution: "Notre Solution",
      results: "Résultats",
      testimonials: "Ce que Disent Nos Clients",
    },
    about: {
      badge: "Notre Histoire",
      title: "À Propos de BodyMac Labs",
      description:
        "Depuis 10 ans, nous accompagnons les entreprises à transformer leurs défis digitaux en opportunités de croissance.",
      mission: "Notre Mission",
      values: "Nos Valeurs Fondamentales",
      team: "L'Équipe BodyMac Labs",
      journey: "Notre Parcours",
      whyUs: "Pourquoi les Meilleurs Choisissent BodyMac Labs",
    },
    contact: {
      badge: "Parlez Avec Nous",
      title: "Parlons de Votre Projet",
      description:
        "Consultation gratuite. Aucun engagement. Juste une conversation pour explorer comment on peut vous aider.",
      quickContact: "Contact Rapide",
      leaveMessage: "Laissez-Nous un Message",
      responseTime: "Temps de Réponse",
      businessHours: "Horaires",
      office: "Paris",
    },
    footer: {
      copyright: "© 2024 BodyMac Labs. Tous droits réservés.",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      realisations: "Projects",
      about: "About",
      contact: "Contact",
    },
    common: {
      startProject: "Start a Project",
      readMore: "Learn More",
      contactUs: "Contact Us",
      learnMore: "View All Services →",
      bookConsultation: "Book a Consultation",
    },
    home: {
      badge: "Innovative Digital Agency",
      title: "Transform Your Vision",
      subtitle: "Into Digital Reality",
      description:
        "BodyMac Labs helps ambitious companies transform their digital challenges into growth opportunities. Strategy. Technology. Results.",
      statsProjects: "Projects Delivered",
      statsClients: "Happy Clients",
      statsYears: "Years of Expertise",
    },
    services: {
      badge: "Recognized Expertise",
      title: "Custom Services",
      description:
        "Complete digital solutions aligned with your objectives. From strategy to delivery.",
      ourProcess: "Our Process",
      pricing: "Engagement Models",
      faq: "Frequently Asked Questions",
    },
    realisations: {
      badge: "Our Success",
      title: "Our Projects",
      description:
        "Discover how we've helped 30+ clients transform their visions into high-performance digital products.",
      challenge: "The Challenge",
      solution: "Our Solution",
      results: "Results",
      testimonials: "What Our Clients Say",
    },
    about: {
      badge: "Our Story",
      title: "About BodyMac Labs",
      description:
        "For 10 years, we've been helping companies transform their digital challenges into growth opportunities.",
      mission: "Our Mission",
      values: "Our Core Values",
      team: "The BodyMac Labs Team",
      journey: "Our Journey",
      whyUs: "Why the Best Choose BodyMac Labs",
    },
    contact: {
      badge: "Talk With Us",
      title: "Let's Talk About Your Project",
      description:
        "Free consultation. No commitment. Just a conversation to explore how we can help.",
      quickContact: "Quick Contact",
      leaveMessage: "Leave us a Message",
      responseTime: "Response Time",
      businessHours: "Business Hours",
      office: "Paris",
    },
    footer: {
      copyright: "© 2024 BodyMac Labs. All rights reserved.",
    },
  },
};

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("language") || "fr",
  fallbackLocale: "fr",
  messages,
});

const app = createApp(App);

app.use(router);
app.use(i18n);
app.mount("#app");
