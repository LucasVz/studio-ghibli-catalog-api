import cors from "cors";
import express, { json } from "express";

import filmsRouter from "./routes/filmsRouter.js";

export const app = express();
app.use(json());
app.use(
  cors({
    credentials: true,
    origin: ["https://studio-ghibli-catalog.vercel.app", "http://localhost:3000"],
  })
);
app.use(filmsRouter);

