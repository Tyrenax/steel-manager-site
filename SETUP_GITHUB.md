# Configuration du dépôt GitHub distant

## Créer le dépôt sur GitHub

1. Va sur https://github.com/new
2. Nom du repository: `steel-manager-site` (ou un autre nom de ton choix)
3. Description: "Site vitrine Steel Manager - Astro + Tailwind CSS"
4. Visibilité: **Public** ou **Private** selon tes besoins
5. **NE PAS** initialiser avec README, .gitignore ou license (déjà créés localement)
6. Clique sur "Create repository"

## Lier le dépôt local au distant

Une fois le dépôt créé sur GitHub, copie l'URL du repo (format: `https://github.com/Tyrenax/steel-manager-site.git`)

Puis exécute ces commandes dans le terminal :

```bash
cd steel-manager-site
git remote add origin https://github.com/Tyrenax/steel-manager-site.git
git branch -M main
git push -u origin main
```

## Commandes Git utiles

```bash
# Voir le statut
git status

# Ajouter des changements
git add .

# Faire un commit
git commit -m "Description des changements"

# Pousser vers GitHub
git push

# Tirer les derniers changements
git pull
```

## Déploiement automatique (optionnel)

Une fois le repo sur GitHub, tu peux déployer automatiquement sur :

- **Netlify** : https://app.netlify.com/start
- **Vercel** : https://vercel.com/new
- **Cloudflare Pages** : https://pages.cloudflare.com/

Tous ces services sont gratuits pour les sites statiques et se connectent directement à ton repo GitHub.
