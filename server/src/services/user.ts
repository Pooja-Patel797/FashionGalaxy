import { Request, Response } from "express";
import { MongooseDocument } from "mongoose";
import { User } from "../models/users";

export class UserService {
  //Getting data from the db
  public getAllUser(req: Request, res: Response) {
    User.find({}, (error: Error, user: MongooseDocument) => {
      if (error) {
        res.send(error);
      }
      res.json(user);
    });
  }

  public addNewUser(req: Request, res: Response) {
    const newUser = new User(req.body);
    newUser.save((error: Error, pokemon: MongooseDocument) => {
      if (error) {
        res.send(error);
      }
      res.json(pokemon);
    });
  }
}
