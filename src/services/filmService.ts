import axios from "axios";
import * as filmsRepository from "../repositories/filmsRepository.js"

export type Film ={
    title: string,
    description: string,
    image: string,
    director: string,
    producer: string,
}

export async function postFilms() {
    const films = await axios.get("https://ghibliapi.herokuapp.com/films");
    let film = {
        title: "",
        description: "",
        image: "",
        director: "",
        producer: "",
    };
    for(let i = 0; i < films.data.length; i++){
        const title = await filmsRepository.getFilmsById(films.data[i].title)
        if(title){
            continue
        }
         film = {
            title: films.data[i].title,
            description: films.data[i].description,
            image: films.data[i].image,
            director: films.data[i].director,
            producer: films.data[i].producer,
        }
        await filmsRepository.insert(film);
    }
}

export async function getFilms(page: number) {
    return await filmsRepository.getPage(page);
}