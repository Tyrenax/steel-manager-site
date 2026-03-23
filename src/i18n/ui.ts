import { defaultLocale, type Locale } from './languages';

export const ui = {
  fr: {
    // Layout
    'layout.title': 'DevTeix - Logiciels industriels sur mesure',
    'layout.description': "DevTeix - Développement logiciel sur mesure pour l'industrie et les métiers complexes",

    // Header
    'header.cta': 'Nous contacter',

    // Hero
    'hero.badge': "30 ans d'expertise",
    'hero.heading.line1': 'Votre process est unique.',
    'hero.heading.highlight': 'Votre logiciel',
    'hero.heading.line2': " devrait l'être.",
    'hero.description': 'Développement de logiciels ',
    'hero.description.highlight': 'industriels',
    'hero.description.end': " sur mesure pour les métiers complexes. Nous partons de votre réalité terrain, pas d'un produit standard.",
    'hero.cta.primary': 'Démarrer un projet',
    'hero.cta.secondary': 'Découvrir nos services',
    'hero.imageAlt': 'Steel Manager - Logiciel 3D de gestion de production',
    'hero.floatingBadge.title': '+12% efficacité',
    'hero.floatingBadge.subtitle': 'dès les premiers mois',
    'hero.scroll': 'Découvrir',
    'hero.trustBar': 'Ils nous font confiance',

    // Video
    'video.badge': 'Présentation',
    'video.heading.prefix': 'Découvrez ',
    'video.heading.highlight': 'DevTeix',
    'video.heading.suffix': ' en action',
    'video.description': "Une vue d'ensemble de notre approche et de nos solutions logicielles sur mesure.",
    'video.fallback': 'Votre navigateur ne supporte pas la lecture vidéo.',

    // Services
    'services.badge': 'Nos services',
    'services.heading': 'Des solutions pour chaque défi',
    'services.description': "Nous construisons avec vous l'outil qui correspond exactement à votre métier.",
    'services.learnMore': 'En savoir plus',
    'services.cta': 'Discuter de votre projet',

    // Problems
    'problems.badge': 'Solutions',
    'problems.heading': 'Ce que nous résolvons',
    'problems.description': 'Des problèmes terrain que nous connaissons bien. Des solutions éprouvées que nous adaptons à votre contexte.',
    'problems.bottomNote': "Votre problème n'est pas dans la liste ?",
    'problems.bottomCta': 'Parlons-en',

    // Method
    'method.badge': 'Notre approche',
    'method.heading': 'Comment nous travaillons',
    'method.description': 'Pas de tunnel de 6 mois sans nouvelles. Un processus transparent où vous gardez le contrôle.',
    'method.bottomText': 'Envie de voir comment ça se passe concrètement ?',
    'method.cta': 'Planifier un premier échange',

    // Process
    'process.badge': "Cas d'usage",
    'process.heading': 'Couvrez tous vos processus',
    'process.description': "De l'atelier au pilotage global, vos flux restent connectés et lisibles.",
    'process.cta': 'Tout autre processus industriel spécifique',

    // Dashboard
    'dashboard.badge': 'Performance',
    'dashboard.heading.prefix': 'Boostez votre efficacité ',
    'dashboard.heading.highlight': 'opérationnelle',
    'dashboard.description': 'Nos logiciels transforment vos données terrain en décisions immédiates. Production, stocks, ordres — tout est visible, en temps réel.',
    'dashboard.feature1.title': 'Suivi en temps réel',
    'dashboard.feature1.desc': 'Chaque poste, chaque ordre, chaque minute — visible et traçable.',
    'dashboard.feature2.title': 'Décisions éclairées',
    'dashboard.feature2.desc': "Des tableaux de bord pensés pour l'action, pas la contemplation.",
    'dashboard.feature3.title': 'Gains mesurables',
    'dashboard.feature3.desc': "Nos clients constatent en moyenne +12% d'efficacité dès les premiers mois.",
    'dashboard.metric.production': 'Production',
    'dashboard.metric.efficiency': 'Efficacité',
    'dashboard.metric.inProgress': 'En cours',
    'dashboard.chart.title': 'Suivi temps réel',
    'dashboard.chart.period': 'Dernière heure',
    'dashboard.order.prefix': 'Ordre',

    // International
    'international.badge': 'International',
    'international.heading.prefix': 'Une présence ',
    'international.heading.highlight': 'internationale',
    'international.heading.suffix': '',
    'international.description': "Nos solutions accompagnent des industriels à travers l'Europe et au-delà. Une même méthode, adaptée à chaque réalité locale.",
    'international.stat.value': '150+',
    'international.stat.label': "projets déployés\nà l'international",

    // Team
    'team.badge': 'Notre équipe',
    'team.heading': 'Des experts qui connaissent votre métier',
    'team.description': "Pas une équipe de développeurs généralistes. Des gens qui ont vu des ateliers, qui comprennent les contraintes de la production, qui parlent le même langage que vous.",
    'team.imageAlt': "L'équipe DevTeix",
    'team.overlayBadge': 'Une équipe technique, dédiée à votre projet',
    'team.aerialAlt': 'Bureaux DevTeix - Vue aérienne',
    'team.officeLabel': 'Nos bureaux',

    // Contact
    'contact.badge': 'Contact',
    'contact.heading': 'Prêt à en discuter ?',
    'contact.description': 'Pas de formulaire à rallonge. Envoyez-nous un mail ou appelez-nous directement. Nous répondons vite.',
    'contact.email.label': 'Email',
    'contact.phone.label': 'Téléphone',
    'contact.address.label': 'Adresse',
    'contact.address.value': "Zoning industriel des hauts-Sarts, Rue d'Abhooz 27, 4040 Herstal",
    'contact.linkedin': 'Suivez-nous sur LinkedIn',
    'contact.cta.heading': 'Premier échange gratuit',
    'contact.cta.description': ' 30 minutes pour comprendre vos enjeux et voir si nous pouvons vous aider. Pas de slides, pas de pitch commercial.',
    'contact.cta.button': 'Planifier un échange',
    'contact.emailSubject': 'Demande de premier échange',

    // Footer
    'footer.brand': "Développement sur mesure pour l'industrie et les métiers complexes.",
    'footer.nav': 'Navigation',
    'footer.products': 'Produits',
    'footer.contact': 'Contact',
    'footer.heritage.prefix': "Une division née de l'expertise",
    'footer.heritage.suffix': 'Leader GPAO depuis 1994',
    'footer.copyright': 'Tous droits réservés.',
    'footer.legal': 'Mentions légales',
    'footer.privacy': 'Confidentialité',
  },

  en: {
    // Layout
    'layout.title': 'DevTeix - Custom Industrial Software',
    'layout.description': 'DevTeix - Custom software development for industry and complex trades',

    // Header
    'header.cta': 'Contact us',

    // Hero
    'hero.badge': '30 years of expertise',
    'hero.heading.line1': 'Your process is unique.',
    'hero.heading.highlight': 'Your software',
    'hero.heading.line2': ' should be too.',
    'hero.description': 'Custom ',
    'hero.description.highlight': 'industrial',
    'hero.description.end': ' software development for complex industrial environments. We start from your field reality, not from an off-the-shelf product.',
    'hero.cta.primary': 'Start a project',
    'hero.cta.secondary': 'Discover our services',
    'hero.imageAlt': 'Steel Manager - 3D Production Management Software',
    'hero.floatingBadge.title': '+12% efficiency',
    'hero.floatingBadge.subtitle': 'from the first months',
    'hero.scroll': 'Discover',
    'hero.trustBar': 'They trust us',

    // Video
    'video.badge': 'Overview',
    'video.heading.prefix': 'See ',
    'video.heading.highlight': 'DevTeix',
    'video.heading.suffix': ' in action',
    'video.description': 'An overview of our approach and our custom software solutions.',
    'video.fallback': 'Your browser does not support video playback.',

    // Services
    'services.badge': 'Our services',
    'services.heading': 'Solutions for every challenge',
    'services.description': 'We build the tool that perfectly fits your business.',
    'services.learnMore': 'Learn more',
    'services.cta': 'Discuss your project',

    // Problems
    'problems.badge': 'Solutions',
    'problems.heading': 'What we solve',
    'problems.description': 'Field problems we know well. Proven solutions we adapt to your context.',
    'problems.bottomNote': "Your problem isn't on the list?",
    'problems.bottomCta': "Let's talk",

    // Method
    'method.badge': 'Our approach',
    'method.heading': 'How we work',
    'method.description': 'No 6-month projects without updates. A transparent process where you stay in control.',
    'method.bottomText': 'Want to see how it works in practice?',
    'method.cta': 'Schedule a first call',

    // Process
    'process.badge': 'Use cases',
    'process.heading': 'Cover all your operations',
    'process.description': 'From the workshop to overall management, your flows remain connected and readable.',
    'process.cta': 'Any other specific industrial process',

    // Dashboard
    'dashboard.badge': 'Performance',
    'dashboard.heading.prefix': 'Boost your operational ',
    'dashboard.heading.highlight': 'efficiency',
    'dashboard.description': 'Our software turns your field data into immediate decisions. Production, inventory, orders — everything is visible, in real time.',
    'dashboard.feature1.title': 'Real-time tracking',
    'dashboard.feature1.desc': 'Every station, every order, every minute — visible and traceable.',
    'dashboard.feature2.title': 'Informed decisions',
    'dashboard.feature2.desc': 'Dashboards designed for action, not contemplation.',
    'dashboard.feature3.title': 'Measurable gains',
    'dashboard.feature3.desc': 'Our clients see an average of +12% efficiency from the first months.',
    'dashboard.metric.production': 'Production',
    'dashboard.metric.efficiency': 'Efficiency',
    'dashboard.metric.inProgress': 'In progress',
    'dashboard.chart.title': 'Real-time tracking',
    'dashboard.chart.period': 'Last hour',
    'dashboard.order.prefix': 'Order',

    // International
    'international.badge': 'International',
    'international.heading.prefix': 'An ',
    'international.heading.highlight': 'international',
    'international.heading.suffix': ' presence',
    'international.description': 'Our solutions support manufacturers across Europe and beyond. One method, adapted to each local reality.',
    'international.stat.value': '150+',
    'international.stat.label': 'projects deployed\ninternationally',

    // Team
    'team.badge': 'Our team',
    'team.heading': 'Experts who know your business',
    'team.description': 'Not a team of generalist developers. People who have seen workshops, who understand production constraints, who speak your language.',
    'team.imageAlt': 'The DevTeix team',
    'team.overlayBadge': 'A technical team, dedicated to your project',
    'team.aerialAlt': 'DevTeix offices - Aerial view',
    'team.officeLabel': 'Our offices',

    // Contact
    'contact.badge': 'Contact',
    'contact.heading': 'Ready to talk?',
    'contact.description': 'No lengthy forms. Send us an email or call us directly. We respond quickly.',
    'contact.email.label': 'Email',
    'contact.phone.label': 'Phone',
    'contact.address.label': 'Address',
    'contact.address.value': "Zoning industriel des hauts-Sarts, Rue d'Abhooz 27, 4040 Herstal",
    'contact.linkedin': 'Follow us on LinkedIn',
    'contact.cta.heading': 'Free first meeting',
    'contact.cta.description': '30 minutes to understand your challenges and see if we can help. No slides, no sales pitch.',
    'contact.cta.button': 'Schedule a call',
    'contact.emailSubject': 'Request for first meeting',

    // Footer
    'footer.brand': 'Custom development for industry and complex trades.',
    'footer.nav': 'Navigation',
    'footer.products': 'Products',
    'footer.contact': 'Contact',
    'footer.heritage.prefix': 'A division built on decades of expertise',
    'footer.heritage.suffix': 'Production management leader since 1994',
    'footer.copyright': 'All rights reserved.',
    'footer.legal': 'Legal notice',
    'footer.privacy': 'Privacy',
  },
} as const;

