import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import phonesRoutes from "./routes";

const app = express();

const PORT: string | number = process.env.PORT || 5666;

app.use(cors());
app.use(express.json());
app.use(phonesRoutes);
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

const uri: string = `mongodb+srv://S_Alberca:${process.env.MONGO_PASSWORD}@phonesdatabase.ndiwl.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch((error) => {
    throw error;
  });
