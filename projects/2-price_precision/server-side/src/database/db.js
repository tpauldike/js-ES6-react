import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	port: process.env.DB_PORT,
	database: process.env.DB_DATABASE,
});

connection.connect((err) => {
	if (err) {
		console.log(`Error connecting to DB: ${err.message}`);
	} else {
		console.log(`Connection Established`);
	}
});

export default connection
