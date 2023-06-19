import { v4 } from "uuid";
import db from "../config/db.js";

export const createUser = async (req, res) => {
	try {
		const {
			full_name,
			google_name,
			gender,
			marital_status,
			subscription,
			course,
			schedule,
			email,
			phone,
		} = req.body;

		
		const user = {
			unique_id: v4(),
			full_name,
			google_name,
			gender,
			marital_status,
			subscription,
			course,
			schedule,
			email,
			phone,
		};

		if (
			!user.full_name ||
			!user.google_name ||
			!user.gender ||
			!user.marital_status
		) {
			return res.status(400).json({ message: "All fields are required" });
		}
		db.query(
			"INSERT INTO subscription_form (unique_id, full_name, google_name, gender, marital_status, subscription, course, schedule, email, phone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
			[user.unique_id, user.full_name, user.google_name, user.gender, user.marital_status, user.subscription, user.course, user.schedule, user.email, user.phone], (err, _) => {
				if (err) {
			return res.status(409).json({ message: "User with this email already exists"})
		}
		return res.json({ message: "User created successfully" });
	}
	);
	} catch (error) {
		console.log("Error creating user" + error.message);
		
		return res.json({ message: "An error occurred, please try again" });
	}
};
