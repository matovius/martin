<script>
	/**
	 * @typedef Props
	 * @prop { import('svelte').Snippet } children
	 * @prop { boolean } [isOpen]
	 * @prop { number } [closingDelay]
	 */

	/** @type { Props } */
	let { isOpen = $bindable(false), closingDelay = 400, children } = $props();
	/** @type { HTMLDialogElement | null } */
	let Modal = $state(null);

	$effect(() => {
		if (Modal) {
			if (isOpen) {
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

	/** @type { (ev: KeyboardEvent) => void }*/
	function handleKeydown(ev) {
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
