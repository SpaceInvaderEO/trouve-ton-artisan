const express = require('express');
const cors = require('cors');
require('dotenv').config();

const artisanRoutes = require('./routes/artisanRoutes');
const categorieRoutes = require('./routes/categorieRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
}));

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'API Trouve ton artisan opérationnelle' });
});

app.use('/api/artisans', artisanRoutes);
app.use('/api/categories', categorieRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Route non trouvée' });
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: 'Erreur serveur interne' });
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

module.exports = app;
