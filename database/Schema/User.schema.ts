import { Schema, model } from "mongoose";

export interface IUser {
  name: String;
  email: String;
}

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const User = model("users", UserSchema);

export default User;
