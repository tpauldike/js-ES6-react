import express from "express";
import dotenv from "dotenv";
import connection from "./src/database/db.js";
import userRouter from "./src/routes/user.route.js"
dotenv.config();

const app  = express();
const port = process.env.PORT || 3000;

app.get("/test", (req, res) => {
	return res.json({ message: "This App is running!!!"})
});

connection;

// mount the  router
app.use("/user", userRouter);

app.listen(port, () => {
	console.log(`This server is listening on http://localhost:${port}`);
})