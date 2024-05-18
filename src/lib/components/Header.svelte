<script lang="ts">
	import { page } from '$app/stores';
	import CoolFaceLogo from './CoolFaceLogo.svelte';
	import Modal from '$lib/components/Modal.svelte';

	let isMenuOpen: boolean = false;

	let MenuDialogBackdrop: HTMLElement;
	let MenuDialogMenu: HTMLElement;

	function animateMenu() {
		MenuDialogBackdrop.style.transform = 'translateY(0)';
		setTimeout(() => {
			MenuDialogMenu.style.opacity = '1';
		}, 200);
	}

	function deAnimateMenu() {
		MenuDialogMenu.style.opacity = '0';
		setTimeout(() => {
			MenuDialogBackdrop.style.transform = 'translateY(-100%)';
		}, 200);
	}

	type Link = {
		name: string;
		url: string;
	};

	const SiteLinks: Link[] = [
		{
			name: 'Projects',
			url: '/projects'
		},
		{
			name: 'Writing',
			url: '/writing'
		},
		{
			name: 'Extras',
			url: '/extras'
		},
		{
			name: 'Contact',
			url: '/contact'
		}
	];
</script>

<header class="header">
	<div class="container">
		<div class="corner corner-left">
			<div class="logo-wrapper">
				<CoolFaceLogo />
			</div>
		</div>
		<div class="corner corner-right">
			<button
				class="button menu-toggle"
				on:click={() => {
					isMenuOpen = true;
					setTimeout(() => {
						animateMenu();
					}, 10);
				}}
			>
				<div class="front">
					<span>Menu</span>
				</div>
			</button>
		</div>
	</div>
</header>

<Modal bind:isOpen={isMenuOpen}>
	<div class="menu-wrapper">
		<div class="backdrop animated" bind:this={MenuDialogBackdrop} />

		<div class="menu" bind:this={MenuDialogMenu}>
			<header class="menu-header">
				<div class="container">
					<div class="corner corner-left">
						<div class="logo-wrapper">
							<CoolFaceLogo />
						</div>
					</div>

					<div class="close-menu-wrapper">
						<button
							class="button menu-toggle"
							on:click={() => {
								isMenuOpen = false;
								setTimeout(() => {
									deAnimateMenu();
								}, 10);
							}}
						>
							<div class="front">
								<span>Close</span>
							</div>
						</button>
					</div>
				</div>
			</header>

			<main class="menu-main">
				<nav class="container">
					<ul class="nav-list">
						<li class="nav-item">
							<a href="/" class={`h1 nav-link ${$page.url.pathname === '/' ? 'current' : ''}`}
								>Home</a
							>
						</li>
						{#each SiteLinks as link}
							<li class="nav-item">
								<a
									href={link.url}
									class={`h1 nav-link ${$page.url.pathname.includes(link.url) ? 'current' : ''}`}
									>{link.name}</a
								>
							</li>
						{/each}
					</ul>
				</nav>
			</main>
		</div>
	</div>
</Modal>

<style>
	.header {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-inline: 20px;
		background: hsl(var(--clr-base));
		position: sticky;
		top: 0;
		z-index: 500;

		& > .container {
			max-width: 1200px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			padding-block: 20px;

			& > .corner-right {
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				gap: 10px;
			}
		}
	}

	.menu-wrapper {
		width: 100%;
		height: 100%;
		position: relative;
		top: 0;
		left: 0;

		& > .backdrop {
			width: 100%;
			height: 100%;
			background: hsl(var(--clr-base));
			z-index: -1;
			position: absolute;
			inset: 0;
		}

		& > .menu {
			width: 100%;
			height: 100%;
			overflow-y: auto;
		}
	}

	.menu-header {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-inline: 20px;
		position: sticky;
		top: 0;

		& > .container {
			max-width: 1200px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			padding-block: 20px;
		}
	}

	.menu-main {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		padding-inline: 20px;
		padding-block: 40px 20px;

		& > .container {
			display: flex;
			flex-direction: column;
		}
	}

	.nav-list {
		list-style: none;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
		gap: 1em;

		& .nav-link {
			font-family: var(--font-passion-one);
			color: hsl(var(--clr-text), 0.5);
			text-decoration: none;
			padding-inline: 20px;
			border-radius: 9999rem;
			outline: 2px solid transparent;
			outline-offset: 4px;
			position: relative;

			&:is(:hover, :focus) {
				color: hsl(var(--clr-text));
			}

			&:focus-visible {
				outline-color: hsl(var(--clr-primary));
			}

			&.current {
				color: hsl(var(--clr-primary));
			}
		}
	}

	.logo-wrapper {
		width: 30px;
		height: 30px;
		aspect-ratio: 1;
	}
</style>
