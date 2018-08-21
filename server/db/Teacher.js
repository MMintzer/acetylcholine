const Sequelize = require('sequelize')
const db = require('./db')

const Teacher = db.define('teacher', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imgUrl: {
    type: Sequelize.STRING
  },
  bio: {
    type: Sequelize.TEXT
  }
})

module.exports = Teacher
