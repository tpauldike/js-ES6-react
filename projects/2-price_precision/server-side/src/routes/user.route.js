import express from 'express';
import { createUser } from '../controllers/user.controller.js';

const router = express.Router();

router.post("/create", createUser) // create a new user
// router.post("/login", handler) // login the user

export default router;