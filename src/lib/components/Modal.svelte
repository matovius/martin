<script lang="ts">
	interface Props {
		isOpen?: boolean;
		closingDelay?: number;
		children: any;
	}

	let { isOpen = $bindable(false), closingDelay = 400, children }: Props = $props();
	let Modal: HTMLDialogElement = $state();

	$effect(() => {
		if (Modal) {
			if (isOpen) {
				Modal.showModal();
				document.body.style.overflow = 'hidden';
			} else {
				setTimeout(() => {
					Modal.close();
					document.body.style.removeProperty('overflow');
				}, closingDelay);
			}
		}
	});

	function handleKeydown(ev: KeyboardEvent) {
		if (ev.key === 'Escape') {
			ev.preventDefault();
			isOpen = false;
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
