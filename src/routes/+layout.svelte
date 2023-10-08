<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/inter';
	import '@fontsource-variable/rubik';
	import { page } from '$app/stores';

	import Home from '$lib/components/icons/Home.svelte';
	import MicroBuilds from '$lib/components/icons/MicroBuilds.svelte';
	import Projects from '$lib/components/icons/Projects.svelte';

	const date: Date = new Date();
	let CurrentDate = date.getFullYear();
</script>

<div id="root" class="app">
	<header class="header" style="display: none;">
		<div>
			<div class="nav-wrapper">
				<nav class="navigation">
					<ul>
						<li class="nav-item">
							<a
								href="/"
								class="button font-inter"
								title="Home"
								data-current-route={$page.url.pathname === '/' ? 'current' : null}
							>
								<div class="nav-icon-wrapper">
									<Home />
								</div>
							</a>
						</li>
						<li class="nav-item">
							<a
								href="/micro-works"
								class="button font-inter"
								title="Micro Works"
								data-current-route={$page.url.pathname === '/micro-works' ? 'current' : null}
							>
								<div class="nav-icon-wrapper">
									<MicroBuilds />
								</div>
							</a>
						</li>
						<li class="nav-item">
							<a
								href="/projects"
								class="button font-inter"
								title="Projects"
								data-current-route={$page.url.pathname === '/projects' ? 'current' : null}
							>
								<div class="nav-icon-wrapper">
									<Projects />
								</div>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>

	<slot />

	<footer class="footer">
		<div>
			<small class="small copyright-statement">Made with Svelte and CSS Nesting.</small>

			<small class="small copyright-statement">
				&copy; Copyright {CurrentDate}
				<span>&CenterDot;</span>
				Martin Matovu
			</small>
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

	.nav-wrapper {
		max-width: 100%;
		overflow: hidden;
		padding: 0.25rem /* 4px */;
		border-radius: 1.25rem /* 20px */;
		border: 1px solid hsla(0, 0%, 0%, 0.1);
		background: hsla(0, 0%, 100%, 0.4);
		backdrop-filter: blur(8px);
	}

	.navigation {
		width: 100%;
		max-width: 100%;
		padding: 0.25rem /* 4px */;
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
			padding: 0.75rem /* 12px */;
			color: hsl(0, 0%, 0%, 0.8);
			&:hover {
				background: hsl(0, 0%, 0%, 0.1);
			}

			&:focus {
				outline-color: hsl(0, 0%, 0%, 0.1);
			}
		}

		&:is(:nth-child(1)) > .button[data-current-route='current'] {
			color: hsl(216, 90%, 46%);
		}

		&:is(:nth-child(2)) > .button[data-current-route='current'] {
			color: hsl(315, 90%, 46%);
		}

		&:is(:nth-child(3)) > .button[data-current-route='current'] {
			color: hsl(133, 90%, 33%);
		}
	}

	.nav-icon-wrapper {
		width: 1.5rem /* 24px */;
		height: 1.5rem /* 24px */;
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
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: start;
			border-top: 1px solid hsla(0, 0%, 0%, 0.1);

			@media (min-width: 480px) {
				flex-direction: row;
				justify-content: space-between;
			}
		}
	}
</style>
