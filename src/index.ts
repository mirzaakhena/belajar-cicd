// import { helloRouter } from "./app/controller";
// app.use(helloRouter);

import express from "express";

const app = express();

app.get("/", (req, res) => {
  // res.send(process.env.MESSAGE || "alhamdulillah");

  console.log("API called");
  res.json({ message: "Alhamdulillah" });
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
