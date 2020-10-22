import { User } from "../db/models/user";
import { IUser } from "../interfaces";
import { injectable } from "inversify";
import { Error, default as mongoose } from "mongoose";

@injectable()
export class UsersService {
  public getUsers = async (): Promise<IUser[]> => {
    console.log("ingetUsers");
    try {
      return await User.find();
    } catch (err) {
      throw err;
    }
  };

  public getUser = async (id: string): Promise<IUser | null> => {
    try {
      return await User.findOne({ _id: id });
    } catch (err) {
      throw err;
    }
  };
  public getUserByEmail = async (email: string): Promise<IUser | null> => {
    console.log("Hiii");
    try {
      return await User.findOne({ email: email });
    } catch (err) {
      throw err;
    }
  };
  public getUserByEmailAndPassword = async (
    email: string,
    password: string
  ): Promise<IUser | null> => {
    try {
      return await User.findOne({ email: email, password: password });
    } catch (err) {
      throw err;
    }
  };

  public createUserIfNotExists = async (user: any): Promise<IUser | null> => {
    try {
      let data = await this.getUserByEmail(user.email);
      if (data === null) {
        return await User.create(user);
      } else return null;
    } catch (err) {
      throw err;
    }
  };

  public updateUser = async (id: string, user: any): Promise<IUser | null> => {
    try {
      return await User.findOneAndUpdate({ _id: id }, user, { new: true });
    } catch (err) {
      return err;
    }
  };

  public async deleteUser(id: string): Promise<IUser | null> {
    try {
      return await User.findOneAndDelete({ _id: id });
    } catch (err) {
      return err;
    }
  }
}
