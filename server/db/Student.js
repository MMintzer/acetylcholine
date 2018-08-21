const Sequelize = require('sequelize')
const db = require('./db')

const Student = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imgUrl: {
    type: Sequelize.STRING
  }
})

module.exports = Student
