<script lang="ts">
	import FeaturedProjectCard from '$lib/components/FeaturedProjectCard.svelte';
	import { projects } from '$lib/scripts/projects';
</script>

<section id="projects" class="projects">
	<div class="container">
		<div class="headline">
			<h3 class="h3 heading">Featured projects</h3>
		</div>

		<div class="featured-projects">
			{#each projects as project}
				<FeaturedProjectCard heading={project.name} year={project.year} url={project.url} />
			{/each}
		</div>

		<div class="cta">
			<a href="/projects" class="button">
				<div class="front">
					<span>See more projects</span>
				</div>
			</a>
		</div>
	</div>
</section>

<style>
	section {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		& > .container {
			padding-block: 40px;

			& > .headline {
				display: flex;
				flex-direction: column;
				gap: 20px;

				& > .heading {
					color: var(--clr-primary);
				}
			}

			& > .featured-projects {
				width: 100%;
				display: flex;
				flex-direction: column;
				gap: 10px;
				padding-top: 20px;
			}

			& > .cta {
				padding-top: 20px;

				& > .button {
					width: fit-content;
					display: inline-block;

					& > .front {
						padding-inline: 48px;
					}
				}
			}
		}
	}
</style>
