const { Artisan, Specialite, Categorie } = require('../models');
const { Op } = require('sequelize');

exports.getArtisans = async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      include: [
        {
          model: Specialite,
          as: 'specialite',
          include: [{ model: Categorie, as: 'categorie' }]
        }
      ]
    });
    res.json(artisans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTopArtisans = async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      where: { top: true },
      limit: 3,
      include: [
        {
          model: Specialite,
          as: 'specialite',
          include: [{ model: Categorie, as: 'categorie' }]
        }
      ]
    });
    res.json(artisans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getArtisanById = async (req, res) => {
  try {
    const artisan = await Artisan.findByPk(req.params.id, {
      include: [
        {
          model: Specialite,
          as: 'specialite',
          include: [{ model: Categorie, as: 'categorie' }]
        }
      ]
    });
    if (!artisan) return res.status(404).json({ error: 'Artisan non trouvé' });
    res.json(artisan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getArtisansByCategory = async (req, res) => {
  try {
    const { slug } = req.params;
    const artisans = await Artisan.findAll({
      include: [
        {
          model: Specialite,
          as: 'specialite',
          required: true,
          include: [
            {
              model: Categorie,
              as: 'categorie',
              where: { slug },
              required: true
            }
          ]
        }
      ]
    });
    res.json(artisans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.searchArtisans = async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) return res.json([]);
    
    const artisans = await Artisan.findAll({
      where: {
        nom: { [Op.like]: `%${q}%` }
      },
      include: [
        {
          model: Specialite,
          as: 'specialite',
          include: [{ model: Categorie, as: 'categorie' }]
        }
      ]
    });
    res.json(artisans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.submitContact = async (req, res) => {
  try {
    const { nom, email, objet, message } = req.body;
    console.log('Contact form submission:', { nom, email, objet, message });
    res.status(200).json({ message: 'Message envoyé avec succès' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
