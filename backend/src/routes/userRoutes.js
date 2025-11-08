import express from "express";
import verifyToken from "../middlewares/verifyToken.js";
import {
    displayHome,
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/userControllers.js";

const router = express.Router();

router.get('/', verifyToken, displayHome);
router.get('/users', verifyToken, getUsers);
router.get('/users/:id', verifyToken, getUserById);
router.post('/users', verifyToken, createUser);
router.put('/users/:id', verifyToken, updateUser);
router.delete('/users/:id', verifyToken, deleteUser);

export default router
