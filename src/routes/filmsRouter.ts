import { Router } from "express";
import * as filmsController from "../controllers/filmsController.js";

const filmsRouter = Router();

filmsRouter.post("/", filmsController.postFilms);

export default filmsRouter;

