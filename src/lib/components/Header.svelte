<script lang="ts">
	import Logo from './Logo.svelte';
</script>

<header class="header">
	<div class="container">
		<div class="icon">
			<Logo />
		</div>
	</div>
</header>

<style>
	.header {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		& > .container {
			width: 100%;
			max-width: 40rem; /* 640px */
			padding: 24px;
			display: flex;
			flex-direction: row;
			justify-content: start;
			align-items: center;

			& > .icon {
				width: 48px; /* 48px */
				height: 48px; /* 48px */
				aspect-ratio: 1;
				color: hsl(216, 90%, 46%);

				@media (min-width: 480px) {
					width: 6rem; /* 96px */
					height: 6rem; /* 96px */
				}
			}
		}
	}
</style>
