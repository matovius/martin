<script lang="ts">
	import type { Project } from "$lib/scripts/types";

	interface Props {
    project: Project;
	}

	let { project }: Props = $props();
</script>

<a href={project.url} target="_blank" rel="noopener noreferrer" class="card"
  aria-label="{project.name}; made in {project.year}">
  <div class="headline">
    {#if project.icon}
      <div class="project-icon">
        <img src={project.icon} alt="" />
      </div>
    {/if}
    <h2 class="h3">{project.name}</h2>
  </div>
	<small aria-hidden="true">
    {project.year}
    {#if project.isOngoing}
      <span>(Ongoing)</span>
    {/if}
  </small>
  <p>{project.description}</p>
</a>

<style>
	a.card {
		appearance: none;
		color: var(--clr-text);
		text-decoration: none;
		isolation: isolate;
		width: 100%;
		display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.25rem; /* 20px */
		border-radius: 1.25rem; /* 20px */
		outline: 2px solid transparent;
		outline-offset: 2px;
		position: relative;
		overflow: hidden;
		user-select: none;

		&::before {
			content: '';
      width: 100%;
      height: 100%;
			border-radius: inherit;
			background: var(--clr-primary);
			position: absolute;
      transform: translateY(100%);
      z-index: -1;

		}
    & > * {
      width: 100%;
    }
		& > small {
			opacity: 0.6;
		}

		&:is(:global(:hover, :focus)) {
      color: var(--clr-base);

			&::before {
        transform: translateY(0);
				transition-delay: 200ms;
			}
		}

		&:focus-visible {
			outline-color: var(--clr-primary);
		}
	}

  .headline {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 1.25rem; /* 20px */
  }
  .project-icon {
    width: 3.125rem; /* 50px */
    height: 3.125rem; /* 50px */
    aspect-ratio: 1;
    border-radius: .75rem; /* 12px */
    background: color-mix(in oklab, var(--clr-text) 50%, transparent);

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>
