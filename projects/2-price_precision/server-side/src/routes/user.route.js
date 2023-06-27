import express from 'express';

const router = express.Router();

router.post("/create", handler) // create a new user
router.post("/login", handler) // login the user

export default router;