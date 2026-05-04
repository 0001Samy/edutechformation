# Edutech Formations — Site web

Site officiel d'**Edutech Formations**, organisme de formation professionnelle certifié Qualiopi.
Formations dispensées dans les pôles **Droit**, **Médiation** et **IA en entreprise**, éligibles aux financements OPCO et France Travail.

🌐 Production : [https://edutechformations.com](https://edutechformations.com)

---

## Stack technique

| Couche | Technologie |
|--------|-------------|
| Framework | **Next.js 16** (App Router) |
| Language | **TypeScript 5** |
| UI | **React 19**, **Tailwind CSS v4**, **Lucide React** (icônes) |
| Animations | **GSAP** + ScrollTrigger |
| CMS | **Sanity v3** (formations, modules, etc.) |
| Email transactionnel | **Resend** (formulaire de contact) |
| Traduction FR/EN | **DeepL API** (free tier) |
| Hébergement | **Vercel** |

---

## Architecture

```
edutech-formation-remake/
├── app/                              # Next.js App Router
│   ├── layout.tsx                    # Layout racine (LanguageProvider, JSON-LD Organization)
│   ├── page.tsx                      # Accueil
│   ├── about/                        # À propos
│   ├── formations/
│   │   ├── page.tsx                  # Liste avec filtres ?pole=droit|mediation|ia
│   │   └── [slug]/                   # Détail formation (SSG via Sanity)
│   ├── temoignages/                  # Témoignages
│   ├── contact/                      # Formulaire de contact (Resend)
│   ├── qualiopi/                     # Page Qualiopi
│   ├── financement/                  # OPCO / France Travail
│   ├── accessibilite/                # Référent handicap
│   ├── mentions-legales/             # Mentions légales
│   ├── cgv/                          # Conditions générales de vente
│   ├── confidentialite/              # Politique RGPD
│   ├── reglement/                    # Règlement intérieur
│   ├── studio/[[...tool]]/           # Sanity Studio embarqué (route /studio)
│   ├── api/
│   │   ├── contact/route.ts          # POST → envoi email Resend
│   │   ├── formations/route.ts       # GET → liste formations Sanity
│   │   └── translate/route.ts        # POST → DeepL avec cache + termes protégés
│   ├── sitemap.ts                    # /sitemap.xml généré dynamiquement
│   └── robots.ts                     # /robots.txt
│
├── components/
│   ├── Header.tsx                    # Nav + toggle FR/EN
│   ├── Footer.tsx                    # Footer 3 colonnes + badge Qualiopi
│   └── JsonLd.tsx                    # Schémas schema.org (Organization, Course, BreadcrumbList)
│
├── lib/
│   ├── i18n/
│   │   ├── dictionaries.ts           # Strings FR/EN (UI statique)
│   │   ├── LanguageContext.tsx       # Context React + persistance localStorage
│   │   ├── useTranslatedContent.ts   # Hook pour traduire le contenu Sanity (DeepL + cache)
│   │   └── TranslatedText.tsx        # Helper <T> pour textes individuels
│   └── gsap-utils.ts                 # Helpers GSAP
│
├── sanity/
│   ├── lib/client.ts                 # Sanity client
│   └── schemaTypes/                  # Schémas Sanity (formation, moduleDetaille)
│
├── scripts/                          # Scripts d'import en bulk dans Sanity
│   ├── import-formations-ia.ndjson
│   ├── import-formations-ia.mjs
│   ├── import-formations-mediation.ndjson
│   └── import-formations-mediation.mjs
│
└── public/                           # Assets statiques (logo, favicon, certificat Qualiopi)
```

---

## Identité visuelle

Couleurs définies dans `app/globals.css` :

- **`--primary`** : `#08b0a0` (teal du logo)
- **`--accent`** : `#fbba00` (jaune du logo)
- **`--foreground`** : `#272a5f` (bleu foncé du logo)

Disponibles via Tailwind : `bg-primary`, `text-accent`, `border-foreground`, etc.

---

## Démarrage local

### Installation

```bash
npm install
```

### Variables d'environnement (`.env.local`)

```env
# Sanity CMS (obligatoire)
NEXT_PUBLIC_SANITY_PROJECT_ID=b60x0124
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=sk...                    # token Editor pour les imports

# Resend (formulaire de contact)
RESEND_API_KEY=re_...
CONTACT_EMAIL_TO=contact@edutechformations.com

# DeepL (traduction EN — optionnel, fallback FR si absent)
DEEPL_API_KEY=...:fx
```

### Développement

```bash
npm run dev
```

→ [http://localhost:3000](http://localhost:3000)
→ Sanity Studio : [http://localhost:3000/studio](http://localhost:3000/studio)

### Build production

```bash
npm run build
npm start
```

---

## Internationalisation (FR / EN)

Toggle **🇫🇷 / 🇬🇧** dans le header. La langue choisie est persistée dans `localStorage`.

- **Chaînes UI statiques** → dictionnaire `lib/i18n/dictionaries.ts`
- **Contenu dynamique Sanity** (titres formations, modules, descriptions…) → traduit à la volée via DeepL avec :
  - cache mémoire serveur
  - cache localStorage côté client
  - protection des acronymes (OPCO, Qualiopi, RGPD, France Travail, ChatGPT, etc.) via balises `<keep>` ignorées par DeepL
  - cible `EN-GB` pour un ton plus formel

---

## Sanity CMS

Les formations sont gérées via le studio embarqué à `/studio`.

### Schéma `formation`

Champs principaux : `titre`, `slug`, `pole` (droit/mediation/ia), `description`, `duree`, `horaires`, `prixInter`, `prixIntra`, `participantsMin/Max`, `objectifs[]`, `prerequis[]`, `modules[]` (titre + sous-points), `modalitesEvaluation[]`, `suiviExecution[]`, `appreciationResultats[]`, `moyensPedagogiques`, `profilFormateur`, `modalitesAcces`, `image`.

### Import en bulk

Pour importer des formations depuis un fichier NDJSON :

```bash
node --env-file=.env.local scripts/import-formations-mediation.mjs
```

---

## SEO

- **Métadonnées par page** : chaque route a son `layout.tsx` ou `generateMetadata` avec title, description, canonical, openGraph et Twitter cards
- **Sitemap dynamique** : `app/sitemap.ts` (priorités, formations Sanity incluses)
- **Robots** : `app/robots.ts` (bloque `/api` et `/studio`)
- **JSON-LD schema.org** :
  - `EducationalOrganization` injecté dans le `<head>` global (avec SIREN, SIRET, NDA, adresse, certifications)
  - `Course` + `BreadcrumbList` injectés sur chaque page formation

---

## Déploiement

Hébergé sur **Vercel** avec déploiement automatique sur push vers `main`.

Variables d'environnement à configurer sur Vercel (Settings → Environment Variables) :

- `SANITY_API_TOKEN`
- `RESEND_API_KEY`
- `CONTACT_EMAIL_TO`
- `DEEPL_API_KEY`
- (les `NEXT_PUBLIC_SANITY_*` ont des valeurs par défaut dans le code)

---

## Scripts npm

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de dev avec hot reload |
| `npm run build` | Build production |
| `npm start` | Lance le build de prod |
| `npm run lint` | Lint ESLint |

---

## Mentions légales

- **Edutech Formations** — SAS au capital de 1 000 €
- **SIREN** : 977 619 089 — **SIRET (siège)** : 977 619 089 00021
- **NAF** : 85.59A — Formation continue d'adultes
- **NDA** : 11 94 12031 94 (Préfet de la région Île-de-France)
- **Certifié Qualiopi** depuis 2024 — Catégorie « Actions de formation »
- **Siège** : 52 rue Montesquieu, 92600 Asnières-sur-Seine
- **Contact** : contact@edutechformations.com — 06 62 09 18 92
