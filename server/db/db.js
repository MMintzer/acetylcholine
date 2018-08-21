const Sequelize = require('sequelize')
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:1337/acetylcholine', {
  logging: false
})

module.exports = db
