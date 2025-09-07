<script>
	import Link from '$lib/components/Link.svelte';

	/**
	 * @typedef Props
	 * @prop {BlogPost} post
	 */

	/**
	 * @type {Props}
	 */
	let { post } = $props();
</script>

{#key post.slug}
	<article class="card">
		<h2 class="title" data-toc-ignore>{post.title}</h2>
		<p class="description">{post.description}</p>
		<div class="ctas">
			<Link as="inbound" url="/blog/{post.slug}" id="blog-post-link">Read more</Link>
		</div>
	</article>
{/key}

<style>
	.card {
		isolation: isolate;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 0.625rem /* 10px */;
		outline: 2px solid transparent;
		outline-offset: 2px;
		margin-block: 5em;
		text-align: center;

		& .description {
			max-width: 600px;
			margin-inline: auto;
		}

		& > .ctas {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			gap: 0.625rem /* 10px */;
			flex-wrap: wrap;
		}
	}
</style>
