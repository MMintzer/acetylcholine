const db = require('./db')
const Class = require('./Class')
const Comment = require('./Comment')
const Post = require('./Post')
const Student = require('./Student')
const Teacher = require('./Teacher')

// associations VVV
Teacher.hasMany(Post)
Post.belongsTo(Teacher)

Teacher.belongsToMany(Student, { through: 'roster' })
Student.belongsToMany(Teacher, { through: 'roster' })

Teacher.hasMany(Class)
Class.belongsTo(Teacher)

Teacher.hasMany(Comment)
Comment.belongsTo(Teacher)

Student.hasMany(Post)
Post.belongsTo(Student)

Student.belongsToMany(Class, { through: 'classroom' })
Class.belongsToMany(Student, { through: 'classroom' })

Post.belongsTo(Class)
Class.hasMany(Post)

Student.hasMany(Comment)
Comment.belongsTo(Student)
// associations ^^^

module.exports = {
  db,
  Class,
  Comment,
  Post,
  Student,
  Teacher
}
