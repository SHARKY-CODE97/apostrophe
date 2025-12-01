const sequelize = require("../utils/DB/config");
const { DataTypes } = require("sequelize");
const Users_Roles = sequelize.define(
    "Users_Roles",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: false,
            module:{
                name: 'Users',
                foreignKey: 'id',
            }
        },
        roleId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            module:{
                name: 'Roles',
                foreignKey: 'id',
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
        }
    }
)
module.exports = Users_Roles;