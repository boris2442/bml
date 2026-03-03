import i18next from 'i18next'

const resources = {
  fr: {
    translation: {
      title: 'BodyMac Labs - Accueil',
      nav: {
        home: 'Accueil',
        services: 'Services',
        realisations: 'Réalisations',
        about: 'À propos',
        contact: 'Contact',
      },
      hero: {
        title: 'Bienvenue chez BodyMac Labs',
        subtitle: 'Créons ensemble des solutions innovantes pour votre entreprise',
        cta: 'Démarrer maintenant',
      },
      about: {
        title: 'À propos de nous',
        description: 'Nous sommes BodyMac Labs, une équipe passionnée par l\'innovation et la technologie.',
      },
      services: {
        title: 'Nos Services',
        description: 'Découvrez nos solutions technologiques',
      },
      realisations: {
        title: 'Nos Réalisations',
        description: 'Consultez nos projets réalisés',
      },
      contact: {
        title: 'Contactez-nous',
        description: 'Nous serions heureux d\'avoir de vos nouvelles',
      },
      footer: {
        copyright: '© 2024 BodyMac Labs. Tous droits réservés.',
      },
    }
  },
  en: {
    translation: {
      title: 'BodyMac Labs - Home',
      nav: {
        home: 'Home',
        services: 'Services',
        realisations: 'Projects',
        about: 'About',
        contact: 'Contact',
      },
      hero: {
        title: 'Welcome to BodyMac Labs',
        subtitle: 'Let\'s create innovative solutions for your business together',
        cta: 'Get Started',
      },
      about: {
        title: 'About Us',
        description: 'We are BodyMac Labs, a team passionate about innovation and technology.',
      },
      services: {
        title: 'Our Services',
        description: 'Discover our technological solutions',
      },
      realisations: {
        title: 'Our Projects',
        description: 'Check out our completed projects',
      },
      contact: {
        title: 'Contact Us',
        description: 'We would love to hear from you',
      },
      footer: {
        copyright: '© 2024 BodyMac Labs. All rights reserved.',
      },
    }
  }
}

i18next.init({
  lng: localStorage.getItem('language') || 'fr',
  resources,
})

export default i18next
