import { Request, Response } from "express";

export class RootService {
  public welcomeMessage(req: Request, res: Response) {
    return res.status(200).send("Welcome to Fashion Galaxy !!!");
  }
}
