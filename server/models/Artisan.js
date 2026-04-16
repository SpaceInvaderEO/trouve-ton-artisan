const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Artisan = sequelize.define('Artisan', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  nom: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  note: {
    type: DataTypes.DECIMAL(2, 1),
    allowNull: false,
  },
  localisation: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  apropos: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  site_web: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  photo: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  top: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  specialite_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
}, {
  tableName: 'artisans',
  timestamps: false,
});

module.exports = Artisan;
