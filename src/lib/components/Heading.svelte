<script lang="ts">
	import { Link2Icon } from 'lucide-svelte';

	interface Props {
		// TODO: Potential refactor to turn this `level` prop's evals into
		// plain numbers instead of strings.
		level: '2' | '3' | '4' | '5' | '6';
		id: string | undefined;
		label: string;
	}
	let { level, id, label }: Props = $props();

	let labelBasedId = $derived(label.toLowerCase().replaceAll(' ', '-'));
</script>

<div class="heading-wrapper">
	{#if level === '2'}
		<h2 id={id || labelBasedId} class="heading">
			<span>{label}</span>
			<a href="#{id || labelBasedId}" class="link inline">
				<Link2Icon aria-hidden size={20} />
			</a>
		</h2>
	{:else if level === '3'}
		<h3 id={id || labelBasedId} class="heading">
			<span>{label}</span>
			<a href="#{id || labelBasedId}" class="link inline">
				<Link2Icon aria-hidden size={20} />
			</a>
		</h3>
	{:else if level === '4'}
		<h4 id={id || labelBasedId} class="heading">
			<span>{label}</span>
			<a href="#{id || labelBasedId}" class="link inline">
				<Link2Icon aria-hidden size={20} />
			</a>
		</h4>
	{:else if level === '5'}
		<h5 id={id || labelBasedId} class="heading">
			<span>{label}</span>
			<a href="#{id || labelBasedId}" class="link inline">
				<Link2Icon aria-hidden size={20} />
			</a>
		</h5>
	{:else if level === '6'}
		<h6 id={id || labelBasedId} class="heading">
			<span>{label}</span>
			<a href="#{id || labelBasedId}" class="link inline">
				<Link2Icon aria-hidden size={20} />
			</a>
		</h6>
	{/if}
</div>

<style>
	.heading-wrapper {
		/* display: inline-block; */
		isolation: isolate;
		position: relative;

		& a.link.inline {
			/* display: inline;
			position: absolute;
			inset-block-start: 40%;
			inset-inline-start: 0; */
			z-index: -1;
			opacity: 0;
			pointer-events: none;

			&:is(:hover, :focus) {
				opacity: 1;
				z-index: 2;
				pointer-events: all;
			}
		}

		& .heading {
			display: inline-block;
		}

		&:hover {
			a.link.inline {
				opacity: 1;
				z-index: 2;
				pointer-events: all;
			}
		}
	}
</style>