type UiKeys = keyof (typeof ui)['fr'];

export function useTranslations(locale: Locale) {
  return function t(key: UiKeys): string {
    return (ui[locale]?.[key] ?? ui[defaultLocale][key]) as string;
  };
}

// --- Data getters ---

export function getNavItems(locale: Locale) {
  const data = {
    fr: [
      { label: 'Services', href: '#services' },
      { label: 'Solutions', href: '#solutions' },
      { label: 'Méthode', href: '#method' },
      { label: 'Processus', href: '#processus' },
      { label: 'Équipe', href: '#equipe' },
      { label: 'Contact', href: '#contact' },
    ],
    en: [
      { label: 'Services', href: '#services' },
      { label: 'Solutions', href: '#solutions' },
      { label: 'Approach', href: '#method' },
      { label: 'Process', href: '#processus' },
      { label: 'Team', href: '#equipe' },
      { label: 'Contact', href: '#contact' },
    ],
  };
  return data[locale];
}

export function getHeroStats(locale: Locale) {
  const data = {
    fr: [
      { value: '30+', label: "années d'expertise" },
      { value: '150+', label: 'projets déployés' },
      { value: '100%', label: 'dernière enquête de satisfaction' },
    ],
    en: [
      { value: '30+', label: 'years of expertise' },
      { value: '150+', label: 'projects deployed' },
      { value: '100%', label: 'satisfaction in our latest customer survey' },
    ],
  };
  return data[locale];
}

