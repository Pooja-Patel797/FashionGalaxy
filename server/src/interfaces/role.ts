import { Document } from "mongoose";

export interface IRole extends Document {
  roleId: string;
  roleName: string;
  dateOfCreation: Date;
  dateOfModification: Date;
}
