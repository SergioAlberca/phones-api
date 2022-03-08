import { Document } from "mongoose";

export interface IPhone extends Document {
  color: string;
  description: string;
  img?: string | null;
  manuFacturer: string;
  name: string;
  price: number;
  processor: string;
  ram: string;
  screen: string;
}

export interface IAllPhones {
  id: string;
  img?: string | null;
  manuFacturer: string;
  name: string;
}
