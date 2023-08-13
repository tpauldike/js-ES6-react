
import db from "../database/db.js";
import util from "util";


// convert the callback-based db.query to a promise-based function
const queryPromise = util.promisify(db.query).bind(db);

// create a new product
export const createProduct = async(req, res) => {
	try {
		const { product_name, price, per, product_status } = req.body;

		const { business_id } = req;

		await queryPromise("INSERT INTO product_info ( business_id, product_name, price, per, product_status) VALUES ( ?, ?, ?, ?, ?)", [business_id, product_name, price, per, product_status])

		return res.status(201).json({ message: "Product Created successfully"})
	} catch (error) {
		console.log("Error creating product", error.message);
		return res.status(500).json({ message: "Internal Server Error" });
	}
}

// fetch all products
export const fetchAllProducts = async(req, res) => {
	try {
		const { business_id } = req;

		// Retrieve all the products
		const products = await queryPromise("SELECT * FROM product_info WHERE business_id = ?", [business_id]);

		return res.status(200).json({ message: "All products retrieved successfully", products })

	} catch (error) {
		console.log("Error fetching products", error.message);
		return res.status(500).json({ message: "Internal Server Error" });
	}
}

//  fetch a single product
export const fetchSingleProduct = async(req, res) => {
	try {
		const { order_no } = req.params;
		const { business_id } = req;

		const product = await queryPromise("SELECT * FROM product_info WHERE business_id = ? AND order_no = ?", [business_id, order_no]);

		if (product.length === 0) {
			return res.status(404).json({ message: "Product not found"})
		}

		return res.status(200).json({message: "Product retrieved successfully", product })

	} catch (error) {
		console.log("Error fetching product", error.message);
		return res.status(500).json({ message: "Internal Server Error" });
	}
}

// Update product
export const updateProduct = async(req, res) => {
	try {
		const { product_name, price, per, product_status } = req.body
		const { order_no } = req.params;
		const { business_id } = req;

		await queryPromise("UPDATE product_info SET product_name = ?, price = ?, per = ?, product_status = ? WHERE order_no = ? AND business_id = ?", [product_name, price, per, product_status, order_no, business_id])
		
		return res.status(200).json({ message: "Product updated successfully"})

	} catch (error) {
		console.log("Error updating product", error.message);
		return res.status(500).json({ message: "Internal Server Error" });
	}
}

// Delete product
export const deleteProduct = async(req, res) => {
	try {
		const { order_no } = req.params;
		const { business_id } = req;

		await queryPromise("DELETE FROM product_info WHERE order_no = ? AND business_id = ?", [ order_no, business_id ])

		return res.status(200).json({ message: "Product deleted successfully"})
		
	} catch (error) {
		console.log("Error deleting product", error.message);
		return res.status(500).json({ message: "Internal Server Error" });
	}
}