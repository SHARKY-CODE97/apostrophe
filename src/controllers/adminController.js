const { Users } = require("../models");
const adminService = require("../services/admin.service");
const AdminService = require("../services/admin.service");
const userService = require("../services/user.service");
exports.getAllUsers = async (req, res, next) => {
  try {
    await AdminService.getAllUsers().then((users) => {
      {
        res.status(200).json({ users });
      }
    });
  } catch (error) {
    next(error);
  }
};

exports.editUserAccount = async (req, res, next) => {
  try {
    const userData = {
      id: req.body.id,
      fName: req.body.fName,
      lName: req.body.lName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      status: req.body.status,
    };
    const rolesList = req.body.rolesList || null;
    userService.updateAccount(userData).then(async (result) => {
      if (rolesList) {
        await Users.setRoles([rolesList]);
      }
      res.status(200).json({ result });
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteUserAccount = async (req, res, next) => {
  try {
    const userId = req.body.id;
    return await userService.deleteAccount(userId).then((result) => {
      res.status(201).json({ result });
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllPermissions = (req, res, next) => {
  try {
    adminService.getAllPermission().then((result) => {
      res.status(200).json({ result });
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllRoles = (req, res, next) => {
  try {
    adminService.getAllRoles().then((result) => {
      res.status(200).json({ result });
    });
  } catch (error) {
    next(error);
  }
};
exports.addNewRole = (req, res, next) => {
  try {
    const roleName = req.body.roleName;
    const permissions = req.body.permissions;
    let roleInfo = {
      roleName: roleName,
      permissions: permissions,
    };
    adminService.addNewRole(roleInfo).then(() => {
      res.status(201).json({ message: "success" });
    });
  } catch (error) {
    next(error);
  }
};

exports.updateRole = (req, res, next) => {
  try {
    const id = req.body.id;
    const roleName = req.body.roleName;
    const permissions = req.body.permissions;
    let roleInfo = {
      id: id,
      roleName: roleName,
      permissions: permissions,
    };
    adminService.updateRole(roleInfo).then(() => {
      res.status(201).json({ message: "success" });
    });
  } catch (error) {
    next(error);
  }
};
