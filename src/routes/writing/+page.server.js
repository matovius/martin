import '$lib/types';

/**
 * @type { (event: import('@sveltejs/kit').ServerLoadEvent) => Promise<{ posts: BlogPost[] }> }
 * */
export async function load(event) {
	const response = await event.fetch('/api/writing/posts');
	/** @type { BlogPost[] } */
	const posts = await response.json();
	return { posts };
}
