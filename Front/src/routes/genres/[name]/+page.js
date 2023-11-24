import { error } from '@sveltejs/kit';
import axios from "axios"

/** @type {import('./$types.js').PageServerLoad} */
export async function load({ params }) {
	const film = await axios.get(`http://localhost:8000/films/${params.name}`);
	
	if (film) return film;

	throw error(404, 'Not found');
}