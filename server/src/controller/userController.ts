import { UserService } from "../services/user";
import { Application } from "express";

export class UserController {
  private user: UserService;

  constructor(private app: Application) {
    this.user = new UserService();
    this.routes();
  }

  public routes() {
    this.app.route("/welcomechild").get(()=>console.log("Welcome fromservice"));
    this.app.route("/add").get(this.user.addNewUser);
    this.app.route("/show").post(this.user.getAllUser);
  }
}