export function getServicesData(locale: Locale) {
  const data = {
    fr: [
      {
        title: 'Développement sur mesure',
        description: "Applications métier adaptées à VOS processus : ERP, GPAO, WMS, CRM... Nous partons de votre réalité terrain, pas d'un template générique.",
        features: ["Modules personnalisés", "Intégration dans l'existant", 'Évolutif'],
        imageAlt: 'Logiciel Wood Manager - Développement sur mesure',
      },
      {
        title: 'Intégration systèmes',
        description: 'Connexion de vos outils existants : ERP, machines, capteurs IoT, APIs tierces. Fini la double saisie et les fichiers Excel qui circulent.',
        features: ['Multi-systèmes', 'Temps réel', 'APIs robustes'],
        imageAlt: 'Écran tactile Steel Manager en usine',
      },
      {
        title: 'Audit & Diagnostic',
        description: 'Nous venons sur le terrain. Nous observons vos équipes, vos processus, vos goulots. Vous recevez un rapport actionnable avec un plan clair.',
        features: ['Analyse terrain', 'Recommandations', "Plan d'action"],
        imageAlt: 'Équipe DevTeix en immersion dans une usine',
      },
      {
        title: 'Apps terrain & mobiles',
        description: 'Applications pour vos équipes en atelier : pointage, contrôle qualité, inventaire, maintenance. Fonctionnent même hors connexion.',
        features: ['Mode offline', 'Interface simple', 'Synchronisation'],
        imageAlt: 'Application mobile Steel Manager utilisée en atelier',
      },
    ],
    en: [
      {
        title: 'Custom Development',
        description: 'Business applications tailored to YOUR processes: ERP, MES, WMS, CRM... We start from your field reality, not from a generic template.',
        features: ['Custom modules', 'Integration with existing systems', 'Scalable'],
        imageAlt: 'Wood Manager Software - Custom development',
      },
      {
        title: 'System Integration',
        description: 'Connection of your existing tools: ERP, machines, IoT sensors, third-party APIs. No more double entries and scattered Excel files.',
        features: ['Multi-system', 'Real-time', 'Robust APIs'],
        imageAlt: 'Steel Manager touch screen in factory',
      },
      {
        title: 'Audit & Diagnosis',
        description: 'We come to the field. We observe your teams, your processes, your bottlenecks. You receive an actionable report with a clear plan.',
        features: ['Field analysis', 'Recommendations', 'Action plan'],
        imageAlt: 'DevTeix team immersed in a factory',
      },
      {
        title: 'Field & Mobile Apps',
        description: 'Applications for your workshop teams: time tracking, quality control, inventory, maintenance. Fully functional even offline.',
        features: ['Offline mode', 'Simple interface', 'Synchronization'],
        imageAlt: 'Steel Manager mobile app used in workshop',
      },
    ],
  };
  return data[locale];
}

