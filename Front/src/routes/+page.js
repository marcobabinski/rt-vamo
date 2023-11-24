import { error } from '@sveltejs/kit';
import axios from "axios"

/** @type {import('./$types.js').PageServerLoad} */
export async function load({ params }) {
	const featured = await axios.get("http://localhost:8000/featured");
    const genres = await axios.get("http://localhost:8000/genre");

    let genreFilms = {};

    for (let i = 0; i < genres.data.length; i++) {
        genreFilms[genres.data[i].name] = await axios.get(`http://localhost:8000/genre/${genres.data[i].name}`);
        // console.log(genres[i].name)
    }
	
	return { featured, genres, genreFilms };

	throw error(404, 'Not found');
}