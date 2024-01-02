import express from "express";
import { helloRouter } from "./app/controller";

const app = express();

app.use(helloRouter);

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
