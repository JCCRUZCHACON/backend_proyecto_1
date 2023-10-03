const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const User = sequelize.define("user", {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    field: "user_id",
  },

  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING(150),
    allowNull: false,
    unique: true,
  },

  password: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },

  role: {
    type: DataTypes.ENUM("client", "employen"),
    allowNull: false,
    defaultValue: "client",
  },

  status: {
    type: DataTypes.ENUM("available", "no available"), 
    allowNull: false,
    defaultValue: "available", 
  },

  
});

module.exports = User;
