import { Application } from "express";
import { UserController } from "./userController";

export class RootController {
  private user: UserController;

  constructor(private app: Application) {
    this.user = new UserController(this.app);
    this.routes();
  }

  public routes() {
    //this.app.use("/user", userController);
  }
}
