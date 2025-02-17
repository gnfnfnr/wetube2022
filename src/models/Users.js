import mongoose from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
  email: { type: String, require: true, unique: true },
  username: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  name: { type: String, require: true },
  location: { type: String },
});

userSchema.pre(`save`, async function () {
  console.log(this)
  console.log("Users password : ", this.password);
  this.password = await bcrypt.hash(this.password, 5);
  console.log("Hashing password : ", this.password);
  });

const User = mongoose.model("User", userSchema);

export default User;
