import express from "express";
import { verifyToken } from "../utils/middlewares/verifyToken.js";

import { displayHome } from "../controllers/userControllers/displayHome.js";
import { singUp } from "../controllers/userControllers/singUp.js";
import { logIn } from "../controllers/userControllers/logIn.js";
import { getUsers, getUserById } from "../controllers/userControllers/getUsers.js";
import { updateUser } from "../controllers/userControllers/updateUser.js";
import { deleteUser } from "../controllers/userControllers/deleteUser.js";

const router = express.Router();

router.get('/', displayHome);
router.post('/singUp', singUp);
router.post('/logIn', logIn);
router.get('/users', verifyToken, getUsers);
router.get('/users/:id', verifyToken, getUserById);
router.put('/users/:id', verifyToken, updateUser);
router.delete('/users/:id', verifyToken, deleteUser);

export default router
