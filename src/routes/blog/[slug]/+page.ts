import type { ServerLoadEvent } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';
import type { EntryGenerator } from './$types';

export const entries: EntryGenerator = () => {
	return [{ slug: 'first-post' }, { slug: 'sample' }];
};

export const load: PageServerLoad = async ({ params }: ServerLoadEvent) => {
	const post = await import(`../../../posts/${params.slug}.svx`);

	return {
		content: post.default,
		meta: post.metadata
	};
};

export const prerender = true;
