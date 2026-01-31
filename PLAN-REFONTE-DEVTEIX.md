# PLAN DE REFONTE DEVTEIX - Design Pro Multi-Secteurs

> Branche: `feature/devteix-refonte-pro`
> Date: 31/01/2026

---

## POSITIONNEMENT STRATÉGIQUE

**DevTeix = Développement sur mesure pour TOUTE l'industrie**
- Steel Manager = preuve de crédibilité (30 ans d'expertise)
- Mais DevTeix s'adresse à TOUS les secteurs industriels
- Pas que l'acier : agroalimentaire, logistique, manufacturing, chimie, etc.

**Message clé**: "On sait faire du sur-mesure industriel, Steel Manager le prouve. Maintenant on l'applique à votre secteur."

---

## DIRECTION ESTHÉTIQUE

**Concept**: "Industrial Precision" - Un design sobre, technique et crédible qui inspire confiance aux décideurs industriels B2B de TOUS secteurs. Fini le look startup/IA, place à l'expertise terrain.

**Ton visuel**:
- Utilitaire et fonctionnel (pas décoratif)
- Dense en informations (prouver qu'on a du contenu)
- Angles nets, pas de rondeurs excessives
- Typographie technique mais lisible
- Couleurs sobres avec accents stratégiques
- **Pas de focus exclusif acier** - images/icônes génériques industrie

---

## PHASE 1: FONDATIONS CSS (global.css)

### 1.1 Nouvelle palette de couleurs

```css
/* SUPPRIMER */
--color-accent: #06d6a0;        /* MINT = MORT */
--color-accent-dark: #05b587;

/* NOUVELLE PALETTE */
--color-primary: #1e3a5f;       /* Bleu marine profond */
--color-primary-dark: #152c4a;  /* Bleu encore plus foncé */
--color-primary-light: #2c5282; /* Bleu acier */

--color-accent: #e67e22;        /* Orange industriel (sécurité/CTA) */
--color-accent-dark: #d35400;   /* Orange foncé */

--color-steel: #374151;         /* Gris acier */
--color-steel-dark: #1f2937;    /* Gris anthracite */

--color-text: #111827;          /* Noir profond */
--color-text-light: #6b7280;    /* Gris moyen */
--color-bg: #f9fafb;            /* Fond principal */
--color-bg-alt: #f3f4f6;        /* Fond alterné */
--color-border: #e5e7eb;        /* Bordures */
```

### 1.2 Typographie

```css
/* Titres: Space Grotesk (garder) */
/* Corps: IBM Plex Sans (nouveau) */

html {
  font-family: 'IBM Plex Sans', system-ui, sans-serif;
}

h1, h2, h3, h4 {
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: -0.02em;
}
```

### 1.3 Design tokens à modifier

| Token | Avant | Après |
|-------|-------|-------|
| border-radius cartes | 1.5rem (24px) | 0.5rem (8px) |
| border-radius boutons | 9999px (pill) | 0.375rem (6px) |
| box-shadow hover | 25px diffuse | 6px net |
| transition duration | 0.4s-0.8s | 0.15s-0.2s |
| translateY hover | -8px | -2px |

### Fichier à modifier:
- `src/styles/global.css`

---

## PHASE 2: LAYOUT.ASTRO

### 2.1 Google Fonts

```html
<!-- SUPPRIMER Inter -->
<!-- AJOUTER -->
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
```

### 2.2 AOS config

```js
AOS.init({
  duration: 400,        // Était 800 - RÉDUIRE
  easing: 'ease-out',   // Plus simple
  offset: 30,           // Était 50
  once: true            // Ajouter - ne joue qu'une fois
});
```

### Fichier à modifier:
- `src/layouts/Layout.astro`

---

## PHASE 3: HEADER

### Modifications:
- Supprimer effet glass trop prononcé
- Fond solide avec légère transparence
- Border-bottom subtile au scroll
- Logo DevTeix + petit badge "by Steel Manager"

### Fichier à modifier:
- `src/components/Header.astro`

---

## PHASE 4: HERO SECTION (Refonte majeure)

### 4.1 Structure avant/après

**SUPPRIMER:**
- Badge vert animé avec point pulse
- Image stock ouvrier
- Badge flottant "+40% Productivité"
- Gradient bleu-mint
- Blobs décoratifs

**NOUVELLE STRUCTURE:**
```
┌─────────────────────────────────────────────────────────────┐
│ [Barre logos partenaires machines - discret]                │
│  Voortman | Kaltenbach | Ficep | Tekla | Advance Steel      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ Badge: "30 ans d'expertise industrielle"                    │
│                                                             │
│ H1: Votre process est unique.                               │
│     Votre logiciel devrait l'être.                          │
│                                                             │
│ Sous-titre: Développement sur mesure pour l'industrie.      │
│ On part de votre réalité, pas d'un produit standard.        │
│                                                             │
│ [CTA Primaire]  [CTA Secondaire]                            │
│                                                             │
│ ─────────────────────────────────────────────────────────── │
│ 30+ années  │  150+ projets  │  12 pays                     │
│ d'expertise │  déployés      │  équipés                     │
└─────────────────────────────────────────────────────────────┘
│                                                             │
│ [SCREENSHOT RÉEL DU LOGICIEL - pas stock]                   │
│ ou [Photo équipe terrain]                                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 4.2 Nouveau contenu

```
Accroche: "Votre process est unique. Votre logiciel devrait l'être."

Sous-titre: "On développe des solutions sur mesure pour l'industrie.
Pas de forcing vers un produit standard : on part de votre réalité."

Badge: "Issu de 30 ans d'expertise Steel Manager"

CTA 1: "Démarrer un projet" (orange)
CTA 2: "Découvrir nos services" (outline)
```

### Fichier à modifier:
- `src/components/HeroSection.astro`

---

## PHASE 5: SECTION SERVICES

### 5.1 Avant/Après

**SUPPRIMER:**
- Images de fond avec overlay
- Hover zoom image
- Bordure verte au hover
- Aspect ratio 3:1

**NOUVELLE APPROCHE:**
- Cartes blanches sur fond gris clair
- Icône technique + titre + description
- Hover: légère élévation + bordure gauche colorée
- Plus de texte, plus de substance

### 5.2 Nouveau contenu services (GÉNÉRALISTE - pas que acier)

| Service | Titre | Description |
|---------|-------|-------------|
| 1 | Développement sur mesure | Applications métier adaptées à VOS processus : ERP, GPAO, WMS, CRM... On part de votre réalité, pas d'un template. |
| 2 | Intégration systèmes | Connexion de vos outils existants : ERP, machines, capteurs IoT, API tierces. Zéro double saisie. |
| 3 | Audit & Diagnostic | On vient sur le terrain. On observe vos équipes. On identifie les blocages. Rapport actionnable. |
| 4 | Apps terrain & mobiles | Applications pour vos équipes terrain : pointage, contrôle qualité, inventaire, maintenance. Même hors connexion. |

### Fichier à modifier:
- `src/components/ServicesSection.astro`

---

## PHASE 6: SECTION SOLUTIONS → "CE QU'ON RÉSOUT"

### 6.1 Transformation complète

**SUPPRIMER:**
- Grille 4x3 d'icônes génériques
- Images décoratives (laptop, phone, monitor)
- Fond clair uniforme

**NOUVELLE APPROCHE: Problèmes/Solutions GÉNÉRIQUES (tous secteurs)**

```
┌─────────────────────────────────────────────────────────────┐
│ CE QU'ON RÉSOUT                                             │
│ Problèmes terrain → Solutions concrètes                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ "Mon ERP ne colle pas à mon métier"                     │ │
│ │ → On développe les modules qui vous manquent,           │ │
│ │   connectés à votre système existant.                   │ │
│ │   Compatible SAP, Odoo, Sage, ou votre ERP maison       │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ "Mes équipes terrain travaillent encore sur papier"     │ │
│ │ → Apps mobiles sur mesure : pointage, contrôle,         │ │
│ │   inventaire. Même hors connexion.                      │ │
│ │   Déployé auprès de +200 utilisateurs terrain           │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ "Je n'ai pas de visibilité sur ma production"           │ │
│ │ → Tableaux de bord temps réel, KPIs automatisés,        │ │
│ │   alertes intelligentes.                                │ │
│ │   Données consolidées en un seul endroit                │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ "Mes systèmes ne se parlent pas"                        │ │
│ │ → Intégration de tous vos outils : ERP, machines,       │ │
│ │   capteurs IoT, APIs tierces. Zéro double saisie.       │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Fichier à modifier:
- `src/components/SolutionsSection.astro`

---

## PHASE 7: NOUVELLE SECTION - SECTEURS & TECHNOLOGIES

### 7.1 Approche multi-secteurs (pas que l'acier!)

**IMPORTANT**: DevTeix ne doit PAS paraître spécialisé acier uniquement.
Montrer la diversité des secteurs adressés.

```
┌─────────────────────────────────────────────────────────────┐
│ DES SOLUTIONS POUR TOUTE L'INDUSTRIE                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ SECTEURS D'EXPERTISE                                        │
│ [Construction]  [Manufacturing]  [Logistique]              │
│ [Agroalimentaire]  [Chimie]  [Énergie]                     │
│                                                             │
│ TECHNOLOGIES MAÎTRISÉES                                     │
│ [.NET/C#]  [React]  [Python]  [SQL Server]                 │
│ [Azure]  [API REST]  [IoT]                                 │
│                                                             │
│ "Votre secteur a ses spécificités. C'est justement         │
│  notre spécialité."                                         │
└─────────────────────────────────────────────────────────────┘
```

### 7.2 OU Version "Méthode" (alternative)

```
┌─────────────────────────────────────────────────────────────┐
│ NOTRE MÉTHODE                                               │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ 1. IMMERSION        On vient chez vous. On observe.        │
│    [icône terrain]  On comprend votre réalité.             │
│                                                             │
│ 2. CADRAGE          On définit ensemble le périmètre.      │
│    [icône plan]     Pas de surprises.                      │
│                                                             │
│ 3. DÉVELOPPEMENT    Itérations courtes. Vous validez       │
│    [icône code]     à chaque étape.                        │
│                                                             │
│ 4. DÉPLOIEMENT      Formation incluse. Support continu.    │
│    [icône rocket]   Vos équipes autonomes.                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Fichier à créer:
- `src/components/MethodSection.astro` (méthodologie)
- OU `src/components/SectorsSection.astro` (secteurs)

### Icônes à utiliser (génériques industrie):
| Concept | Icône suggérée |
|---------|----------------|
| Construction | Building/Warehouse |
| Manufacturing | Cog/Factory |
| Logistique | Truck/Package |
| Agroalimentaire | Leaf/Agriculture |
| Chimie | Flask/Beaker |
| Énergie | Bolt/Lightning |
| Code | Code/Terminal |
| Cloud | Cloud/Server |
| IoT | Chip/Connect |

---

## PHASE 8: SECTION ÉQUIPE

### 8.1 Améliorations

**GARDER:**
- Photo équipe existante (authentique)

**MODIFIER:**
- Supprimer gradient bleu de fond
- Ajouter citation d'équipe
- Ajouter chiffres concrets
- Cards plus sobres (sans effet glass mint)

### 8.2 Nouveau contenu

```
"12 personnes qui passent plus de temps en atelier qu'en réunion."

[Photo équipe]

┌────────────────┐  ┌────────────────┐  ┌────────────────┐
│ 180 ans        │  │ 3 anciens      │  │ 150+ projets   │
│ d'expérience   │  │ responsables   │  │ déployés       │
│ cumulée        │  │ de production  │  │                │
└────────────────┘  └────────────────┘  └────────────────┘
```

### Fichier à modifier:
- `src/components/TeamSection.astro`

---

## PHASE 9: SECTION CONTACT

### 9.1 Modifications

- Supprimer gradient sombre sur CTA card
- Design plus sobre
- Ajouter adresse physique Belgique
- Formulaire de contact (optionnel)

### Fichier à modifier:
- `src/components/ContactSection.astro`

---

## PHASE 10: FOOTER

### 10.1 Ajouts majeurs

**AJOUTER:**
```
─────────────────────────────────────────────────────────────
DevTeix - Développement logiciel sur mesure

Une division née de l'expertise Steel Manager
[Logo Steel Manager petit] Leader GPAO depuis 1994

Adresse | Contact | Mentions légales
─────────────────────────────────────────────────────────────
```

### Fichier à modifier:
- `src/components/Footer.astro`

---

## PHASE 11: ASSETS & IMAGES

### 11.1 À télécharger/créer

| Asset | Type | Source/Action |
|-------|------|---------------|
| Logo Steel Manager | SVG/PNG | Récupérer de steel-manager.be (pour crédibilité) |
| Icônes secteurs | SVG | Heroicons/Phosphor (Building, Factory, Truck, Leaf, Flask, Bolt) |
| Icônes technologies | SVG | Logos .NET, React, Python, Azure (simpleicons.org) |
| Icônes méthodo | SVG | Heroicons (Eye, ClipboardList, Code, Rocket) |
| Screenshot logiciel | PNG | Capture réelle d'une app DevTeix/Steel Manager |

### 11.2 À supprimer
- Image stock ouvrier (hero)
- Images de fond services (6.png, 7.png, 8.png, 9.png)
- Icônes solutions génériques (13-24.png)

### 11.3 Images recommandées (génériques industrie)
- Photo équipe en réunion/whiteboard (pas en usine acier)
- Screenshot d'interface logiciel moderne (dashboard)
- Illustrations abstraites process/workflow (optionnel)

---

## PHASE 12: INDEX.ASTRO

### Ordre des sections

```astro
<Layout>
  <Header />
  <HeroSection />
  <PartnersSection />      <!-- NOUVEAU -->
  <ServicesSection />
  <SolutionsSection />     <!-- Renommé "Ce qu'on résout" -->
  <TeamSection />
  <ContactSection />
  <Footer />
</Layout>
```

### Fichier à modifier:
- `src/pages/index.astro`

---

## CHECKLIST D'IMPLÉMENTATION

### Priorité 1 - Impact immédiat
- [ ] `global.css` - Nouvelle palette (supprimer mint)
- [ ] `global.css` - Réduire border-radius
- [ ] `global.css` - Réduire animations
- [ ] `Layout.astro` - Changer fonts
- [ ] `HeroSection.astro` - Nouveau contenu + supprimer badge flottant

### Priorité 2 - Sections principales
- [ ] `ServicesSection.astro` - Refonte cartes
- [ ] `SolutionsSection.astro` - Problèmes/Solutions
- [ ] `TeamSection.astro` - Sobriété + chiffres

### Priorité 3 - Crédibilité
- [ ] `PartnersSection.astro` - CRÉER
- [ ] Télécharger logos partenaires
- [ ] `Footer.astro` - Mention Steel Manager

### Priorité 4 - Finitions
- [ ] `Header.astro` - Simplifier
- [ ] `ContactSection.astro` - Sobriété
- [ ] Optimiser images

---

## RESSOURCES

### Icônes (style solid, pas line)
- **Heroicons**: https://heroicons.com (solid style)
- **Phosphor Icons**: https://phosphoricons.com (bold style)
- **Tabler Icons**: https://tabler-icons.io

### Logos technologies (pour crédibilité technique)
- **Simple Icons**: https://simpleicons.org
  - .NET / C# / Microsoft
  - React / JavaScript
  - Python
  - Azure / AWS
  - PostgreSQL / SQL Server

### Images stock PRO (éviter le générique)
- **Unsplash Business**: https://unsplash.com/s/photos/business-meeting
- **Pexels**: https://pexels.com (filtrer "authentic")
- Éviter: ouvriers avec tablettes, usines génériques, poignées de main

### Logo Steel Manager
- Récupérer depuis: https://www.steel-manager.be
- Usage: footer uniquement, petit, discret
- Message: "Issu de 30 ans d'expertise Steel Manager"

---

---

## RÉCAPITULATIF FICHIERS À MODIFIER

| Fichier | Type | Priorité |
|---------|------|----------|
| `src/styles/global.css` | Modifier | P1 |
| `src/layouts/Layout.astro` | Modifier | P1 |
| `src/components/HeroSection.astro` | Refonte | P1 |
| `src/components/ServicesSection.astro` | Refonte | P2 |
| `src/components/SolutionsSection.astro` | Refonte | P2 |
| `src/components/TeamSection.astro` | Modifier | P2 |
| `src/components/Header.astro` | Modifier | P3 |
| `src/components/ContactSection.astro` | Modifier | P3 |
| `src/components/Footer.astro` | Modifier | P3 |
| `src/components/MethodSection.astro` | **CRÉER** | P2 |
| `src/pages/index.astro` | Modifier | P3 |

---

## RESSOURCES IMAGES GRATUITES

### Équipe/Bureau (Unsplash - libre de droits)
- https://unsplash.com/s/photos/software-development-team
- https://unsplash.com/s/photos/developer-team
- https://unsplash.com/s/photos/business-meeting

### Icônes (Heroicons - MIT License)
- Site: https://heroicons.com
- GitHub: https://github.com/tailwindlabs/heroicons
- Style recommandé: **Solid 24x24**

### Icônes secteurs suggérées (Heroicons solid):
| Secteur | Icône |
|---------|-------|
| Construction | `building-office-2` |
| Manufacturing | `cog-6-tooth` |
| Logistique | `truck` |
| Agroalimentaire | `beaker` ou custom |
| Dashboard | `chart-bar` |
| Mobile | `device-phone-mobile` |
| Intégration | `link` |
| Sécurité | `shield-check` |

---

*Plan créé le 31/01/2026*
*Branche: feature/devteix-refonte-pro*
*Objectif: Design industriel B2B multi-secteurs, pas startup*
