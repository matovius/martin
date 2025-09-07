<script lang="ts">
	import { ArrowUpRightIcon } from 'lucide-svelte';

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
		<!-- <ArrowUpRightIcon size={16} class="external-icon" /> -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="external-icon"
			viewBox="0 0 256 256"
			aria-hidden="true"
		>
			<path
				d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"
			></path>
		</svg>
	</a>
{/if}

<style>
	a {
		font-size: var(--text-base);
		gap: 2px;

		& .external-icon {
			/* width: 0.9375rem /* 15px *;
			height: 0.9375rem /* 15px *; */
			width: 1em;
			height: 1em;
			aspect-ratio: 1;
			display: inline-block;
			fill: var(--color-primary);
		}

		&:hover {
			& .external-icon {
				fill: color-mix(in oklab, var(--color-primary), transparent 50%);
				/* animation: bounceTopRight 0.4s ease-in-out; */
				transform: translate(2px, -2px) scale(0.9);
			}
		}
	}

	@keyframes bounceTopRight {
		0%,
		100% {
			transform: translate(0, 0);
		}
		50% {
			transform: translate(2px, -2px);
		}
	}
</style>
