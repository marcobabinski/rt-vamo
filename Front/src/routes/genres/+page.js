import { error } from '@sveltejs/kit';
import axios from "axios"

/** @type {import('./$types.js').PageServerLoad} */
export async function load({ params }) {
	const genres = await axios.get("http://localhost:8000/genre");
	
	if (genres) return genres;

	throw error(404, 'Not found');
}