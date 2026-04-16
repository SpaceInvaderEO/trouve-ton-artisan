const { Categorie } = require('../models');

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Categorie.findAll({ order: [['nom', 'ASC']] });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
