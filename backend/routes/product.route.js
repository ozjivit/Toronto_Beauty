import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getFeaturedProducts,
  getProductsByCategory,
  getRecommendedProducts,
  toggleFeaturedProduct,
} from "../controllers/product.controller.js";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// Get all products (admin only)
router.get("/", protectRoute, adminRoute, getAllProducts);

// Get featured products
router.get("/featured", getFeaturedProducts);

// Get products by category
router.get("/category/:category", getProductsByCategory);

// Get recommended products
router.get("/recommendations", getRecommendedProducts);

// Create a new product (admin only)
router.post("/", protectRoute, adminRoute, createProduct);

// Toggle product as featured (admin only)
router.patch("/:id", protectRoute, adminRoute, toggleFeaturedProduct);

// Delete product (admin only)
router.delete("/:id", protectRoute, adminRoute, deleteProduct);

export default router;
