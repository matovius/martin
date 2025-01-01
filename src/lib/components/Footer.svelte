<script lang="ts">
	import { onMount } from 'svelte';

	let Footer: HTMLElement;

	let date: Date;
	let currentDate: number = $state(2025);

	onMount(() => {
		date = new Date();
		currentDate = date.getFullYear();

		setTimeout(() => {
			Footer.style.opacity = '1';
		}, 500);
	});
</script>

<footer class="footer" bind:this={Footer}>
	<div class="container">
		<small class="small">{currentDate} - Martin Matovu</small>
	</div>
</footer>

<style>
	.footer {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		opacity: 0;

		& > .container {
			width: 100%;
			max-width: 40rem; /* 640px */
			padding: 24px;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;

			& > .small {
				color: var(--clr-text);
			}
		}
	}
</style>
