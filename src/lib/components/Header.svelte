<script lang="ts">
	import Logo from './Logo.svelte';
</script>

<header class="header">
	<div class="container">
		<a href="/" class="home-link">
			<div class="icon">
				<Logo />
			</div>
		</a>
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
		}
	}

	.home-link {
		width: fit-content;
		height: fit-content;
		border-radius: 0.5rem; /* 8px */
		outline: 0.125rem solid transparent; /* 2px */
		outline-offset: 0.25rem; /* 4px */

		&:hover {
			opacity: 0.6;
		}

		&:focus-visible {
			outline-color: currentColor;
		}

		&:visited {
			color: unset;
		}

		& > .icon {
			width: 48px; /* 48px */
			height: 48px; /* 48px */
			aspect-ratio: 1;
			color: var(--clr-primary-100);

			@media (min-width: 480px) {
				width: 6rem; /* 96px */
				height: 6rem; /* 96px */
			}
		}
	}
</style>
