import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const connection = mysql.createConnection({
	host: process.env.HOST,
	user: "root",
	port: process.env.DBPORT,
	database: process.env.DATABASE,
	password: process.env.PASSWORD,
});

connection.connect(function (err) {
	if (err) {
		return console.log("error: " + err.message);
	}

	console.log("Connected to MySQL server.");
});


export default connection;
