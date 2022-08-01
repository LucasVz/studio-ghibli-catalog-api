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
    let teste = {
        title: "",
        description: "",
        image: "",
        director: "",
        producer: "",
    };
    for(let i = 0; i < films.data.length; i++){
         teste = {
            title: films.data[i].title,
            description: films.data[i].description,
            image: films.data[i].image,
            director: films.data[i].director,
            producer: films.data[i].producer,
        }
        await filmsRepository.insert(teste);
    }
}
