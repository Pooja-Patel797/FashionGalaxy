import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "../config/db.connection";

import routes from "../routes";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", routes);

app.listen(5001, () => {
  console.log("Server Started at Port, 5001");
});
