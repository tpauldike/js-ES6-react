import db from "../database/db.js"
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken"
import util from "util"
import bcrypt from "bcrypt"
import dotenv from "dotenv"
dotenv.config();

const secretKey = process.env.SECRET_KEY

// Create a new user
export const createUser = async(req, res) => {
	try {
		const { first_name, last_name, gender, phone, email, password, business_name, description, business_address } = req.body;

		// convert the callback-based db.query to a promise-based function
		const queryPromise = util.promisify(db.query).bind(db);

		const existingUser = await queryPromise("SELECT * FROM user_info WHERE email = ?", [email])

		// console.log("User ==> " + existingUser.length);

		if (existingUser.length > 0) {
			return res.status(409).json({ message: "User with this email already exists"})
		}
		
		// continue from implementation of uuid for business_id
		const business_id = uuidv4();
		const hashedPassword = await bcrypt.hash(password, 10)

		const newUser = await queryPromise("INSERT INTO user_info (first_name, last_name, gender, phone, email, password, business_name, business_id, description, business_address) VALUES (?,?,?,?,?,?,?,?,?,?)", [first_name, last_name, gender, phone, email, hashedPassword, business_name, business_id, description, business_address]);

		// generate a JWT token
		const token = jwt.sign({ business_id}, secretKey, { expiresIn: "1hr"})

		return res.status(201).json({ message: "User created successfully", token });

	} catch (error) {
		console.log("Error creating user", error.message);
		return res.status(500).json({ message: "Internal Server Error"});
	}
}

// login the user
export const loginUser = async(req, res) => {
	try {
		const { email, password } = req.body;
		// convert the callback-based db.query to a promise-based function
		const queryPromise = util.promisify(db.query).bind(db);

		const existingUser = await queryPromise("SELECT * FROM user_info WHERE email = ?", [email])

		if (existingUser.length === 0) {
			return res.status(400).json({ message: "Invalid email or password" });
		}

		// console.log(existingUser[0].password)
		// verify the password
		const isPasswordValid = await bcrypt.compare(password, existingUser[0].password)

		// console.log(isPasswordValid)
		if (!isPasswordValid) {
			return res.status(400).json({ message: "Invalid email or password" });
		}

		// generate a JWT token
		const token = jwt.sign({ business_id: existingUser[0].business_id }, secretKey, { expiresIn: "1hr"})


		return res.status(200).json({ message: "Login Successful", token, user: existingUser[0] })

	} catch (error) {
		console.log("Error logging in user", error.message);
		return res.status(500).json({ message: "Internal Server Error" });
	}
}