<script lang="ts">
	import { formatDate } from '$lib/scripts/utils';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<main>
	<article class="blog-post">
		<hgroup>
			<h1>
				{data.meta.title}
			</h1>
			<p class="small">Published on {formatDate(data.meta.date)}</p>
		</hgroup>

		<div class="tags">
			{#each data.meta.categories as category}
				<span>#{category}</span>
			{/each}
		</div>

		{@render PostContent()}
	</article>
</main>

{#snippet PostContent()}
	{@const Content = data.content}
	<Content />
{/snippet}

<style>
	main {
		--_pblock: 2.5rem /* 40px */;
		--_pblock-start: var(--_pblock);
		width: 100%;
		min-height: 90svh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-inline: 1.25rem /* 20px */;
		padding-block: var(--_pblock);
		padding-block-start: calc(var(--header-height) + var(--_pblock-start)) /* 40px */;
	}

	article {
		width: 100%;
		max-width: 50rem /* 800px */;

		& hgroup > h1 {
			color: var(--color-primary);
		}

		& hgroup > p {
			color: color-mix(in oklab, var(--color-text), transparent 50%);
		}

		& .tags {
			color: color-mix(in oklab, var(--color-primary), transparent 50%);
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			gap: 0.625rem /* 10px */;
		}

		& :global(p) {
			margin-block: 1.5em;
		}

		& :global(h1) {
			margin-block: 1.5em 0.5em;
		}
		& :global(h2) {
			margin-block: 1em 0.5em;
		}
		& :global(h3) {
			margin-block: 1em 0.5em;
		}
		& :global(h4) {
			margin-block: 1em 0.5em;
		}
		& :global(h5) {
			margin-block: 1em 0.5em;
		}
		& :global(h6) {
			margin-block: 1em 0.5em;
		}
	}
</style>
