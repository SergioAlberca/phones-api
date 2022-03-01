import { Document } from "mongoose";

export interface IPhone extends Document {
  color: string;
  description: string;
  manuFacturer: string;
  name: string;
  price: number;
  processor: string;
  ram: string;
  screen: string;
}
