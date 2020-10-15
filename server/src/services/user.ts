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

  public async getUser(id: string): Promise<IUser | null> {
    return User.findOne({ _id: id })
      .then((data) => {
        return data;
      })
      .catch((error: Error) => {
        throw error;
      });
  }
  public async getUserByEmail(email: string): Promise<IUser | null> {
    console.log("Hiii");
    return User.findOne({ email: email })
      .then((data) => {
        return data;
      })
      .catch((error: Error) => {
        throw error;
      });
  }
  public async getUserByEmailAndPassword(
    email: string,
    password: string
  ): Promise<IUser | null> {
    return User.findOne({ email: email, password: password })
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error: Error) => {
        throw error;
      });
  }

  public async createUserIfNotExists(user: any): Promise<IUser | null> {
    let data = await this.getUserByEmail(user.email);
    if (data === null) {
      return User.create(user)
        .then((data: IUser) => {
          return data;
        })
        .catch((error: Error) => {
          throw error;
        });
    } else return null;
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
