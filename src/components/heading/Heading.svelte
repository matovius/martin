<script>
	import Icon from '$components/icons/Icon.svelte';

	/**
	 * @typedef Props
	 * @prop { '2' | '3' | '4' | '5' | '6' } level
	 * @prop { string } label
	 * @prop { string } [id]
	 */

	/** @type { Props } */
	let { level, id, label } = $props();

	/** @type { string } */
	let labelBasedId = $derived(label.toLowerCase().replaceAll(' ', '-'));
</script>

<div class="heading-wrapper">
	{#if level === '2'}
		<h2 id={id || labelBasedId} class="heading">
			<span>{label}</span>
			<a href="#{id || labelBasedId}" class="link inline">
				<Icon name="link-simple" size="1em" />
			</a>
		</h2>
	{:else if level === '3'}
		<h3 id={id || labelBasedId} class="heading">
			<span>{label}</span>
			<a href="#{id || labelBasedId}" class="link inline">
				<Icon name="link-simple" size="1em" />
			</a>
		</h3>
	{:else if level === '4'}
		<h4 id={id || labelBasedId} class="heading">
			<span>{label}</span>
			<a href="#{id || labelBasedId}" class="link inline">
				<Icon name="link-simple" size="1em" />
			</a>
		</h4>
	{:else if level === '5'}
		<h5 id={id || labelBasedId} class="heading">
			<span>{label}</span>
			<a href="#{id || labelBasedId}" class="link inline">
				<Icon name="link-simple" size="1em" />
			</a>
		</h5>
	{:else if level === '6'}
		<h6 id={id || labelBasedId} class="heading">
			<span>{label}</span>
			<a href="#{id || labelBasedId}" class="link inline">
				<Icon name="link-simple" size="1em" />
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
