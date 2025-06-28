<script lang="ts">
	interface Props {
		open?: boolean;
		closingDelay?: number;
		children: import('svelte').Snippet;
	}

	let { open = $bindable(false), closingDelay = 400, children }: Props = $props();
	let Modal: HTMLDialogElement | null = $state(null);

	$effect(() => {
		if (Modal) {
			if (open) {
				Modal.showModal();
				return;
			}

			setTimeout(() => {
				if (Modal) {
					Modal.close();
					return;
				}
			}, closingDelay);
		}
	});

	function handleKeydown(ev: KeyboardEvent) {
		if (ev.key === 'Escape') {
			ev.preventDefault();
			open = false;
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<dialog class="modal" bind:this={Modal}>
	{@render children()}
</dialog>

<style>
	.modal {
		width: 0;
		height: 0;
		padding: 0;
		border: 0;
		margin: 0;
		outline: none;
		overflow: visible;

		&::backdrop {
			background: transparent;
			opacity: 0;
		}
	}
</style>
