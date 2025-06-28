<script lang="ts">
	import { page } from '$app/state';
	import Modal from '$lib/components/Modal.svelte';
	import { fade } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';

	let isMenuOpen: boolean = $state(false);

	type Link = {
		name: string;
		url: string;
	};
	// SITE LINKS
	const SiteLinks: Link[] = [
		{
			name: 'Projects',
			url: '/projects'
		},
		{
			name: 'Blog (coming soon)',
			url: '/blog'
		}
	];
	// SOCIAL LINKS
	const SocialLinks: Link[] = [
		{
			name: 'GitHub',
			url: 'https://github.com/matovius'
		},
		{
			name: 'Codepen',
			url: 'https://codepen.io/matovius'
		},
		{
			name: 'Mastodon',
			url: 'https://mastodon.social/@matovius'
		},
		{
			name: 'LinkedIn',
			url: 'https://linkedin.com/in/martin-matovu'
		}
	];

	function closeMenu() {
		isMenuOpen = false;
	}
</script>

<button
	class="btn menu-toggle"
	aria-label="Menu"
	onclick={() => {
		isMenuOpen = true;
	}}
></button>

<Modal bind:open={isMenuOpen}>
	{#if isMenuOpen}
		<div class="menu-modal">
			<div
				class="backdrop"
				in:fade={{ duration: 200, easing: quadOut }}
				out:fade={{ delay: 200, duration: 200, easing: quadOut }}
			></div>
			<div class="surface">
				<!-- Close CTA -->
				<div
					class="close-cta"
					in:fade={{ duration: 200, easing: quadOut }}
					out:fade={{ delay: 200, duration: 200, easing: quadOut }}
				>
					<button
						class="btn close-menu"
						aria-label="Close"
						onclick={() => {
							isMenuOpen = false;
						}}
					></button>
				</div>

				<!-- Nav Menu -->
				<nav
					in:fade={{ delay: 200, duration: 400, easing: quadOut }}
					out:fade={{ duration: 200, easing: quadOut }}
				>
					<ul class="nav-list">
						<li>
							<a
								href="/"
								class="h1 nav-link {page.url.pathname === '/' ? 'current' : ''}"
								data-sveltekit-noscroll="false"
								onclick={closeMenu}>Home</a
							>
						</li>

						{#each SiteLinks as link}
							<li>
								<a
									href={link.url}
									class="h1 nav-link {page.url.pathname.includes(link.url) ? 'current' : ''}"
									data-sveltekit-noscroll="false"
									onclick={closeMenu}>{link.name}</a
								>
							</li>
						{/each}
					</ul>
				</nav>

				<!-- Socials -->
				<div
					class="socials"
					in:fade={{ delay: 200, duration: 400, easing: quadOut }}
					out:fade={{ duration: 200, easing: quadOut }}
				>
					<h5 class="heading">Socials</h5>

					<div class="list">
						{#each SocialLinks as link}
							<a
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								class="btn {link.name.toLowerCase()}"
								aria-label={link.name}
							></a>
						{/each}
					</div>
				</div>
			</div>
		</div>
	{/if}
</Modal>

<style>
	div.menu-modal {
		isolation: isolate;
		padding-inline: 20px;
		position: fixed;
		inset: 0;

		& > div.backdrop {
			background: var(--color-base);
			position: absolute;
			inset: 0;
			z-index: -1;
		}

		& > .surface {
			width: 100%;
			max-width: 62.5rem /* 1000px */;
			height: 100%;
			overflow-y: auto;
			margin-inline: auto;
			position: relative;
		}
	}

	.close-cta {
		position: absolute;
		inset-inline-end: 0;
		inset-block-start: 1.25rem /* 20px */;
	}

	.nav-list {
		list-style: none;
		width: 100%;
		max-width: 43.75rem /* 700px */;
		display: flex;
		flex-direction: column;
		gap: 1em;
		padding-block-start: 5rem /* 80px */;
		margin-inline: auto;

		& .nav-link {
			font-family: var(--font-passion-one);
			color: color-mix(in oklab, var(--color-text), transparent 50%);
			text-decoration: none;
			padding-inline: 1.25rem /* 20px */;
			border-radius: 9999rem;
			outline: 2px solid transparent;
			outline-offset: 4px;
			position: relative;

			&:is(:hover, :focus) {
				color: var(--color-text);
			}

			&:focus-visible {
				outline-color: var(--color-primary);
			}

			&.current {
				color: var(--color-primary);
			}
		}
	}

	.socials {
		width: 100%;
		max-width: 43.75rem /* 700px */;
		display: flex;
		flex-direction: column;
		padding-block-start: 5rem /* 80px */;
		padding-inline-start: 1.25rem /* 20px */;
		margin-inline: auto;

		& > .heading {
			color: color-mix(in oklab, var(--color-text), transparent 50%);
			font-size: 1.25rem /* 20px */;
			font-weight: 600;
			line-height: 1.5;
		}

		& > .list {
			width: 100%;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			gap: 0.625rem /* 10px */;
			padding-block: 1.25rem /* 20px */;
		}
	}
</style>
