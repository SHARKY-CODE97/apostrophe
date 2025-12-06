const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Users } = require("../models");
class Authentication {
  async signUp(userData) {
    try {
      const hashedPassword = await bcrypt.hash(userData.password, 10);

      const user = await Users.create({
        ...userData,
        password: hashedPassword,
      });

      const token = jwt.sign(
        { userId: user.id, email: user.email, tokenVersion: 0 },
        process.env.SECRET,
        { expiresIn: "1y" }
      );
      
      return { user, token };
    } catch (error) {
      throw error;
    }
  }

  async login(email, password) {
    try {
      const user = await Users.findOne({ where: { email } });

      if (!user) {
        const error = new Error("Invalid credentials");
        error.status = 401;
        throw error;
      }
console.log(password,user.password)
      const isMatch = await bcrypt.compare(password, user.password);
      console.log(isMatch)
      if (!isMatch) {
        const error = new Error("Invalid credentials");
        error.status = 401;
        throw error;
      }

      console.log(user.id, user.email);

      const token = jwt.sign(
        { userId: user.id, email: user.email, tokenVersion: user.tokenVersion },
        process.env.SECRET,
        { expiresIn: "1y" }
      );
      console.log(token);
      return { user, token };
    } catch (error) {
      throw error;
    }
  }
}

module.exports=new Authentication()