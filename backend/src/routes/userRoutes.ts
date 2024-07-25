import { Router } from "express";
import { getAllUsers, userSignup } from "../controllers/userController.js";

const userRoutes = Router();

userRoutes.get("/",getAllUsers)

userRoutes.post("/signup",userSignup)

export default userRoutes;