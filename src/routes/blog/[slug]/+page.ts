import type { ServerLoadEvent } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({ params }: ServerLoadEvent) => {
	const post = await import(`../../../posts/${params.slug}.svx`);

	return {
		content: post.default,
		meta: post.metadata
	};
	// try {
	// } catch (error) {
	// 	throw error(404, `Could not find ${params.slug}.`);
	// }
};
