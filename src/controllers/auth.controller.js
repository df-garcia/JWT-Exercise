import User from "../models/User";
import Role from "../models/Role";
import jwt from "jsonwebtoken";
import config from "../config";

export const signUp = async (req, res) => {
  const { username, email, password, roles } = req.body;

  //const userFound = User.find({ email });

  const newUser = new User({
    username: username,
    email: email,
    password: await User.encryptPassword(password),
  });

  if (roles) {
    const foundRoles = await Role.find({ name: { $in: roles } });
    newUser.roles = foundRoles.map((role) => role._id);
  } else {
    const userRole = await Role.findOne({ name: "user" });
    newUser.roles = [userRole._id];
  }

  const savedUser = await newUser.save();

  const token = jwt.sign({ id: savedUser._id }, config.SECRET_KEY, {
    expiresIn: 86400, //24 Horas
  });

  console.log(savedUser);
  res.json({ token });
};

export const signIn = async (req, res) => {
  const userFound = await User.findOne({ email: req.body.email }).populate(
    "roles"
  );

  if (!userFound) return res.status(400).json({ message: "User not found" });

  const matchPassword = await User.comparePassword(
    req.body.password,
    userFound.password
  );

  if (!matchPassword)
    return res.status(401).json({ message: "Invalid Password" });

  const token = jwt.sign({ id: userFound._id }, config.SECRET_KEY, {
    expiresIn: 86400, //24 Horas
  });
  res.json({ token });
};
