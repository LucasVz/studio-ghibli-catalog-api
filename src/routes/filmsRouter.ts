import { Router } from "express";
import * as filmsController from "../controllers/filmsController.js";

const filmsRouter = Router();

filmsRouter.post("/", filmsController.postFilms);
filmsRouter.get("/:page", filmsController.getFilms);

export default filmsRouter;

