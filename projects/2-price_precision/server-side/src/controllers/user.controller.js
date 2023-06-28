import db from "../database/db.js"
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import dotenv from "dotenv"
dotenv.config();

const secretKey = process.env.SECRET_KEY

// Create a new user
export const createUser = async(req, res) => {
	try {
		const { first_name, last_name, gender, phone, email, password, business_name, description, business_address } = req.body;

		
		// continue from implementation of uuid for business_id
		const business_id = uuidv4();
		const hashedPassword = await bcrypt.hash(password, 10)

		const newUser = await db.query("INSERT INTO user_info (first_name, last_name, gender, phone, email, password, business_name, business_id, description, business_address) VALUES (?,?,?,?,?,?,?,?,?,?)", [first_name, last_name, gender, phone, email, hashedPassword, business_name, business_id, description, business_address]);

		// generate a JWT token
		const token = jwt.sign({ business_id}, secretKey, { expiresIn: "1hr"})

		return res.status(201).json({ message: "User created successfully", token });

	} catch (error) {
		console.log("Error creating user", error.message);
		return res.status(500).json({ message: "Internal Server Error"});
	}
}

// // login the user
// export const loginUser = async(req, res) => {
// 	try {

		
// 	} catch (error) {
		
// 	}
// }