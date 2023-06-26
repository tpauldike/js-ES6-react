import db from "../database/db.js"

// Create a new user
const createUser = async(req, res) => {
	try {
		const { first_name, last_name, gender, phone, email, password, business_name, description, business_address } = req.body;
		
		// continue from implementation of uuid for business_id

		const newUser = await db.query("INSERT INTO user_info (first_name, last_name, gender, phone, email, password, business_name, business_id, description, business_address) VALUES (?,?,?,?,?,?,?,?,?,?)", [first_name, last_name, gender, phone, email, password, business_name. business_id, description, business_address]);


	} catch (error) {
		
	}
}

//  SQL INJECTION