export function getProblemsData(locale: Locale) {
  const data = {
    fr: [
      {
        problem: 'Mon ERP ne colle pas à mon métier',
        solution: 'Nous développons les modules qui vous manquent, connectés à votre système existant.',
        detail: 'Compatible SAP, Odoo, Sage, ou votre ERP maison',
      },
      {
        problem: 'Mes équipes terrain travaillent encore sur papier',
        solution: 'Apps mobiles sur mesure : pointage, contrôle, inventaire. Même hors connexion.',
        detail: 'Déployé auprès de +200 utilisateurs terrain',
      },
      {
        problem: "Je n'ai pas de visibilité sur ma production",
        solution: 'Tableaux de bord temps réel, KPIs automatisés, alertes intelligentes.',
        detail: 'Données consolidées en un seul endroit',
      },
      {
        problem: 'Mes systèmes ne se parlent pas',
        solution: 'Intégration de tous vos outils : ERP, machines, capteurs IoT, APIs tierces.',
        detail: 'Zéro double saisie, flux automatisés',
      },
    ],
    en: [
      {
        problem: "My ERP doesn't fit my business",
        solution: 'We develop the modules you are missing, connected to your existing system.',
        detail: 'Compatible with SAP, Odoo, Sage, or your in-house ERP',
      },
      {
        problem: 'My field teams still work on paper',
        solution: 'Custom mobile apps: time tracking, control, inventory. Even offline.',
        detail: 'Already deployed to 200+ field users',
      },
      {
        problem: 'I have no visibility on my production',
        solution: 'Real-time dashboards, automated KPIs, smart alerts.',
        detail: 'Data consolidated in one place',
      },
      {
        problem: "My systems don't talk to each other",
        solution: 'Integration of all your tools: ERP, machines, IoT sensors, third-party APIs.',
        detail: 'Zero double entry, automated workflows',
      },
    ],
  };
  return data[locale];
}

