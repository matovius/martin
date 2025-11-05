<script>
	import Link from '$components/link/Link.svelte';
	import '$lib/types';
	import dayjs from 'dayjs';

	/**
	 * @typedef Props
	 * @prop { BlogPost } post
	 */

	/** @type { Props } */
	let { post } = $props();
</script>

{#key post.slug}
	<article class="card">
		<h2 class="title" data-toc-ignore>{post.title}</h2>
		<p class="description">{post.description}</p>
		<small class="date">{dayjs(post.date).format('DD MMMM YYYY')}</small>
		<div class="cta">
			<a href="/writing/{post.slug}" class="link">Read it</a>
			<!-- <Link as="inbound" url="/writing/{post.slug}" id="blog-post-link">Read it</Link> -->
		</div>
	</article>
{/key}

<style>
	.card {
		isolation: isolate;
		width: 100%;
		display: grid;
		gap: 0.625rem /* 10px */;
		padding: 1em;
		border: 2px solid transparent;

		& > .title {
			margin-block: 0;
		}
		& > .description {
			margin-block: 0;
		}

		& > .date {
			color: color-mix(in oklab, var(--color-text), transparent 40%);
		}

		& > .cta {
			& > .link {
				outline: none;
			}
		}

		&:focus-within {
			border-color: var(--color-primary);

			& > .title {
				color: var(--color-primary);
			}

			@media (hover: hover) {
				border-color: transparent;
			}
		}
	}
</style>
