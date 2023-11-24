import { error } from '@sveltejs/kit';
import axios from "axios"

/** @type {import('./$types.js').PageServerLoad} */
export async function load({ params }) {
	const featured = await axios.get("http://localhost:8000/featured");
	
	if (featured) return featured;

	throw error(404, 'Not found');
}