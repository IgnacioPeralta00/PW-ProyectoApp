import express from "express";
import { createSale } from "../controllers/salesControllers/createSale.js";
import { getSales, getSalesByCustomer, getSalesReport } from "../controllers/salesControllers/getSales.js";

const router = express.Router();

router.post("/sales", createSale);
router.get("/sales", getSales);
router.get("/sales-customers/", getSalesByCustomer);
router.get("/sales/report", getSalesReport);

export default router;