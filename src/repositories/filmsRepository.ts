import { prisma } from "../../database.js";
import { Film } from "../services/filmService.js"

export async function insert(film: Film) {
    console.log(film)
    await prisma.films.create({
        data:film,
    });
}
