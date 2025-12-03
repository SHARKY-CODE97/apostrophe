const { Users } = require("../models");
const userService = require("../services/user.service");
exports.getProfileInfo = (req, res, next) => {
  try {
    userService
      .getProfileInfo("b1985d02-0a9c-430a-8326-502065d1759c")
      .then((result) => {
        res.status(200).json({ result });
      });
  } catch (error) {
    next(error);
  }
};

exports.deleteAccount = async (req, res, next) => {
  try {
    return await userService
      .deleteAccount("b1985d02-0a9c-430a-8326-502065d1759c")
      .then((result) => {
        res.status(201).json({ result });
      });
  } catch (error) {
    next(error);
  }


};

  exports.updateAccount = async (req, res, next) => {
    try {
      const userData = {
        id: req.userId,
        fName: req.body.fName,
        lName: req.body.lName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
      };

      userService.updateAccount(userData).then((result) => {
        res.status(200).json({ message: "success" });
      });
    } catch (error) {
      next(error);
    }
  };