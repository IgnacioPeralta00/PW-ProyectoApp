import express from "express";
import { getCustomers, searchCustomerByCode } from "../controllers/customerControllers/getCustomers.js";

const router = express.Router();

router.get("/customers", getCustomers);
router.get("/customers/search", searchCustomerByCode);

export default router;