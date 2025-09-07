<script lang="ts">
	import { formatDate } from '$lib/scripts/utils';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>{data.meta.title} - Martin Matovu</title>
</svelte:head>

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

		& :global(code) {
			font-size: var(--text-sm);
			font-weight: 500;
			line-height: 1;
			color: var(--color-primary);
			display: inline-block;
			padding-block: 0.3125rem /* 5px */;
			padding-inline: 0.3125rem /* 5px */;
			border-radius: 0.3125rem /* 5px */;
			border: 1px solid color-mix(in oklab, var(--color-primary), transparent 80%);
			background: color-mix(in oklab, var(--color-secondary), transparent 80%);
		}

		& :global(pre:has(code)) {
			display: block;
			border-radius: 20px /* 20px */;
			/* border: 1px solid color-mix(in oklab, var(--color-primary), transparent 80%); */
			background: color-mix(in oklab, var(--color-secondary), transparent 80%);
			overflow-x: clip;

			& > :global(code) {
				font-size: var(--text-sm);
				font-weight: 500;
				line-height: 1.5;
				color: unset;
				min-width: 100%;
				max-width: 100%;
				padding: 20px;
				border-radius: 0;
				border: none;
				background: transparent;
				overflow-x: auto;
			}
		}

		& :global(hr) {
			height: 0px;
			border-block: 1px solid color-mix(in oklab, var(--color-text), transparent 80%);
			border-inline: 1px solid color-mix(in oklab, var(--color-text), transparent 80%);
			background-color: transparent;
		}
	}
</style>
