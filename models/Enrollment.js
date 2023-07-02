const { Sequelize, DataTypes } = require('sequelize')
const db = require('../database/conn')
const User = require('../models/User')
const Courses = require('../models/Courses')

const Enrollment = db.define('Enrollment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  coursesInfoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
})

Enrollment.belongsTo(User)
Enrollment.belongsTo(Courses)

module.exports = Enrollment