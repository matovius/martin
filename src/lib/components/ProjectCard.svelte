<script>
	import Link from '$lib/components/Link.svelte';

	/**
	 * @typedef Project
	 * @prop {string} name
	 * @prop {string} description
	 * @prop {number} year
	 * @prop {string} url
	 * @prop {string | null} soundbite
	 * @prop {boolean} isOngoing
	 * @prop {boolean} isFeatured
	 */

	/**
	 * @typedef Props
	 * @prop {Project} project
	 */

	/**
	 * @type {Props}
	 */
	let { project } = $props();
</script>

<article class="card">
	<h3>{project.name}</h3>

	{#if project.soundbite}
		<p>{project.soundbite}</p>
	{:else}
		<p>{project.description}</p>
	{/if}

	<div class="ctas">
		<Link as="outbound" url={project.url} id="project-demo-link">Live demo</Link>
	</div>
</article>

<style>
	.card {
		isolation: isolate;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 0.625rem /* 10px */;
		outline: 2px solid transparent;
		outline-offset: 2px;
		margin-block: 5em;
		text-align: center;

		& > .ctas {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			gap: 0.625rem /* 10px */;
			flex-wrap: wrap;
		}
	}
</style>
