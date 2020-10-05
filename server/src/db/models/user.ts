import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "../../interfaces";

const UserSchema: Schema = new Schema({
  name: { type: Schema.Types.String, required: true },
  email: { type: Schema.Types.String, required: true },
  password: { type: Schema.Types.String, required: true },
  isStatus: { type: Schema.Types.String, required: true },
  roleId: { type: Schema.Types.String, required: true },
  dateOfCreation: {
    type: Schema.Types.Date,

    default: Date.now,
  },
  dateOfModification: {
    type: Schema.Types.Date,

    default: Date.now,
  },
});
export const User = mongoose.model<IUser>("User", UserSchema);
