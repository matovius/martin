<script>
	import Link from '$lib/components/Link.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projects } from '$lib/scripts/projects';
</script>

<svelte:head>
	<title>Martin Matovu</title>
</svelte:head>

<main>
	{@render HeroSection()}
	{@render ProjectsSection()}
	<!-- {@render BlogSection()} -->
</main>

{#snippet HeroSection()}
	<section id="hero" class="hero-section">
		<div class="container">
			<hgroup>
				<h1>Martin Matovu</h1>
				<p class="h5">Frontend engineer</p>
				<p>
					Making browsers do my bidding for my enjoyment at
					<a
						href="https://webware.studio"
						target="_blank"
						rel="noopener noreferrer"
						class="link external">Webware Studio</a
					>.
				</p>
			</hgroup>
		</div>
	</section>
{/snippet}

{#snippet ProjectsSection()}
	<section id="projects" class="projects-section">
		<div class="container">
			<h2>Here's a thing I made for myself...</h2>

			<ProjectCard project={projects[3]} />

			<p>
				If you wanna see more stuff I made for myself,
				<Link as="inbound" id="projects-page-link" url="/projects">head to the projects page</Link>.
			</p>
		</div>
	</section>
{/snippet}

{#snippet BlogSection()}
	<section id="from-blog" class="blog-section">
		<div class="container">
			<h2>...and here's a thing I wrote!</h2>

			<ProjectCard project={projects[3]} />

			<p>
				If you wanna read more things I wrote,
				<Link as="inbound" id="blog-page-link" url="/blog">head to the blog</Link>.
			</p>
		</div>
	</section>
{/snippet}

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

	.projects-section,
	.blog-section {
		text-align: center;
	}
</style>
