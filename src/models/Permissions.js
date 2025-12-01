const sequelize = require("../utils/DB/config");
const { DataTypes } = require("sequelize");
const Permissions = sequelize.define(
  "Permissions",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    permissionName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,    
    }
    ,
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

module.exports = Permissions;
