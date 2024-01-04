import express from "express";
import dotenv from "dotenv";
import { calculator } from "./calculator";

dotenv.config();

export const helloRouter = express.Router();

helloRouter.get("/", (req, res) => {
  res.send(process.env.MESSAGE || "alhamdulillah");
});

helloRouter.get("/calculator", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.json({
    a,
    b,
    sum: calculator(a, b),
  });
});
