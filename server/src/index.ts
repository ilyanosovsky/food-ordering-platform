import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "hello!" });
});

app.listen(5001, () => {
  console.log("server started on localhost: 5001");
});
