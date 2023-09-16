<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/inter';
	import '@fontsource-variable/rubik';
</script>

<div id="root" class="app">
	<header class="header">
		<div>
			<div class="logo-wrapper" />
			<div class="nav-wrapper">
				<nav class="navigation">
					<ul>
						<li class="nav-item">
							<button class="button font-inter">Home</button>
						</li>
						<li class="nav-item">
							<button class="button font-inter">Micro Builds</button>
						</li>
						<li class="nav-item">
							<button class="button font-inter">Projects</button>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
	<slot />
	<footer class="footer">
		<div>
			<span class="p3 copyright-statement">Made by me with Svelte and CSS Nesting.</span>
		</div>
	</footer>
</div>

<style>
	.app {
		position: relative;
	}

	.header {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background: transparent;
		position: sticky;
		top: 0;
		z-index: 500;

		& > div {
			width: 100%;
			max-width: 1024px;
			padding: 0.5rem /* 8px */;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			gap: 0.5rem /* 8px */;
		}
	}

	.logo-wrapper {
		width: 2.25rem /* 36px */;
		min-width: 2.25rem;
		height: 2.25rem;
		min-height: 2.25rem;
		background: hsla(0, 0%, 0%, 0.4);
		border-radius: 9999rem;
	}

	.nav-wrapper {
		max-width: 100%;
		overflow: hidden;
		padding: 0.5rem /* 8px */;
		border-radius: 1.25rem /* 20px */;
		border: 1px solid hsla(0, 0%, 0%, 0.1);
		background: hsla(0, 0%, 100%, 0.6);
		backdrop-filter: blur(4px);
	}

	.navigation {
		width: 100%;
		max-width: 100%;
		overflow-x: auto;

		& > ul {
			display: flex;
			justify-content: start;
			align-items: center;
			list-style-type: none;
		}
	}

	.nav-item {
		& > .button {
			&:hover {
				background: hsla(0, 0%, 0%, 0.1);
			}
		}
	}

	.footer {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		& > div {
			width: 100%;
			max-width: 1024px;
			padding: 0.75rem /* 12px */;
			border-top: 1px solid hsla(0, 0%, 0%, 0.2);
		}
	}
</style>
