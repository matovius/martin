<script lang="ts">
	import { onMount } from 'svelte';
	import { quadInOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
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
	<title>My Projects - Martin Matovu</title>
</svelte:head>

{#if showPage}
	<main
		class="main"
		in:fly={{ duration: 200, easing: quadInOut, x: 0, y: 50, opacity: 0 }}
		out:fade={{ duration: 200, easing: quadInOut }}
	>
		<section id="all-projects" class="all-projects">
			<div class="container">
				<div class="headline">
					<h1 class="heading">My Projects</h1>
					<p>
						I specialize in making the simplest, most <em>littlest</em> tools imaginable,
						and also do freelance work through Webware Studio.
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
{/if}

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
					color: var(--clr-primary);
				}
			}
		}
	}

	ul.projects-list {
		list-style: none;
		display: grid;
		gap: .75rem; /* 12px */
		margin-top: 3.75rem; /* 60px */
	}
</style>
