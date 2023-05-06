import express from "express";
import { addTask , getTasks , updateTask, deleteTask} from "../controllers/task.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { User } from "../models/user.js";

const router = express.Router();

router.post("/task/new", isAuthenticated ,addTask);
router.get("/task/all", isAuthenticated ,getTasks);

router.route("/task/:id").put(isAuthenticated ,updateTask).delete(isAuthenticated ,deleteTask)
export default router