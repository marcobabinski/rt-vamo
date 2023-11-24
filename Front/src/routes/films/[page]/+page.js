import { error } from '@sveltejs/kit';
import axios from "axios"

/** @type {import('../$types.js').PageServerLoad} */
export async function load({ params }) {
	const films = await axios.get(`http://localhost:8000/films/${params.page-1 ?? 1}`);
	
	if (films) return films;

	throw error(404, 'Not found');
}