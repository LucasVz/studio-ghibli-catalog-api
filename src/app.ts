import cors from "cors";
import express, { json, NextFunction, Request, Response } from "express";
//import "express-async-errors";
// import testRouter from "./routes/testRouter.js";
import filmsRouter from "./routes/filmsRouter.js";

const app = express();
app.use(json());
app.use(cors());
app.use(filmsRouter);
// app.use(testRouter);
// app.use((error, req: Request, res: Response, next: NextFunction) => {
//   console.log(error);
//   if (error.response) {
//     return res.sendStatus(error.response.status);
//   }

//   res.sendStatus(500);
// });

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Running on " + PORT);
});
