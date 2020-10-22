import { Comment } from "../db/models/comment";
import { IComment } from "../interfaces";
import { injectable } from "inversify";
import { Error, default as mongoose } from "mongoose";

@injectable()
export class CommentsService {
  public getComments = async (): Promise<IComment[]> => {
    console.log("ingetComments");
    try {
      return await Comment.find().populate('user');
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  public getCommentsById = async (pid: string): Promise<IComment[]> => {
    try{
    return await Comment.find({ product: pid });
    }catch(err){
      throw err;
    }
  };

  public createComment = async (comment: any): Promise<IComment> => {
    try {
      return await Comment.create(comment);
    } catch (err) {
      throw err;
    }
  };

  public updateComment = async (
    id: string,
    comment: any
  ): Promise<IComment | null> => {
    try {
      return await Comment.findOneAndUpdate({ _id: id }, comment, {
        new: true,
      });
    } catch (err) {
      throw err;
    }
  };

  public deleteComment = async (id: string): Promise<IComment | null> => {
    try {
      return await Comment.findOneAndDelete({ _id: id });
    } catch (err) {
      throw err;
    }
  };
}
