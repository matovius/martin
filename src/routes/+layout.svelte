<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/inter';
	import '@fontsource-variable/rubik';
	import { page } from '$app/stores';

	import Home from '$lib/components/icons/Home.svelte';
	import MicroBuilds from '$lib/components/icons/MicroBuilds.svelte';
	import Projects from '$lib/components/icons/Projects.svelte';
	import MyLogo from '$lib/components/icons/MyLogo.svelte';
</script>

<div id="root" class="app">
	<header class="header">
		<div>
			<div
				class="logo-wrapper"
				data-route={$page.url.pathname === '/'
					? '/'
					: $page.url.pathname.includes('/micro-works')
					? '/micro-works'
					: $page.url.pathname.includes('/projects')
					? '/projects'
					: null}
			>
				<MyLogo />
			</div>
			<div
				class="nav-wrapper"
				data-route={$page.url.pathname === '/'
					? '/'
					: $page.url.pathname.includes('/micro-works')
					? '/micro-works'
					: $page.url.pathname.includes('/projects')
					? '/projects'
					: null}
			>
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
		color: hsl(0, 0%, 0%, 0.5);
		width: 2.25rem /* 36px */;
		min-width: 2.25rem;
		height: 2.25rem;
		min-height: 2.25rem;
		background: hsl(0, 0%, 100%);
		border-radius: 9999rem;

		&[data-route='/'] {
			color: hsl(216, 90%, 46%);
		}

		&[data-route='/micro-works'] {
			color: hsl(315, 90%, 46%);
		}

		&[data-route='/projects'] {
			color: hsl(133, 90%, 33%);
		}
	}

	.nav-wrapper {
		max-width: 100%;
		overflow: hidden;
		padding: 0.25rem /* 4px */;
		border-radius: 1.25rem /* 20px */;
		border: 1px solid hsla(0, 0%, 0%, 0.1);
		background: hsla(0, 0%, 100%, 0.6);
		backdrop-filter: blur(8px);

		&[data-route='/'] {
			border-color: hsl(216, 90%, 46%, 0.2);
			background: hsl(216, 90%, 46%, 0.05);
		}

		&[data-route='/micro-works'] {
			border-color: hsl(315, 90%, 46%, 0.2);
			background: hsl(315, 90%, 46%, 0.05);
		}

		&[data-route='/projects'] {
			border-color: hsl(133, 90%, 33%, 0.2);
			background: hsl(133, 90%, 33%, 0.05);
		}
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
			color: hsl(133, 90%, 46%);
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
			border-top: 1px solid hsla(0, 0%, 0%, 0.1);
		}
	}
</style>
