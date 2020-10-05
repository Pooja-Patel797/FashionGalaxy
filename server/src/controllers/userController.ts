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
import { UsersService } from "../services/user";

import TYPES from "../constant/types";

@controller("/users")
export class UsersController extends BaseHttpController {
  constructor(@inject(TYPES.UsersService) private usersService: UsersService) {
    super();
  }
  // @httpGet("/")
  // public get(): string {
  //   return "in user qwerty";
  // }
  @httpGet("/")
  public async getUsers(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<JsonResult> {
    const content = await this.usersService.getUsers();
    const statusCode = 200;
    return this.json(content, statusCode);
  }

  @httpGet("/:id")
  public async getUser(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<JsonResult> {
    const content = await this.usersService.getUser(req.params.id);
    const statusCode = 200;
    return this.json(content, statusCode);
  }

  @httpGet("/:email/:password")
  public async getUserByEmailAndPassword(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<JsonResult> {
    const content = await this.usersService.getUserByEmailAndPassword(
      req.params.email,
      req.params.password
    );
    const statusCode = 200;
    return this.json(content, statusCode);
  }

  @httpPost("/")
  public async createUser(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<JsonResult> {
    const content = await this.usersService.createUser(req.body);
    const statusCode = 201;
    return this.json(content, statusCode);
  }

  @httpPut("/:id")
  public async updateUser(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<JsonResult> {
    const content = await this.usersService.updateUser(req.params.id, req.body);
    const statusCode = 200;
    return this.json(content, statusCode);
  }

  @httpDelete("/:id")
  public async deleteUser(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<JsonResult> {
    const content = await this.usersService.deleteUser(req.params.id);
    const statusCode = 200;
    return this.json(content, statusCode);
  }
}
