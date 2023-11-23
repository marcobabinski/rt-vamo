import { error } from '@sveltejs/kit';
import axios from "axios"

// /** @type {import('./$types.js').PageServerLoad} */
export async function load({ params }) {
	const reviews = await axios.get("http://localhost:8000/reviews");
	
	if (reviews) return reviews;

	throw error(404, 'Not found');
}