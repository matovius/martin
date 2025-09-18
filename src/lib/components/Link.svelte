<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';

	interface Props {
		children: any;
		as: 'inbound' | 'outbound';
		url: string;
		id: string | undefined;
	}
	let { children, as, url, id }: Props = $props();
</script>

{#if as === 'inbound'}
	<a href={url} {id} class="link">{@render children()}</a>
{:else if as === 'outbound'}
	<a href={url} target="_blank" rel="noopener noreferrer" {id} class="link">
		{@render children()}
		<span class="external-icon">
			<Icon name="arrow-up-right" width="1em" height="1em" />
		</span>
	</a>
{/if}

<style>
	a {
		font-size: var(--text-base);
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
