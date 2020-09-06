import express from "express";
// import { GetProductsController } from "../controller/products.controller";
// import { GetProductController } from "../controller/products.controller";
import { roleController } from "../controller/roleController";

const router = express.Router();

// router.route("/productsdetails").get(GetProductsController);
// router.route("/productsdetails/:id").get(GetProductController);
router.route("/role/:roleId/:roleName").get(roleController);

export default router;
