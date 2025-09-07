<script>
	import BlogPostCard from '$lib/components/BlogPostCard.svelte';

	/**
	 * @type import('./$types').PageProps
	 */
	let { data } = $props();
</script>

<svelte:head>
	<title>Blog - Martin Matovu</title>
</svelte:head>

<main>
	<section id="hero" class="hero-section">
		<div class="container">
			<hgroup>
				<h1>Blog</h1>
				<p>I write stuff.</p>
			</hgroup>
		</div>
	</section>

	<section id="blog-posts" class="blog-posts-section">
		<div class="container">
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
		padding-inline: 1.25rem /* 20px */;
	}

	section {
		padding-block: 2.5rem /* 40px */;
	}

	.hero-section hgroup {
		text-align: center;

		& > h1 {
			color: var(--color-primary);
		}
		& > p:not(.h5) {
			margin-block-start: 2em;
		}
	}

	ul.blog-post-list {
		list-style: none;
		display: grid;
	}

	.blog-posts-section {
		padding: 0;
	}
</style>
