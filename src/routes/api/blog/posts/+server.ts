import { json } from '@sveltejs/kit';

async function getPosts(): Promise<BlogPost[]> {
	let posts: BlogPost[] = [];

	const paths = import.meta.glob('/src/posts/*.svx', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.svx', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<BlogPost, 'slug'>;
			const post = { ...metadata, slug } satisfies BlogPost;

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
