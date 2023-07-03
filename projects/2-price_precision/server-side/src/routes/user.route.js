import express from 'express';
import { createUser, loginUser } from '../controllers/user.controller.js';

const router = express.Router();

router.post("/create", createUser) // create a new user
router.post("/login", loginUser) // login the user

export default router;