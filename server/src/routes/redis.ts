import { redis_client } from "../config/server";
import { Request, Response } from "express";

export const checkCache = (req: Request, res: Response, next: any) => {
  console.log("inside cache");
  const id = req.params.id;

  redis_client.get(id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }

    if (data != null) {
      console.log("inside cache");
      res.send(data);
    } else {
      next();
    }
  });
};
