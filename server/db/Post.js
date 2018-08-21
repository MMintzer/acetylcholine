const Sequelize = require('sequelize')
const db = require('./db')

const Post = db.define('post', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  content: {
    type: Sequelize.TEXT
  },
  dateCreated: {
    type: Sequelize.DATE
  },
  dateUpdated: {
    type: Sequelize.DATE
  }
})
