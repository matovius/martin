import '$lib/types';

/** @type { () => import('./$types').EntryGenerator } */
export function entries() {
	/** @type { import('$app/types').RouteParams<any> } */
	const routes = [{ slug: 'first-post' }];
	return routes;
}

/** @type { (event: import('@sveltejs/kit').ServerLoadEvent) => Promise<{ content: any, meta: BlogPost, slug: string | undefined }> } */
export async function load(event) {
	const post = await import(`$posts/${event.params.slug}.svx`);

	return {
		content: post.default,
		/** @type { BlogPost } */
		meta: post.metadata,
		slug: event.params.slug
	};
}

export const prerender = true;
