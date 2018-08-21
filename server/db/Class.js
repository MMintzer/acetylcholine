const Sequelize = require('sequelize')
const db = require('./db')

const Class = db.define('class', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  about: {
    type: Sequelize.TEXT
  }
})

module.exports = Class
