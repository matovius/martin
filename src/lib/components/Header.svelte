<script lang="ts">
	import Menu from './Menu.svelte';
	import CoolFaceLogo from './CoolFaceLogo.svelte';
</script>

<header>
	<div class="container">
		<div class="side start">
			<a href="/" class="home-link" data-sveltekit-noscroll="false" aria-label="Go to homepage">
				<div aria-hidden="true">
					<CoolFaceLogo />
				</div>
			</a>
		</div>

		<div class="side end">
			<Menu />
		</div>
	</div>
</header>

<style>
	header {
		height: var(--header-height);
		padding-inline: 1.25rem /* 20px */;
		background: var(--color-base);
		position: fixed;
		top: 0;
		inset-inline: 0;
		z-index: 5;

		& > div.container {
			max-width: 62.5rem /* 1000px */;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			padding-block: 1.25rem /* 20px */;
			margin-inline: auto;
		}
	}

	.side {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.625rem /* 10px */;

		&.start {
			justify-content: flex-start;
		}
		&.end {
			justify-content: flex-end;
		}
	}

	a.home-link {
		border-radius: 20px;
		outline: 2px solid transparent;
		outline-offset: 8px;

		& > div {
			width: 1.5625rem /* 25px */;
			height: 1.5625rem /* 25px */;
			aspect-ratio: 1;
		}

		&:is(:hover, :focus) {
			transform: scale(1.25);
		}

		&:focus-visible {
			outline-color: var(--color-primary);
		}
	}
</style>
