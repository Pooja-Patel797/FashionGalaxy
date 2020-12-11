import {
  BaseHttpController,
  controller,
  httpGet,
  httpPost,
  httpPut,
  httpDelete,
} from "inversify-express-utils";
import { inject } from "inversify";
import * as express from "express";
import { JsonResult } from "inversify-express-utils/dts/results";
import { ProductsService } from "../services/product";

import TYPES from "../constant/types";

@controller("/products")
export class ProductsController extends BaseHttpController {
  constructor(
    @inject(TYPES.ProductsService) private ProductsService: ProductsService
  ) {
    super();
  }

  @httpGet("/")
  public async getProducts(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<JsonResult> {
    const content = await this.ProductsService.getProducts();
    const statusCode = 200;
    return this.json(content, statusCode);
  }

  @httpGet("/:id")
  public async getProduct(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<JsonResult> {
    const content = await this.ProductsService.getProduct(req.params.id);
    const statusCode = 200;
    return this.json(content, statusCode);
  }
  @httpGet("/list/:array")
  public async getProductsByIds(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<JsonResult> {
    let data=JSON.parse(req.params.array);
    
    console.log(data);
    const content = await this.ProductsService.getProductsByIds(data);
    const statusCode = 200;
    return this.json(content, statusCode);
  }

  @httpPost("/")
  public async createProduct(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<JsonResult> {
    const content = await this.ProductsService.createProduct(req.body);
    const statusCode = 201;
    return this.json(content, statusCode);
  }

  @httpPut("/:id")
  public async updateProduct(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<JsonResult> {
    const content = await this.ProductsService.updateProduct(
      req.params.id,
      req.body
    );
    const statusCode = 200;
    return this.json(content, statusCode);
  }

  @httpDelete("/:id")
  public async deleteProduct(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<JsonResult> {
    const content = await this.ProductsService.deleteProduct(req.params.id);
    const statusCode = 200;
    return this.json(content, statusCode);
  }
}
