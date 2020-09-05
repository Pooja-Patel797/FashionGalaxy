import express from "express";
import { GetProductsController } from "../controller/products.controller";
import { GetProductController } from "../controller/products.controller";

const router = express.Router();

router.route("/productsdetails").get(GetProductsController);
router.route("/productsdetails/:id").get(GetProductController);

export default router;
