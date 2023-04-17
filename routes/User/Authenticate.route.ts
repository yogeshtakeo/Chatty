import { Router, RouterOptions } from "express";
import UserController from "../../controllers/Users.controller";

const AuthenticationRouter = Router();

AuthenticationRouter.get("/", UserController);

export default AuthenticationRouter;
