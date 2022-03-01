import { model, Schema } from "mongoose";
import { IPhone } from "../types/phone.type";

const phoneSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    img:{
      data:Buffer,
      contentType: String
    },
    color: {
      type: String,
      required: true,
    },
    manuFacturer: {
      type: String,
      required: true,
    },
    processor: {
      type: String,
      required: true,
    },
    ram: {
      type: String,
      required: true,
    },
    screen: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

export default model<IPhone>("Phone", phoneSchema);