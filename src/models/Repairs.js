const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const Repairs = sequelize.define("repairs", {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("pending", "completed", "cancelled"),
    allowNull: false,
    defaultValue: "pending",
  },
  // userId
  

});

module.exports = Repairs;
