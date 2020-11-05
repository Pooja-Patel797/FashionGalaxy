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
import { CartsService } from "../services/cart";

import TYPES from "../constant/types";

@controller("/carts")
export class CartsController extends BaseHttpController {
  constructor(@inject(TYPES.CartsService) private CartsService: CartsService) {
    super();
  }

  @httpGet("/")
  public async getCarts(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<JsonResult> {
    const content = await this.CartsService.getCarts();
    const statusCode = 200;
    return this.json(content, statusCode);
  }

  @httpGet("/:pid")
  public async getCart(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<JsonResult> {
    const content = await this.CartsService.getCart(req.params.pid);
    const statusCode = 200;
    return this.json(content, statusCode);
  }

  @httpPost("/")
  public async createCart(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<JsonResult> {
    console.log("Inside controller");
    const content = await this.CartsService.createOrUpdateCart(req.body);
    const statusCode = 201;
    return this.json(content, statusCode);
  }

  @httpPut("/:id")
  public async updateCart(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<JsonResult> {
    const content = await this.CartsService.updateCart(req.params.id, req.body);
    const statusCode = 200;
    return this.json(content, statusCode);
  }

  @httpDelete("/:id")
  public async deleteCart(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<JsonResult> {
    const content = await this.CartsService.deleteCart(req.params.id);
    const statusCode = 200;
    return this.json(content, statusCode);
  }
}
