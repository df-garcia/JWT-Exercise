import { Router } from "express";
import * as authController from "../controllers/auth.controller";
import { verifyToken, isAdmin } from "../middlewares/authJWT";

const router = Router();

router.post("/signup", [verifyToken, isAdmin], authController.signUp);
router.post("/signin", authController.signIn);

export default router;
