const Users = require('./Users');
const Roles = require('./Roles');
const Users_Roles = require('./Users_Roles');
const Roles_Permissions = require('./Roles_Permissions');   
const Permissions = require('./Permissions');


Users.belongsToMany(Roles, { through: Users_Roles, foreignKey: 'userId' });
Roles.belongsToMany(Users, { through: Users_Roles, foreignKey: 'roleId' });
Roles.belongsToMany(Permissions, { through: Roles_Permissions, foreignKey: 'roleId' });
Permissions.belongsToMany(Roles, { through: Roles_Permissions, foreignKey: 'permissionId' });


module.exports = {
    Users,
    Roles,
    Users_Roles,
    Roles_Permissions,
    Permissions
};