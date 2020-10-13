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
import { CommentsService } from "../services/comment";

import TYPES from "../constant/types";

@controller("/comments")
export class CommentsController extends BaseHttpController {
  constructor(
    @inject(TYPES.CommentsService) private CommentsService: CommentsService
  ) {
    super();
  }
  // @httpGet("/")
  // public get(): string {
  //   return "in Comment qwerty";
  // }
  @httpGet("/")
  public async getComments(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<JsonResult> {
    const content = await this.CommentsService.getComments();
    const statusCode = 200;
    return this.json(content, statusCode);
  }

  @httpGet("/:id")
  public async getComment(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<JsonResult> {
    const content = await this.CommentsService.getCommentsById(req.params.id);
    const statusCode = 200;
    return this.json(content, statusCode);
  }

  @httpPost("/")
  public async createComment(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<JsonResult> {
    const content = await this.CommentsService.createComment(req.body);
    const statusCode = 201;
    return this.json(content, statusCode);
  }

  @httpPut("/:id")
  public async updateComment(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<JsonResult> {
    const content = await this.CommentsService.updateComment(
      req.params.id,
      req.body
    );
    const statusCode = 200;
    return this.json(content, statusCode);
  }

  @httpDelete("/:id")
  public async deleteComment(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<JsonResult> {
    const content = await this.CommentsService.deleteComment(req.params.id);
    const statusCode = 200;
    return this.json(content, statusCode);
  }
}
