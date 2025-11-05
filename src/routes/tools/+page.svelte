<script>
	import ComingSoon from '$components/placeholders/ComingSoon.svelte';
	import favicon from '$lib/assets/favicon.svg';
</script>

<svelte:head>
	<title>Tools - Martin Matovu</title>
	<meta name="title" content="Tools - Martin Matovu" />
	<meta
		name="description"
		content="Super simple && personal tools, built specifically for me and those as weird as I am."
	/>
	<link rel="canonical" href="https://matovius.dev/tools" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Tools - Martin Matovu" />
	<meta
		property="description"
		content="Super simple && personal tools, built specifically for me and those as weird as I am."
	/>
	<meta
		property="og:description"
		content="Super simple && personal tools, built specifically for me and those as weird as I am."
	/>
	<meta property="og:image" content={favicon} />
	<meta property="og:url" content="https://matovius.dev/tools" />
</svelte:head>

<main>
	{@render HeroSection()}
	<ComingSoon />
</main>

{#snippet HeroSection()}
	<section id="hero" class="hero-section">
		<div class="container">
			<hgroup>
				<h1>Tools</h1>
				<p>Super simple && personal tools, built specifically for me and those as weird as I am.</p>
			</hgroup>
		</div>
	</section>
{/snippet}

<style>
	main {
		padding-inline: 1.875rem /* 30px */;
	}

	section {
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
</style>
