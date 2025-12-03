const { Users, Roles, Users_Roles, Permissions } = require("../models");
class AdminService {
  async getAllUsers() {
    try {
      return await Users.findAll({
        include: [
          {
            model: Roles,
            attributes: ["roleName"],
            through: Users_Roles,
          },
        ],
      }).then((users) => {
        return users;
      });
    } catch (error) {
      {
        error.status = 500;
        error.message = "something went wrong in admin service";
        throw error;
      }
    }
  }

  async getAllPermission() {
    try {
      return await Permissions.findAll().then((result) => {
        return result;
      });
    } catch (error) {
      throw error;
    }
  }
  async getAllRoles() {
    try {
      return await Roles.findAll().then((result) => {
        return result;
      });
    } catch (error) {
      throw error;
    }
  }

  async addNewRole(RoleData) {
    const roleInfo = {
      roleName: RoleData.roleName,
    };
    const relatedPermission = [...RoleData.permissions];
    try {
      return Roles.create({ roleInfo }).then((result) => {
        return result.setPermission(relatedPermission).then((value) => {
          return value;
        });
      });
    } catch (error) {
      throw error;
    }
  }

   async updateRole(RoleData) {
    const roleInfo = {
      id: RoleData.id,
      roleName: RoleData.roleName,

    };
    const relatedPermission = [...RoleData.permissions];
    try {
      return Roles.update({ roleInfo }).then((result) => {
        return result.setPermission(relatedPermission).then((value) => {
          return value;
        });
      });
    } catch (error) {
      throw error;
    }
  }



}

module.exports = new AdminService();
