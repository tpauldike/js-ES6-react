import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const connection = mysql.createConnection({
	host: process.env.TIDB_HOST,
	user: process.env.TIDB_USER,
	password: process.env.TIDB_PASSWORD,
	port: process.env.TIDB_PORT
});

connection.connect((err) => {
	if (err) {
		console.log(`Error connecting to DB: ${err.message}`);
	} else {
		console.log(`Connection Established`);
	}
});

export default connection
