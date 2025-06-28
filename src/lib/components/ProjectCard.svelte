<script lang="ts">
	import type { Project } from '$lib/scripts/types';

	interface Props {
		project: Project;
	}

	let { project }: Props = $props();
</script>

<a
	href={project.url}
	target="_blank"
	rel="noopener noreferrer"
	class="card"
	aria-label="{project.name}; made in {project.year}"
>
	<div class="h4" aria-hidden="true">{project.name}</div>

	{#if project.soundbite}
		<p>{project.soundbite}</p>
	{:else}
		<p>{project.description}</p>
	{/if}

	<small aria-hidden="true">
		{project.year}
	</small>
</a>

<style>
	a.card {
		appearance: none;
		color: unset;
		text-decoration: none;
		isolation: isolate;
		width: 100%;
		padding: 1.25rem /* 20px */;
		display: flex;
		flex-direction: column;
		gap: 0.3125rem /* 5px */;
		border-radius: 1.5625rem /* 25px */;
		outline: 2px solid transparent;
		outline-offset: 2px;
		position: relative;
		user-select: none;

		&::before {
			content: '';
			border-radius: inherit;
			position: absolute;
			inset: 0.625rem; /* 10px */
			background: var(--color-primary);
			z-index: -1;
			opacity: 0;
		}
		& > .h4 {
			font-family: var(--font-passion-one);
		}
		& > small {
			opacity: 0.6;
		}

		&:is(:hover, :focus) {
			color: var(--color-base);

			&::before {
				inset: 0;
				opacity: 1;
			}
		}

		&:focus-visible {
			outline-color: var(--color-primary);
		}
	}
</style>
