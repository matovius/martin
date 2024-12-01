<script lang="ts">
	import { page } from '$app/stores';
	import CoolFaceLogo from './CoolFaceLogo.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import { blur, fade, scale } from 'svelte/transition';
	import { quadInOut, quadOut } from 'svelte/easing';

	let isMenuOpen: boolean = $state(false);

	let MenuDialogBackdrop: HTMLElement;
	let MenuDialogMenu: HTMLElement = $state();

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

	function closeMenu() {
		isMenuOpen = false;
	}
</script>

<button
	class="button menu-toggle"
	aria-label="Open menu"
	onclick={() => {
		isMenuOpen = true;
	}}
>
	<div class="front">
		<span>Menu</span>
	</div>
</button>

<Modal bind:isOpen={isMenuOpen}>
	{#if isMenuOpen}
		<div class="menu-modal">
			<div
				class="backdrop"
				in:fade={{ duration: 200, easing: quadOut }}
				out:fade={{ delay: 200, duration: 200, easing: quadOut }}
			></div>
			<div class="surface">
				<header
					in:fade={{ duration: 200, easing: quadOut }}
					out:fade={{ delay: 200, duration: 200, easing: quadOut }}
				>
					<button
						class="button close-menu"
						onclick={() => {
							isMenuOpen = false;
						}}
					>
						<div class="front">
							<span>Close</span>
						</div>
					</button>
				</header>

				<main
					in:blur={{ delay: 200, duration: 400, easing: quadOut, amount: 48, opacity: 0 }}
					out:blur={{ duration: 200, easing: quadOut, amount: 48, opacity: 0 }}
				>
					<nav>
						<ul class="nav-list">
							<li>
								<a
									href="/"
									class="h1 nav-link {$page.url.pathname === '/' ? 'current' : ''}"
									onclick={closeMenu}>Home</a
								>
							</li>

							{#each SiteLinks as link}
								<li>
									<a
										href={link.url}
										class="h1 nav-link {$page.url.pathname.includes(link.url) ? 'current' : ''}"
										onclick={closeMenu}>{link.name}</a
									>
								</li>
							{/each}
						</ul>
					</nav>
				</main>
			</div>
		</div>
	{/if}
	<div class="menu-wrapper" style="display: none;">
		{#if isMenuOpen}
			<div
				class="menu"
				bind:this={MenuDialogMenu}
				transition:scale={{ duration: 500, easing: quadInOut, start: 0.98, opacity: 0 }}
			>
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
								onclick={() => {
									isMenuOpen = false;
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
								<a
									href="/"
									class={`h1 nav-link ${$page.url.pathname === '/' ? 'current' : ''}`}
									onclick={() => {
										isMenuOpen = false;
									}}>Home</a
								>
							</li>
							{#each SiteLinks as link}
								<li class="nav-item">
									<a
										href={link.url}
										class={`h1 nav-link ${$page.url.pathname.includes(link.url) ? 'current' : ''}`}
										onclick={() => {
											isMenuOpen = false;
										}}>{link.name}</a
									>
								</li>
							{/each}
						</ul>
					</nav>
				</main>
			</div>
		{/if}
	</div>
</Modal>

<style>
	div.menu-modal {
		isolation: isolate;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-inline: 20px;
		position: fixed;
		inset: 0;

		& > div.backdrop {
			background: var(--clr-base);
			position: absolute;
			inset: 0;
		}

		& > .surface {
			width: 100%;
			max-width: 1280px;
			height: 100%;
			max-height: 100%;
			overflow-y: auto;
		}
	}

	header {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		padding-block: 20px;
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
			color: var(--clr-text), 0.5;
			text-decoration: none;
			padding-inline: 20px;
			border-radius: 9999rem;
			outline: 2px solid transparent;
			outline-offset: 4px;
			position: relative;

			&:is(:global(:hover, :focus)) {
				color: var(--clr-text);
			}

			&:focus-visible {
				outline-color: var(--clr-primary);
			}

			&.current {
				color: var(--clr-primary);
			}
		}
	}
</style>
