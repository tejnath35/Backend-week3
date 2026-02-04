import exp from 'express';
import usermodel from '../Models/User-Model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { verifyToken } from "../middlewares/verifyToken.js";


export const userApp = exp.Router();


userApp.post('/users', async (req, res) => {
  let newUser = req.body;

  // hash password before saving
  const hashedPassword = await bcrypt.hash(newUser.password, 10);
  newUser.password = hashedPassword;

  let user = new usermodel(newUser);
  await user.save();

  res.status(201).json({ message: "User created successfully" });
});

userApp.get('/users', async (req, res) => {
  let usersList = await usermodel.find();
  res.json(usersList);
});


userApp.get('/users/:id', async (req, res) => {
  let objectId = req.params.id;

  let user = await usermodel.findById(objectId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json({ message: "user found", payload: user });
});


userApp.put('/users/:id', async (req, res) => {
  let objectId = req.params.id;
  let modifiedUser = req.body;

  if (modifiedUser.password) {
    modifiedUser.password = await bcrypt.hash(modifiedUser.password, 10);
  }

  let updatedUser = await usermodel.findByIdAndUpdate(
    objectId,
    modifiedUser,
    { new: true }
  );

  if (!updatedUser) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json({ message: "user updated", payload: updatedUser });
});

userApp.delete('/users/:id', async (req, res) => {
  let objectId = req.params.id;

  let deletedUser = await usermodel.findByIdAndDelete(objectId);

  if (!deletedUser) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json({ message: "user deleted", payload: deletedUser });
});


userApp.post('/auth', async (req, res) => {
  let userCred = req.body;

  let userDB = await usermodel.findOne({ username: userCred.username });

  if (!userDB) {
    return res.status(404).json({ message: "Invalid username" });
  }

  let status = await bcrypt.compare(
    userCred.password,
    userDB.password
  );

  if (!status) {
    return res.status(401).json({ message: "Invalid password" });
  }

  let signedToken = jwt.sign(
    { username: userDB.username },
    "secret",
    { expiresIn: "10s" }
  );

  res.cookie("token", signedToken, {
    httpOnly: true
  });

  res.status(200).json({ message: "Login successful" });
});

userApp.get("/test", verifyToken, (req, res) => {
  res.json({ message: "Test route working ✅" });
});

