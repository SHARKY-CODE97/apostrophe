const { FOREIGNKEYS } = require("sequelize/lib/query-types");
const sequelize = require("../utils/DB/config");
const { DataTypes } = require("sequelize");
const Roles_Permissions = sequelize.define(
  "Roles_Permissions",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        module:{
            name: 'Roles',
            foreignKey: 'id',
        }
    },
    PermissionStatusId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        module:{
            name: 'Permissions',
            foreignKey: 'id',
        }    
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

module.exports = Roles_Permissions;
