import { Router } from "express";
import {
  getPhones,
  addPhone,
  updatePhone,
  deletePhone,
  getPhoneDetail,
} from "../controllers/phones";
import { setImageOnStorage } from "../utils/utils";

const phonesRoutes: Router = Router();

phonesRoutes.get("/phones", getPhones);
phonesRoutes.post("/phone", setImageOnStorage(), addPhone);
phonesRoutes.put("/phone/:id", setImageOnStorage(), updatePhone);
phonesRoutes.delete("/phone/:id", deletePhone);
phonesRoutes.get("/phone/:id", getPhoneDetail);

export default phonesRoutes;
