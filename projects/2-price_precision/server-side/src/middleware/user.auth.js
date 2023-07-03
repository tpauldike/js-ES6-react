import jwt from "jsonwebtoken"

import dotenv from "dotenv";
dotenv.config();

const secretKey = process.env.SECRET_KEY;

// middleware to extract the business_id from the token
export const extractBusinessId = (req, res, next) => {
	try {
		// Get the token from the request header
		const authHeader = req.headers.authorization

		if (!authHeader) {
			return res.status(403).json({ message: "Missing authorization header"})
		}

		const token = authHeader.split(" ")[1];
		if (!token) {
			return res.status(403).json({ message: "Missing authorization token"})
		}
		
		// verify and decode the token
		const decodedToken = jwt.verify(token, secretKey )

		const { business_id } = decodedToken

		// add the business_id to the request object
		req.business_id = business_id

		next()
	} catch (error) {
		console.log(error)
		return res.status(500).json({ message: "Internal Server Error" });
	}
	
}