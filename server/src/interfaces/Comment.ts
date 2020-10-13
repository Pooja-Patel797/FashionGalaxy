import { Document } from "mongoose";

export interface IComment extends Document {
  userId: string;
  productId: string;
  comment: string;
  rating: number;
  dateOfCreation: Date;
  dateOfModification: Date;
}
