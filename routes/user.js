import express from "express";
import { User } from "../models/user.js";
import { createNewUser, getMyProfile, loginUser ,logoutUser} from "../controllers/user.js";




const router = express.Router();

router.post("/register", createNewUser)
router.post("/login", loginUser)
router.get("/logout", logoutUser)

router.get("/me", getMyProfile)


export default router