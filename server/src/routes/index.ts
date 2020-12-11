// import express from "express";
// import {
//   roleController,
//   addUserController,
//   getAllUserController,
//   getUserByIdController,
//   deleteUserController,
//   updateUserController,
//   getAllProductsController,
//   getProductByIdController,
//   addProductController,
//   getUserByEmailPasswordController,
// } from "../controllers/index";
// import { checkCache } from "./redis";

// const router = express.Router();

// //api's for user
// router.route("/user/:id").put(updateUserController);
// router.route("/user/").post(addUserController);
// router.route("/users/:id").get(checkCache, getAllUserController);
// router.route("/user/:id").get(checkCache, getUserByIdController);
// router.route("/user/:id").delete(deleteUserController);
// router.route("/user/:email/:password").get(getUserByEmailPasswordController);

// //api's for product
// router.route("/product").post(addProductController);
// router.route("/product").get(getAllProductsController);
// router.route("/product/:id").get(checkCache, getProductByIdController);
// router.route("product/:product").put();
// router.route("/product/:pid").delete();

// //api's for role
// router.route("/role/:role").post(roleController);
// router.route("/role").get();
// router.route("/role/:id").get();
// router.route("role/:role").put();
// router.route("/role/:id").delete();

// //api's for suppliers
// router.route("/supplier/:supplier").post(roleController);
// router.route("/supplier").get();
// router.route("/supplier/:id").get();
// router.route("supplier/:supplier").put();
// router.route("/supplier/:id").delete();

// //api's for category
// router.route("/category/:category").post(roleController);
// router.route("/category").get();
// router.route("/category/:id").get();
// router.route("category/:category").put();
// router.route("/category/:id").delete();

// export default router;
