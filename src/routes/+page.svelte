<script>
	import Link from '$components/link/Link.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import { copyText } from '$lib/utils';
	import { quadOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	/** @type { boolean } */
	let isHandleCopied = $state(false);

	$effect(() => {
		if (isHandleCopied) {
			setTimeout(() => {
				isHandleCopied = false;
			}, 2000);
		}
	});

	const WorkLinks = [
		{
			label: 'Protracted',
			description: "The world's first ever link lengthener",
			url: 'https://protracted.website'
		},
		{
			label: 'QuAr',
			description: 'A QR code generator I made to share text from my computer to my phone',
			url: 'https://qr.matovius.dev'
		},
		{
			label: 'My Lab',
			description: 'The place where I experiment with UI and other technical tests in Svelte',
			url: 'https://lab.matovius.dev'
		},
		{
			label: 'Ototune (WIP)',
			description: 'A web-based synth sound generator',
			url: 'https://ototune.matovius.dev'
		},
		{
			label: 'Umbo (WIP)',
			description: 'A simple yet robust email verification service',
			url: 'https://umbo.email'
		}
		// {
		// 	label: 'My design gallery',
		// 	description: "The place where I collect all the various designs I've ever made",
		// 	url: 'https://design.matovius.dev'
		// }
	];
</script>

<svelte:head>
	<title>Martin Matovu</title>
	<meta name="title" content="Martin Matovu" />
	<meta name="description" content="Web developer && co-founder of Webware Studio." />
	<link rel="canonical" href="https://matovius.dev/" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Martin Matovu" />
	<meta property="description" content="Web developer && co-founder of Webware Studio." />
	<meta property="og:description" content="Web developer && co-founder of Webware Studio." />
	<meta property="og:image" content={favicon} />
	<meta property="og:url" content="https://matovius.dev/" />
</svelte:head>

<main>
	{@render HeroSection()}
	{@render WorkSection()}
</main>

{#snippet HeroSection()}
	<section id="hero" class="hero-section">
		<div class="container">
			<hgroup>
				<!-- <div class="p">Hi! my name is</div> -->
				<h1>Martin Matovu</h1>
				<!-- <p>
					Web developer && co-founder of
					<Link as="outbound" url="https://webware.studio">Webware Studio</Link>
				</p> -->
				<p>Web developer and sometimes designer.</p>
				<p>
					I love making cool websites and tiny web tools and experiments that especially cater for
					my own personal issues or just for fun.
				</p>
				<p>
					I also exist on
					<Link as="outbound" url="https://github.com/matovius">GitHub</Link> (<em>for now</em>) and
					<Link as="outbound" url="https://mastodon.social/@matovius">Mastodon</Link>. My handle is
					<span class="copy-button">
						<button
							class="btn inline"
							aria-label="matovius"
							onclick={() => {
								copyText('matovius').then(() => {
									isHandleCopied = true;
								});
							}}
						></button>
						{#if isHandleCopied}
							<small transition:fly={{ duration: 150, y: -4, easing: quadOut }}>Copied</small>
						{/if}
					</span> on both.
				</p>
			</hgroup>
			<!-- <p>
				So far, I have a few tools I've built, but I haven't yet integrated them into this website.
				But when that's done you'll be able to find them
				<Link as="inbound" url="/tools">here</Link>.
			</p> -->
			<!-- <p>
				I'm intentionally keeping this website as simple as possible because I'm focusing more on
				other stuff.
			</p> -->
			<!-- <p>
				Oh, I also do
				<Link as="inbound" url="/writing">write here</Link>
				sometimes. Mostly about the things I make and other personal thoughts and feelings. The articles
				are mostly short and to the point, although I can sometimes go overboard if I'm super passionate
				and inspired.
			</p> -->
		</div>
	</section>
{/snippet}

{#snippet WorkSection()}
	<section id="work" class="work">
		<div class="container">
			<h2>Previous work</h2>
			<ul class="work-list">
				{#each WorkLinks as link, index (WorkLinks[index])}
					<li>
						<article>
							<h3 class="h5">
								<Link as="outbound" url={link.url}>{link.label}</Link>
							</h3>
							<p>{link.description}</p>
						</article>
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

	.copy-button {
		display: inline-flex;
		transform: translateY(4px);
		position: relative;

		& > button.btn:hover::after {
			background-color: var(--color-primary-500);
		}

		& > small {
			line-height: 1.1;
			text-align: center;
			color: color-mix(in oklab, var(--color-text), transparent 40%);
			position: absolute;
			inset-block-start: calc(100% + 0.25rem) /* 4px */;
			inset-inline: 0;
			user-select: none;
			pointer-events: none;
		}
	}

	section.work {
		padding-block-start: 2.5rem;
	}
	ul.work-list {
		list-style: none;
		display: grid;
		gap: 1.25rem;
		padding-block-start: 1.5rem;

		article {
			display: grid;
			gap: 0.5rem;
			padding: 1.25rem;
			border-radius: 1.25rem;

			&:hover {
				background-color: color-mix(in oklab, var(--color-white), transparent 95%);
			}

			p {
				margin: 0;
			}
		}
	}
</style>
