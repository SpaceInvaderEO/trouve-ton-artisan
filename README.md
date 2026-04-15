# Trouve ton artisan

Projet réalisé dans le cadre du titre professionnel Développeur Web (CEF).  
L'idée : une plateforme pour que les habitants de la région Auvergne-Rhône-Alpes puissent trouver un artisan facilement et le contacter en quelques clics.

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

## Installation

### 1. Cloner le repo

```bash
git clone https://github.com/ton-pseudo/trouve-ton-artisan.git
cd trouve-ton-artisan
```

### 2. Installer les dépendances du frontend

```bash
cd client
npm install
```

### 3. Installer les dépendances du backend

```bash
cd ../server
npm install
```

### 4. Configurer la base de données

Créer une base de données MySQL nommée `trouve_ton_artisan`, puis importer les scripts SQL dans cet ordre :

```bash 
mysql -u root -p trouve_ton_artisan < database/create.sql
 
mysql -u root -p trouve_ton_artisan < database/seed.sql
```

### 5. Configurer les variables d'environnement

Dans le dossier `server/`, copier le fichier `.env.example` en `.env` et remplir les valeurs :

```bash
cp .env.example .env
```

```env
PORT=3001
CLIENT_URL=http://localhost:5173

DB_HOST=localhost
DB_PORT=3306
DB_NAME=trouve_ton_artisan
DB_USER=root
DB_PASSWORD=ton_mot_de_passe
```

---

## Lancer le projet en local

Il faut deux terminaux ouverts en parallèle.

**Terminal 1 — le serveur API :**
```bash
cd server
npm run dev
```
L'API tourne sur `http://localhost:3001`

**Terminal 2 — le frontend React :**
```bash
cd client
npm run dev
```
Le site est accessible sur `http://localhost:5173`

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
