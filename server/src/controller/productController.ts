import { addProduct, getAllProducts, getProductById } from "../services/index";
import { Request, Response } from "express";

export const addProductController = async (req: Request, res: Response) => {
  let product = req.body;
  console.log("in controller");
  console.log(product);
  await addProduct(product).then((data) => {
    console.log(data);
    res.send(data);
  });
};

export const getProductByIdController = async (req: Request, res: Response) => {
  let productId = req.body;
  console.log("in controller");
  console.log(productId);
  await getProductById(productId).then((data) => {
    console.log(data);
    res.send(data);
  });
};

export const getAllProductsController = async (req: Request, res: Response) => {
  await getAllProducts().then((data) => {
    console.log(data);
    res.send(data);
  });
};

// export const deleteProductController = (req: Request, res: Response) => {
//   let id = req.params.id;
//   console.log("in controller");
//   console.log(id);
//   const data = deleteUser(id).then((data) => {
//     console.log(data);
//     res.send("successfully deleted");
//   });
// };

// export const updateProductController = (req: Request, res: Response) => {
//   let id = req.params.id;
//   let user = req.body;

//   console.log("in controller");
//   console.log(user);
//   const data = updateUser(id, user).then((data) => {
//     console.log(data);
//     res.send(data);
//   });
// };
