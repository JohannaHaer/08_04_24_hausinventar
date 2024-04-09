import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import interiorRouter from "./controller/interiors.js";
import cors from "cors";
const PORT = 3000;
const app = express();
app.use(cors());
await mongoose.connect(process.env.MONGODB_URI);

app.use("/", interiorRouter);

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});