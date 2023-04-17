import { Request, Response } from "express";
import User from "../database/Schema/User.schema";
import { IUser } from "./../database/Schema/User.schema";
import { generateJWT } from "../services/jwtservices";

const UserController = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  const userInDatabase = User.findOne({ email });

  if (userInDatabase) {
    const token = generateJWT({ ...userInDatabase });
    res.status(200).send({
      status: 200,
      success: true,
      data: { token },
      message: "Already Registered ! Logging in....",
    });
  } else {
    let newUser = new User({ name, email });
    newUser = await newUser.save();
    const token = generateJWT({ newUser });
    res.status(200).send({
      status: 200,
      success: true,
      data: { token },
      message: "Registered ! Logging in....",
    });
  }
};

export default UserController;
