<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projects } from '$lib/scripts/projects';
</script>

<svelte:head>
	<title>Martin Matovu</title>
</svelte:head>

<main>
	{@render HeroSection()}
	{@render ProjectsSection()}
</main>

{#snippet HeroSection()}
	<section id="hero" class="hero">
		<div class="container">
			<div class="headline">
				<h1 class="heading">Hi, I'm Martin Matovu</h1>
				<h2 class="h4 subheading">Frontend engineer + Accessibility acolyte</h2>
				<p class="p text">
					I make browsers do my bidding for my enjoyment and can write some mean JavaScript. I'm
					part of the duo at <a
						href="https://webware.studio"
						target="_blank"
						rel="noopener noreferrer"
						class="link external">Webware Studio</a
					>, an upstart web dev studio building incredible projects using SvelteKit.
				</p>
			</div>
		</div>
	</section>
{/snippet}

{#snippet ProjectsSection()}
	<section id="projects" class="projects">
		<div class="container">
			<div class="headline">
				<h3 class="heading">Some recent projects...</h3>
			</div>

			<ul class="featured-projects">
				{#each projects as project}
					{#if project.isFeatured}
						<li>
							<ProjectCard {project} />
						</li>
					{/if}
				{/each}
			</ul>

			<div class="cta">
				<a href="/projects" class="btn more-projects" aria-label="See more projects"></a>
			</div>
		</div>
	</section>
{/snippet}

<style>
	main {
		--_pblock: 2.5rem /* 40px */;
		--_pblock-start: var(--_pblock);
		padding-inline: 1.25rem /* 20px */;
		padding-block: var(--_pblock);
		padding-block-start: calc(var(--header-height) + var(--_pblock-start)) /* 40px */;

		@media screen and (min-width: 37.5rem) /* 600px */ {
			--_pblock-start: 5rem /* 80px */;
		}
	}

	section {
		& > .container {
			padding-block-end: 2.5rem /* 40px */;
			margin-inline: auto;

			& > .headline {
				display: flex;
				flex-direction: column;
				gap: 1.25rem /* 20px */;

				& > .heading {
					color: var(--color-primary);
				}
			}

			& > .cta {
				display: flex;
				padding-block-start: 1.25rem /* 20px */;
			}
		}
	}

	ul.featured-projects {
		list-style: none;
		display: grid;
		padding-block-start: 1.25rem /* 20px */;
	}
</style>
