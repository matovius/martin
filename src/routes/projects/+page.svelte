<script lang="ts">
	import { onMount } from 'svelte';
	import { projects } from '$lib/scripts/projects';
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	let showPage: boolean = $state(false);

	onMount(() => {
		setTimeout(() => {
			showPage = true;
		}, 200);
	});
</script>

<svelte:head>
	<title>Projects - Martin Matovu</title>
</svelte:head>

<main class="main">
	<section id="all-projects" class="all-projects">
		<div class="container">
			<div class="headline">
				<h1 class="heading">Projects</h1>
				<p>
					I specialize in making the simplest, most <em>littlest</em> tools imaginable, and also do freelance
					work through Webware Studio.
				</p>
			</div>

			<ul class="projects-list">
				{#each projects as project}
					<li>
						<ProjectCard {project} />
					</li>
				{/each}
			</ul>
		</div>
	</section>
</main>

<style>
	.main {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-inline: 20px;
		padding-block: 120px 40px;
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

	ul.projects-list {
		list-style: none;
		display: grid;
		padding-block-start: 3.75rem; /* 60px */
	}
</style>
