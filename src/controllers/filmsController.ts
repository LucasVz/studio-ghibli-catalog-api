import { Request, Response } from "express";
import * as filmsService from "../services/filmService.js"

export async function postFilms(req: Request, res: Response) {
    await filmsService.postFilms()
    res.sendStatus(201);
}