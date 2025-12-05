const authService = require("../services/auth.service");

exports.signUp = async (req, res, next) => {
    console.log(req.body)
  try {
    const userData = {
      email: req.body.email,
      fName: req.body.fName,
      lName: req.body.lName,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,
    };
    const { user, token } = await authService.signUp(userData);
   
    res.status(201).json({ user, token });
  } catch (error) {
    error.status = 400;
    error.message = "Sign Up Failed";
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    
    const { user, token } = await authService.login(email, password);
    res.status(200).json({ user, token });
  } 
    catch (error) { 
        error.status = 401;
        error.message = "Login Failed";
        next(error);
    }   
};


