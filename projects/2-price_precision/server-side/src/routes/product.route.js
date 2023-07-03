import express from "express";
import { createProduct, deleteProduct, fetchAllProducts, fetchSingleProduct, updateProduct } from "../controllers/product.controller.js";
import { extractBusinessId } from "../middleware/user.auth.js";

const router = express.Router();

// create product
router.post("/create", extractBusinessId, createProduct)

// fetch all products
router.get("/all", extractBusinessId, fetchAllProducts);

// fetch a single product
router.get("/:order_no", extractBusinessId, fetchSingleProduct);

// update a single product
router.put("/:order_no/", extractBusinessId, updateProduct);

// delete a single product
router.delete("/:order_no", extractBusinessId, deleteProduct);

export default router;
