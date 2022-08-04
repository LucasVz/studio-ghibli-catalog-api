import cors from "cors";
import express, { json } from "express";

import filmsRouter from "./routes/filmsRouter.js";

const app = express();
app.use(json());
app.use(cors());
app.use(filmsRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Running on " + PORT);
});
