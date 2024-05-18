<script lang="ts">
	export let isOpen: boolean = false;

	let Modal: HTMLDialogElement;

	$: if (!isOpen && Modal) {
		setTimeout(() => {
			Modal.close();
			document.body.style.removeProperty('overflow');
		}, 500);
	}

	$: if (isOpen && Modal) {
		Modal.showModal();
		document.body.style.overflow = 'hidden';
	}
</script>

<dialog class="modal" bind:this={Modal}>
	<div class="container">
		<slot />
	</div>
</dialog>

<style>
	.modal {
		isolation: isolate;
		width: 0;
		height: 0;
		padding: 0;
		border: 0;
		margin: 0;
		overflow: visible;

		&::backdrop {
			background: transparent;
		}

		& > .container {
			width: 100dvw;
			max-width: none;
			height: 100dvh;
			background: transparent;
			position: fixed;
			inset: 0;
			overflow: hidden;
		}
	}
</style>
