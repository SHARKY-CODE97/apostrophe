const sequelize = require("../utils/DB/config");
const { DataTypes } = require("sequelize");
const Roles = sequelize.define(
  "Roles",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    roleName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },

    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,   
    },
})

module.exports = Roles;
