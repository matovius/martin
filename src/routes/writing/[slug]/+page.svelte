<script>
	import dayjs from 'dayjs';
	import favicon from '$lib/assets/favicon.svg';

	/** @type { import('./$types').PageProps }*/
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title} - Martin Matovu</title>
	<meta name="description" content={data.meta.description} />
	<title>{data.meta.title} - Martin Matovu</title>
	<meta name="title" content="{data.meta.title} - Martin Matovu" />
	<meta name="description" content={data.meta.description} />
	<link rel="canonical" href="https://matovius.dev/writing/{data.slug}" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="{data.meta.title} - Martin Matovu" />
	<meta property="description" content={data.meta.description} />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:image" content={favicon} />
	<meta property="og:url" content="https://matovius.dev/writing/{data.slug}" />
</svelte:head>

<main>
	<div class="container">
		<article class="blog-post">
			<hgroup>
				<h1>
					{data.meta.title}
				</h1>
				<small>
					<span>
						Published on {dayjs(data.meta.date).format('dddd, DD MMMM, YYYY')}
					</span>
					{#if data.meta.updated}
						<span
							>&centerdot; Updated on {dayjs(data.meta.updated).format('dddd, DD MMMM, YYYY')}</span
						>
					{/if}
				</small>
			</hgroup>

			<!-- <div class="tags">
				{#each data.meta.categories as category}
					<span>#{category}</span>
				{/each}
			</div> -->

			{@render PostContent()}
		</article>
	</div>
</main>

{#snippet PostContent()}
	{@const Content = data.content}
	<Content />
{/snippet}

<style>
	main {
		padding-inline: 1.25rem /* 20px */;
	}

	article.blog-post {
		& > hgroup {
			& > small {
				color: color-mix(in oklab, var(--color-text), transparent 40%);
			}
		}
	}
</style>
