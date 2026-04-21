import { Router } from "express";
import * as userController from "../controllers/user.controller.js";

const router = Router();

router.patch("/:id/password", userController.changePassword);
router.patch("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

export default router;
