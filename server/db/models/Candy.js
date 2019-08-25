const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('candy', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true }
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true}
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {max: 10}
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://upload.wikimedia.org/wikipedia/en/8/85/Gene_Wilder_as_Willy_Wonka.jpeg',
  }
});