export function getStepsData(locale: Locale) {
  const data = {
    fr: [
      { number: '01', title: 'Immersion', description: 'Nous venons chez vous. Nous observons vos équipes, vos processus, vos outils. Nous comprenons votre réalité avant de proposer quoi que ce soit.', icon: 'eye' },
      { number: '02', title: 'Cadrage', description: 'Nous définissons ensemble le périmètre, les priorités, les contraintes. Vous savez exactement ce que nous allons livrer et quand.', icon: 'document' },
      { number: '03', title: 'Développement', description: 'Itérations courtes. Vous voyez et testez à chaque étape. Nous ajustons en fonction de vos retours terrain.', icon: 'code' },
      { number: '04', title: 'Déploiement', description: 'Formation de vos équipes incluse. Nous restons à vos côtés après le déploiement.', icon: 'rocket' },
    ],
    en: [
      { number: '01', title: 'Immersion', description: 'We come to you. We observe your teams, your processes, your tools. We understand your reality before proposing anything.', icon: 'eye' },
      { number: '02', title: 'Scoping', description: 'Together we define the scope, priorities, and constraints. You know exactly what we will deliver and when.', icon: 'document' },
      { number: '03', title: 'Development', description: 'Short iterations. You see and test at every step. We adjust based on your field feedback.', icon: 'code' },
      { number: '04', title: 'Deployment', description: 'Team training included. We stay by your side after deployment.', icon: 'rocket' },
    ],
  };
  return data[locale];
}

export function getProcessLabels(locale: Locale) {
  const data = {
    fr: ['Production', 'Optimisation', 'CNC', 'Stocks', 'Achats', 'IA', 'Planning', 'Livraison', '3D', 'Temps', 'Qualité', 'Finance'],
    en: ['Production', 'Optimization', 'CNC', 'Inventory', 'Purchasing', 'AI', 'Planning', 'Delivery', '3D', 'Time', 'Quality', 'Finance'],
  };
  return data[locale];
}

export function getOrdersData(locale: Locale) {
  const data = {
    fr: [
      { id: '#4521', label: 'Découpe laser', status: 'En cours', color: 'accent' },
      { id: '#4520', label: 'Assemblage', status: 'Planifié', color: 'primary' },
      { id: '#4519', label: 'Contrôle qualité', status: 'Terminé', color: 'green' },
    ],
    en: [
      { id: '#4521', label: 'Laser cutting', status: 'In progress', color: 'accent' },
      { id: '#4520', label: 'Assembly', status: 'Scheduled', color: 'primary' },
      { id: '#4519', label: 'Quality control', status: 'Completed', color: 'green' },
    ],
  };
  return data[locale];
}

