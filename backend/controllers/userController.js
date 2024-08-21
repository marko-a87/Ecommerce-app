import User from "../models/users";

const createUser = async (req, res) => {
  const newUser = new User(req.body);
};

const signinUser= async (req, res) => {};
