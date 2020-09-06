import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { sequelize } from "../models";

import "../config/db.connection";

import routes from "../routes";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", routes);

sequelize.sync().then(() => console.log("db connected"));

app.listen(8000, () => {
  console.log("Server Started at Port, 8000");
});
