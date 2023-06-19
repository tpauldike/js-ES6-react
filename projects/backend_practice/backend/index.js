import express from 'express';
import dotenv from 'dotenv';
import connection from './src/config/db.js';
import router from './src/routes/user.route.js';
import cors from "cors"
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());

app.use(express.json());

app.get('/test', (req, res) => {
	return res.json({message: "This is Topman learning Express"})
})

app.use('/api/v0', router);

connection;

app.listen(PORT, () => {
	console.log(`server is listening on: http:localhost:${PORT}`);
})