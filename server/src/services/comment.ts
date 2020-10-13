import { Comment } from "../db/models/comment";
import { IComment } from "../interfaces";
import { injectable } from "inversify";
import { Error, default as mongoose } from "mongoose";

@injectable()
export class CommentsService {
  public async getComments(): Promise<IComment[]> {
    console.log("ingetComments");
    return Comment.find()
      .then((data: IComment[]) => {
        return data;
      })
      .catch((error: Error) => {
        throw error;
      });
  }

  public async getCommentsById(id: string): Promise<IComment[]> {
    return Comment.find({ productId: id })
      .then((data: IComment[]) => {
        return data;
      })
      .catch((error: Error) => {
        throw error;
      });
  }

  public async createComment(comment: any): Promise<IComment> {
    return Comment.create(comment)
      .then((data: IComment) => {
        console.log(data._id);

        return data;
      })
      .catch((error: Error) => {
        throw error;
      });
  }

  public async updateComment(id: string, comment: any): Promise<IComment> {
    return Comment.findOneAndUpdate({ _id: id }, comment, { new: true })
      .then((data: any) => {
        return data;
      })
      .catch((error: Error) => {
        throw error;
      });
  }

  public async deleteComment(id: string): Promise<boolean> {
    return Comment.findOneAndDelete({ _id: id })
      .then(() => {
        return true;
      })
      .catch((error: Error) => {
        throw error;
      });
  }
}
