import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { sequelize } from "../models";
import { request, response } from "express";
import "../config/db.connection";

import routes from "../routes";
import redis from "redis";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

try {
  app.use("/api", routes);
} catch (err) {
  console.log(err);
}

sequelize.sync().then(() => console.log("db connected"));
export const redis_client = redis.createClient(6379);
app.listen(8000, () => {
  console.log("Server Started at Port, 8000");
});
