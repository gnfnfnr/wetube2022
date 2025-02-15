import mongoose from "mongoose";

const userScheme = new mongoose.Schema({
  email: { type: String, require: true, unique: true },
  username: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  name: { type: String, require: true },
  location: { type: String },
});

const User = mongoose.model("User", userScheme);

export default User;
