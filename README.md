# Site Vitrine Steel Manager

Site vitrine moderne pour Steel Manager - Expert en logiciels industriels sur mesure.

## Technologies

- **Astro 5.16+** - Framework statique ultra-rapide
- **Tailwind CSS v4** - Styles utilitaires avec variables CSS
- **TypeScript** - Pour un code robuste

## Palette de couleurs

| Couleur | Hex | Usage |
|---------|-----|-------|
| Bleu principal | `#476bde` | Titres, liens, accents |
| Vert/Turquoise | `#00d6bf` | Boutons CTA |
| Gris foncé | `#4c4148` | Texte principal |
| Dégradé | `linear-gradient(135deg, #c7d8ff, #ffffff)` | Fond |

## Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

## Structure du projet

```
steel-manager-site/
├── public/
│   └── images/           # Images et assets
├── src/
│   ├── components/       # Composants réutilisables
│   │   ├── Header.astro
│   │   ├── HeroSection.astro
│   │   ├── ServicesSection.astro
│   │   ├── TeamSection.astro
│   │   ├── UseCasesSection.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro  # Layout principal
│   ├── pages/
│   │   └── index.astro   # Page d'accueil
│   └── styles/
│       └── global.css    # Styles Tailwind + variables
└── astro.config.mjs      # Configuration Astro
```

## Sections du site

1. **Header** - Navigation et logo
2. **Hero** - Bannière principale avec CTA
3. **Services** - 4 cartes de services
4. **Équipe** - Photo d'équipe avec texte
5. **Cas d'usage** - 12 exemples avec icônes
6. **Footer** - Liens et contact

## Déploiement

Le site peut être déployé gratuitement sur :

- **Netlify** : https://app.netlify.com/start
- **Vercel** : https://vercel.com/new
- **Cloudflare Pages** : https://pages.cloudflare.com/

Voir le fichier `SETUP_GITHUB.md` pour les instructions de configuration GitHub.

## Performance

- Score Lighthouse > 90
- Build optimisé < 100KB
- Temps de chargement < 1s

## Développement

Le site utilise Tailwind CSS v4 avec la nouvelle syntaxe `@theme` dans `src/styles/global.css`.

Les couleurs personnalisées sont définies comme variables CSS :
- `--color-steel-blue`
- `--color-steel-green`
- `--color-steel-gray`

## Licence

© 2026 Steel Manager. Tous droits réservés.
