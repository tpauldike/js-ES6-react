import express from "express";
import dotenv from "dotenv";
import connection from "./src/database/db.js";
import userRouter from "./src/routes/user.route.js"
import productRouter from "./src/routes/product.route.js"
dotenv.config();

const app  = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
	return res.json({ message: "Welcome to Price Precision backend service 🚀" });
});

connection;

// mount the  router
app.use("/user", userRouter);
app.use("/products", productRouter);

app.listen(port, () => {
	console.log(`This server is listening on http://localhost:${port}`);
})	