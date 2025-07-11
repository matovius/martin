<script lang="ts">
	import BlogPostCard from '$lib/components/BlogPostCard.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Blog - Martin Matovu</title>
</svelte:head>

<main>
	<section id="blog" class="blog">
		<div class="container">
			<div class="headline">
				<h1 class="heading">Blog</h1>
				<p>I write stuff!</p>
			</div>
			<ul class="blog-post-list">
				{#each data.posts as post}
					<li>
						<BlogPostCard {post} />
					</li>
				{/each}
			</ul>
		</div>
	</section>
</main>

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

	section {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		& > .container {
			padding-block-end: 40px;

			& > .headline {
				display: flex;
				flex-direction: column;
				gap: 20px;

				& > .heading {
					color: var(--color-primary);
				}
			}
		}
	}

	ul.blog-post-list {
		list-style: none;
		display: grid;
		padding-block-start: 3.75rem; /* 60px */
	}
</style>