export function getCountriesData(locale: Locale) {
  const data = {
    fr: [
      { flag: '/images/60.png', name: 'Belgique', lat: 50.85, lng: 4.35 },
      { flag: '/images/61.png', name: 'France', lat: 46.60, lng: 2.33 },
      { flag: '/images/62.png', name: 'Pays-Bas', lat: 52.13, lng: 5.29 },
      { flag: '/images/63.png', name: 'Allemagne', lat: 51.16, lng: 10.45 },
      { flag: '/images/64.png', name: 'Pologne', lat: 51.92, lng: 19.15 },
      { flag: '/images/65.png', name: 'Brésil', lat: -14.24, lng: -51.93 },
      { flag: '/images/Algerie.png', name: 'Algérie', lat: 28.03, lng: 1.66 },
      { flag: '/images/arabie.png', name: 'Arabie saoudite', lat: 23.89, lng: 45.08 },
      { flag: '/images/autriche.png', name: 'Autriche', lat: 47.52, lng: 14.55 },
      { flag: '/images/suisse.png', name: 'Suisse', lat: 46.82, lng: 8.23 },
    ],
    en: [
      { flag: '/images/60.png', name: 'Belgium', lat: 50.85, lng: 4.35 },
      { flag: '/images/61.png', name: 'France', lat: 46.60, lng: 2.33 },
      { flag: '/images/62.png', name: 'Netherlands', lat: 52.13, lng: 5.29 },
      { flag: '/images/63.png', name: 'Germany', lat: 51.16, lng: 10.45 },
      { flag: '/images/64.png', name: 'Poland', lat: 51.92, lng: 19.15 },
      { flag: '/images/65.png', name: 'Brazil', lat: -14.24, lng: -51.93 },
      { flag: '/images/Algerie.png', name: 'Algeria', lat: 28.03, lng: 1.66 },
      { flag: '/images/arabie.png', name: 'Saudi Arabia', lat: 23.89, lng: 45.08 },
      { flag: '/images/autriche.png', name: 'Austria', lat: 47.52, lng: 14.55 },
      { flag: '/images/suisse.png', name: 'Switzerland', lat: 46.82, lng: 8.23 },
    ],
  };
  return data[locale];
}

export function getTeamStats(locale: Locale) {
  const data = {
    fr: [
      { value: '180+', label: "années d'expérience cumulées" },
      { value: '3', label: 'anciens responsables de production' },
      { value: '150+', label: 'projets déployés' },
    ],
    en: [
      { value: '180+', label: 'combined years of experience' },
      { value: '3', label: 'former production managers' },
      { value: '150+', label: 'projects deployed' },
    ],
  };
  return data[locale];
}

export function getTeamQualities(locale: Locale) {
  const data = {
    fr: [
      { title: 'Expertise terrain', desc: 'Nous connaissons les contraintes de la production. Plusieurs de nos analystes viennent du monde industriel.' },
      { title: 'Équipe stable', desc: "Les mêmes personnes de l'analyse au support. Nous connaissons vos projets." },
      { title: 'Réactivité', desc: 'Support direct, pas de ticket qui traîne. Votre interlocuteur connaît votre dossier.' },
    ],
    en: [
      { title: 'Field expertise', desc: 'We know production constraints. Several of our analysts come from the industrial world.' },
      { title: 'Stable team', desc: 'The same people from analysis to support. We know your projects.' },
      { title: 'Responsiveness', desc: 'Direct support, no lingering tickets. Your contact knows your case.' },
    ],
  };
  return data[locale];
}

export function getContactBenefits(locale: Locale) {
  const data = {
    fr: [
      'Analyse personnalisée de vos besoins',
      "Conseils d'experts du terrain",
      'Sans engagement',
    ],
    en: [
      'Personalized analysis of your needs',
      'Expert field advice',
      'No commitment',
    ],
  };
  return data[locale];
}

export function getFooterNav(locale: Locale) {
  return getNavItems(locale);
}

export function getFooterProducts(locale: Locale) {
  const data = {
    fr: [
      { label: 'Steel Manager', href: 'https://steel-manager.be/fr/', external: true },
      { label: 'Wood Manager', href: 'https://wood-manager.be/fr/', external: true },
    ],
    en: [
      { label: 'Steel Manager', href: 'https://steel-manager.be/en/', external: true },
      { label: 'Wood Manager', href: 'https://wood-manager.be/en/', external: true },
    ],
  };
  return data[locale];
}
