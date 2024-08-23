import User from "../models/users.js";
import bcrypt from "bcrypt";
import { errorHandler } from "../util/errorHandler.js";
//Creates users
const createUser = async (req, res, next) => {
  const { username, password, email } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, password: hashPassword, email });

  try {
    const savedUser = await newUser.save();
    res
      .status(201)
      .json({ success: "User has been created", userInfo: savedUser });
  } catch (err) {
    next(err);
  }
};

//Signin users
const signinUser = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const validUser = await User.findOne({ username });

    if (!validUser) {
      return res
        .status(401)
        .json({ error: "Username or password is incorrect" });
    }

    const validPassword = await bcrypt.compare(password, validUser.password);

    if (!validPassword) {
      return res
        .status(401)
        .json({ error: "Username or password is incorrect" });
    }

    res.status(200).json("User has logged in successfully");
  } catch (err) {
    next(err);
  }
};

export { createUser, signinUser };
