import { Document } from "mongoose";

export interface ICategory extends Document {
  categoryId: String;
  categoryName: String;
  dateOfCreation: Date;
  dateOfModification: Date;
}
