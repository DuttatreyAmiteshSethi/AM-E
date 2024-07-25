import { body } from "express-validator";

const signupValidator = [body("name").notEmpty().withMessage("Name is Required"), body("email").trim().isEmail().withMessage("Email is required"), body("password").trim().isLength({ min: 6 }).withMessage("Password should contain 6 characters ")];
