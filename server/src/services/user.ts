import { User } from "../db/models/user";
import { IUser } from "../interfaces";
import { injectable } from "inversify";
import { Error, default as mongoose } from "mongoose";

@injectable()
export class UsersService {
  public async getUsers(): Promise<IUser[]> {
    console.log("ingetUsers");
    return User.find()
      .then((data: IUser[]) => {
        return data;
      })
      .catch((error: Error) => {
        throw error;
      });
  }

  public async getUser(id: string): Promise<IUser[]> {
    return User.find({ _id: id })
      .then((data: IUser[]) => {
        return data;
      })
      .catch((error: Error) => {
        throw error;
      });
  }
  public async getUserByEmailAndPassword(
    email: string,
    password: string
  ): Promise<IUser[]> {
    return User.find({ email: email, password: password })
      .then((data: IUser[]) => {
        return data;
      })
      .catch((error: Error) => {
        throw error;
      });
  }

  public async createUser(user: any): Promise<IUser> {
    return User.create(user)
      .then((data: IUser) => {
        return data;
      })
      .catch((error: Error) => {
        throw error;
      });
  }

  public async updateUser(id: string, user: any): Promise<IUser> {
    return User.findOneAndUpdate({ _id: id }, user, { new: true })
      .then((data: any) => {
        return data;
      })
      .catch((error: Error) => {
        throw error;
      });
  }

  public async deleteUser(id: string): Promise<boolean> {
    return User.findOneAndDelete({ _id: id })
      .then(() => {
        return true;
      })
      .catch((error: Error) => {
        throw error;
      });
  }
}
