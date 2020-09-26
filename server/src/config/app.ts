import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { RootController } from "../controller/rootController";
import mongoose from "mongoose";
import { MONGODB_URL } from "../constant";

class App {
  public app: Application;
  public root: RootController;

  constructor() {
    this.app = express();
    this.setConfig();
    this.setMongoConfig();
    this.root = new RootController(this.app);
  }

  private setConfig() {
    this.app.use(bodyParser.json({ limit: "50mb" }));

    this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

    this.app.use(cors());
  }

  private setMongoConfig() {
    // mongoose.Promise = global.Promise;
    mongoose
      .connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log(" Hey!! database connected"));
  }
}

export default new App().app;
