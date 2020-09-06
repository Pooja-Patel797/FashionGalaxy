// import { Request, Response } from "express";
// import { GetAllProducts } from "../services/product.service";
// import { GetProduct } from "../services/product.service";

// export const GetProductsController = (req: Request, res: Response) => {
//   try {
//     const data = GetAllProducts();
//     res.send(data);
//   } catch (e) {
//     console.log(e.message);
//     res.sendStatus(500);
//   }
// };

// export const GetProductController = (req: Request, res: Response) => {
//   try {
//     const id: any = req.params.id;
//     // // console.log("from controller");
//     // // console.log(id);
//     // console.log(req.params.id);
//     const data = GetProduct(id);
//     res.send(data);
//   } catch (e) {
//     console.log(e.message);
//     res.sendStatus(500);
//   }
// };
