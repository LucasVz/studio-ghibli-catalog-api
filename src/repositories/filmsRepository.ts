import { prisma } from "../../database.js";
import { Film } from "../services/filmService.js"

export async function insert(film: Film) {
    await prisma.films.create({
        data:film,
    });
}

export async function getPage(page: number) {
    const films = page * 10
    return await prisma.films.findMany({
        take: 10,
        skip: films,
    });
}

export async function getFilmsById(title: string) {
    return await prisma.films.findUnique({
        where: {
            title: title,
        },
    });
}