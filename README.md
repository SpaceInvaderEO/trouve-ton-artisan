# Trouve ton artisan

Projet réalisé dans le cadre du titre professionnel Développeur Web (CEF).  
L'idée : une plateforme pour que les habitants de la région Auvergne-Rhône-Alpes puissent trouver un artisan facilement et le contacter en quelques clics.

Ce projet mobilise la quasi-totalité des connaissances et compétences acquises. Plus particulièrement, les modules :
- Utiliser l'outil de maquettage FIGMA
- Coder Responsive Design avec React.JS
- Mettre en place une API REST avec Express
- Les bases de données relationnelles
- Gérer une base de données relationnelle avec MySQL

---

## C'est quoi exactement ?

Le site permet de :
- Parcourir les artisans par catégorie (Bâtiment, Services, Fabrication, Alimentation)
- Rechercher un artisan par nom
- Consulter la fiche complète d'un artisan
- Contacter un artisan directement via un formulaire (qui lui envoie un e-mail)

Les données viennent d'une API maison (Express + MySQL), le frontend est en React.

---

## Stack technique

**Frontend**
- React 18 (via Vite)
- React Router DOM pour la navigation
- Bootstrap 5 + Sass pour le style
- Axios pour les appels API

**Backend**
- Node.js + Express
- Sequelize comme ORM
- MySQL / MariaDB

---

## Prérequis

Avant de lancer quoi que ce soit, il faut avoir sur sa machine :

- [Node.js](https://nodejs.org/) v18 ou plus (vérifier avec `node -v`)
- [npm](https://www.npmjs.com/) (fourni avec Node)
- Un serveur MySQL local (XAMPP, WAMP, Laragon, ou autre)

---

## 🛠️ Installation (pas à pas)

Pour que tout roule, je te conseille de suivre cet ordre. C'est assez rapide !

### 1. On récupère le projet
```bash
git clone https://github.com/ton-pseudo/trouve-ton-artisan.git
cd trouve-ton-artisan
```

### 2. Le côté client (Front)
```bash
cd client
npm install
```

### 3. Le côté serveur (API)
```bash
cd ../server
npm install
```

### 4. La base de données (le plus important !)
Il faut d'abord créer une base de données MySQL vide, par exemple appelée `trouve_ton_artisan`. 
Ensuite, tu trouveras les scripts dans le dossier `database/`. Importe-les dans cet ordre :
1. `create.sql` (pour créer les tables)
2. `seed.sql` (pour remplir avec les données de test)

*Astuce : Si tu es en ligne de commande :*
```bash 
mysql -u root -p trouve_ton_artisan < database/create.sql
mysql -u root -p trouve_ton_artisan < database/seed.sql
```

### 5. Les variables d'environnement
Dans le dossier `server/`, j'ai laissé un fichier `.env.example`. 
Fais-en une copie nommée `.env` et ajuste tes accès MySQL (le mot de passe surtout) :
```bash
cp .env.example .env
```

---

## 🚀 Lancement

Une fois que c'est installé, c'est parti. Il faut lancer deux terminaux :

**Terminal 1 — Le serveur API :**
```bash
cd server
npm run dev
```

**Terminal 2 — L'interface React :**
```bash
cd client
npm run dev
```

Normalement, tu pourras voir le site sur `http://localhost:5173` !

---

## 💡 Petit coup de pouce (Troubleshooting)
Si jamais tu as un souci au lancement :
- **Problème de BDD** : Vérifie bien que les accès dans ton `.env` correspondent à ton serveur local (WAMP/XAMPP/MAMP).
- **Port déjà utilisé** : Si le port 3001 est pris, tu peux le changer dans le `.env`, mais n'oublie pas de mettre à jour l'URL côté client si besoin.
- **Node.js** : J'ai utilisé la version 18, si tu as une version plus ancienne, il se peut que Vite râle un peu.

---

## Structure du projet

```
├── client/                 # Application React
│   └── src/
│       ├── components/     # Composants réutilisables (Header, Footer, ArtisanCard…)
│       ├── pages/          # Une page = un fichier (Home, ArtisanList, ArtisanDetail…)
│       ├── styles/         # SCSS global + variables de la charte graphique
│       └── App.jsx         # Point d'entrée + routage
│
├── server/                 # API REST
│   ├── routes/             # Une route = une ressource (artisans, catégories…)
│   ├── models/             # Modèles Sequelize
│   ├── controllers/        # Logique métier
│   └── index.js            # Démarrage du serveur
│
├── database/
│   ├── create.sql          # Création des tables
│   └── seed.sql            # Données de test
│
└── README.md
```

---

## Auteur

Fabien Di Vuolo — Devoir 6, formation Développeur Web, CEF.
