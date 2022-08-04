import { Request, Response } from "express";
import { number } from "joi";
import * as filmsService from "../services/filmService.js"

export async function postFilms(req: Request, res: Response) {
    await filmsService.postFilms()
    res.sendStatus(201);
}

export async function getFilms(req: Request, res: Response) {
    const page = Number(req.params.page)
    const films = await filmsService.getFilms(page);
    res.send(films).status(200);
}