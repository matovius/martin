<script lang="ts">
	export let isOpen: boolean = false;
	let Modal: HTMLDialogElement;

	$: {
		if (Modal) {
			if (isOpen) {
				Modal.showModal();
				document.body.style.overflow = 'hidden';
			} else {
				setTimeout(() => {
					Modal.close();
					document.body.style.removeProperty('overflow');
				}, 500);
			}
		}
	}

	function handleKeydown(ev: KeyboardEvent) {
		if (ev.key === 'Escape') {
			ev.preventDefault();
			isOpen = false;
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<dialog class="modal" bind:this={Modal}>
	<slot />
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
