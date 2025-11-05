<script>
	import Icon from '$components/icons/Icon.svelte';
	/**
	 * @typedef Props
	 * @prop { import('svelte').Snippet } children
	 * @prop { 'inbound' | 'outbound' } as Whether the link routes internally or externally
	 * @prop { string } url Where the link routes to
	 * @prop { string } [id] An id that could be used to reference the link on the page if needed
	 */

	/** @type { Props } */
	let { children, as, url, id } = $props();
</script>

{#if as === 'inbound'}
	<a href={url} {id} class="link">{@render children()}</a>
{:else if as === 'outbound'}
	<a href={url} target="_blank" rel="noopener noreferrer" {id} class="link">
		{@render children()}
		<span class="external-icon">
			<Icon name="arrow-up-right" size="1em" />
		</span>
	</a>
{/if}

<style>
	a {
		font-size: inherit;
		gap: 2px;

		& .external-icon {
			color: var(--color-primary);
			display: inline-flex;
			justify-content: center;
			align-items: center;
		}

		&:hover {
			& .external-icon {
				fill: color-mix(in oklab, var(--color-primary), transparent 50%);
				/* animation: bounceTopRight 0.4s ease-in-out; */
				transform: translate(3px, -3px) scale(0.8);
			}
		}
	}
</style>
