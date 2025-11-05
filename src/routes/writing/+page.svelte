<script>
	import ComingSoon from '$components/placeholders/ComingSoon.svelte';
	import PostCard from '$components/writing/PostCard.svelte';
	import favicon from '$lib/assets/favicon.svg';

	/**
	 * @type import('./$types').PageProps
	 */
	let { data } = $props();
</script>

<svelte:head>
	<title>Writing - Martin Matovu</title>
	<meta name="title" content="Writing - Martin Matovu" />
	<meta
		name="description"
		content="When I write, I put it here. It's not the best, but it's here."
	/>
	<link rel="canonical" href="https://matovius.dev/writing" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Writing - Martin Matovu" />
	<meta
		property="description"
		content="When I write, I put it here. It's not the best, but it's here."
	/>
	<meta
		property="og:description"
		content="When I write, I put it here. It's not the best, but it's here."
	/>
	<meta property="og:image" content={favicon} />
	<meta property="og:url" content="https://matovius.dev/writing" />
</svelte:head>

<main>
	{@render HeroSection()}
	<!-- <ComingSoon /> -->
	{@render MyPosts()}
</main>

{#snippet HeroSection()}
	<section id="hero" class="hero-section">
		<div class="container">
			<hgroup>
				<h1>Writing</h1>
				<p>When I write, I put it here. It's not the best, but it's here.</p>
			</hgroup>
		</div>
	</section>
{/snippet}

{#snippet MyPosts()}
	<section id="posts" class="posts-section">
		<div class="container">
			<ul class="post-list">
				{#each data.posts as post}
					<li>
						<PostCard {post} />
					</li>
				{/each}
			</ul>
		</div>
	</section>
{/snippet}

<style>
	main {
		padding-inline: 1.875rem /* 30px */;
	}

	section.hero-section {
		& hgroup > h1 {
			color: var(--color-primary);
		}

		& hgroup > p {
			color: color-mix(in oklab, var(--color-text), transparent 50%);
		}

		& p {
			margin-block: 1.5em;
		}

		& h1 {
			margin-block: 0.25em;
		}
	}

	.post-list {
		list-style: none;
	}
</style>
