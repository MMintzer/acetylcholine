const Sequelize = require('sequelize')
const db = require('./db')

const Comment = db.define('comment', {
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  dateCreated: {
    type: Sequelize.DATE
  },
  dateUpdated: {
    type: Sequelize.DATE
  }
})
