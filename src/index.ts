// import { helloRouter } from "./app/controller";
// app.use(helloRouter);

import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("API called");
  res.json({ message: "Alhamdulillah" });
});

app.get("/health", (req, res) => {
  console.log("Health called");
  res.status(200).send("OK");
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
