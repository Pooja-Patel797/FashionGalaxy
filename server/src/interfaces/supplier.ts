import { Document } from "mongoose";

export interface ISupplier extends Document {
  supplierId: string;

  supplierName: string;
  state: string;
  city: string;
  residence: string;
  mobileNumber: string;
  email: string;
  dateOfSupply: Date;
  dateOfModification: Date;
}
