import bcrypt from "bcrypt";

const signinAdmin = async (req, res) => {
  const { username, password } = req.body;
  try {
  } catch (err) {}
};

const registerAdmin = async (req, res) => {
  const { username, password } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);
  const newAdmin = new Admin({ username, password: hashPassword });
  try {
    const savedAdmin = await newAdmin.save();
    res
      .status(201)
      .json({ success: "Admin has been created", userInfo: savedAdmin });
  } catch (err) {
    res.json({ Error: err.message });
  }
};

export{}
