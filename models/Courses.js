const { Sequelize, DataTypes } = require('sequelize')
const db = require('../database/conn')

const CoursesInfo = db.define('CoursesInfo', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  maxParticipants: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  remainingVacancies: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
})
  
module.exports = CoursesInfo