const { Users, Roles, Users_Roles } = require("../models");

class UserService {
  async getProfileInfo(userId) {
    try {
      return await Users.findByPk(userId, {
        include: [
          {
            model: Roles,
            attributes: ["roleName"],
            through: Users_Roles,
          },
        ],
      });
    } catch (error) {
      throw error;
    }
  }

  async deleteAccount(userId) {
    try {
      return await Users.destroy({
        where: {
          id: userId,
        },
      }).then((result) => {
        return result;
      });
    } catch (error) {
      throw error;
    }
  }

  async updateAccount(userData) {
    try {
      return Users.update(
        {
         ...userData
        },
        { where: { id: userData.id } }
      ).then((result) => {
        return result;
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UserService();
