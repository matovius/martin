<script>
	import { projects } from '$lib/scripts/projects';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<svelte:head>
	<title>Projects - Martin Matovu</title>
</svelte:head>

<main class="main">
	<section id="hero" class="hero-section">
		<div class="container">
			<hgroup>
				<h1>Projects</h1>
				<p>
					I specialize in making the simplest, most <em>littlest</em> tools imaginable, and also do
					freelance work through
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

	<section id="all-projects" class="all-projects-section">
		<div class="container">
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

	ul.projects-list {
		list-style: none;
		display: grid;
	}

	.all-projects-section {
		padding: 0;
	}
</style>
