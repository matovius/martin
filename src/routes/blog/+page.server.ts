import type { ServerLoadEvent } from '@sveltejs/kit';

export async function load({ fetch }: ServerLoadEvent) {
	const response = await fetch('/api/blog/posts');
	const posts: BlogPost[] = await response.json();
	return { posts };
}
