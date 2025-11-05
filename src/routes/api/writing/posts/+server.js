import { json } from '@sveltejs/kit';
import '$lib/types';

/** @type { () => Promise<BlogPost[]> } */
async function getPosts() {
	/** @type { BlogPost[] } */
	let posts = [];

	const paths = import.meta.glob('$posts/*.svx', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.svx', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = /** @type { Omit<BlogPost, 'slug'> } */ (file.metadata);
			const post = /** @type { BlogPost } */ { ...metadata, slug };

			if (post.published) {
				posts.push(post);
			}
		}
	}

	posts = posts.sort((first, second) => {
		return new Date(second.date).getTime() - new Date(first.date).getTime();
	});

	return posts;
}

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}

export const prerender = true;
