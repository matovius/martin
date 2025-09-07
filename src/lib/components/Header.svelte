<script>
	import Menu from './Menu.svelte';
	import CoolFaceLogo from './CoolFaceLogo.svelte';
	import { page } from '$app/state';

	/**
	 * @typedef Link
	 * @prop {string} name
	 * @prop {string} url
	 */

	// SITE LINKS
	/**
	 * @type {Link[]}
	 */
	const SiteLinks = [
		{
			name: 'Projects',
			url: '/projects'
		},
		{
			name: 'Blog',
			url: '/blog'
		}
	];
</script>

<header>
	<div class="container">
		<div class="side top">
			<a
				href="/"
				class="home-link {page.url.pathname === '/' ? 'at-home' : ''}"
				aria-label="Go to homepage"
			>
				<CoolFaceLogo />
			</a>
		</div>

		<div class="side bottom">
			<!-- <Menu /> -->
			{@render NavLinks()}
		</div>
	</div>
</header>

{#snippet NavLinks()}
	<nav>
		<ul class="nav-list">
			{#each SiteLinks as link}
				<li>
					<a
						href={link.url}
						class="nav-link {page.url.pathname.includes(link.url) ? 'current' : ''}">{link.name}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
{/snippet}

<style>
	header {
		padding-inline: 1.25rem /* 20px */;
		/*height: var(--header-height);*/
		/*background: var(--color-base);*/
		/*position: fixed;
		top: 0;
		inset-inline: 0;
		z-index: 5;*/

		& > div.container {
			max-width: 62.5rem /* 1000px */;
			display: grid;
			/* grid-template-areas: "left-nav center right-nav"; */
			grid-template-areas:
				'top-side'
				'bottom-side';
			gap: 1.25rem /* 20px */;
			padding-block: 1.25rem /* 20px */;
			margin-inline: auto;
		}
	}

	.side {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 0.625rem /* 10px */;

		&.top {
			grid-area: top-side;
		}
		&.bottom {
			grid-area: bottom-side;
			flex-wrap: wrap;
		}
	}

	a.home-link {
		color: var(--color-text);
		width: 1.5625rem /* 25px */;
		height: 1.5625rem /* 25px */;
		aspect-ratio: 1;
		border-radius: 0.625rem /* 10px */;
		outline: 2px solid transparent;
		outline-offset: 4px;

		&.at-home {
			color: var(--color-primary);
		}

		&:is(:hover, :focus) {
			transform: scale(1.2);
		}

		&:focus-visible {
			outline-color: var(--color-primary);
		}
	}

	ul.nav-list {
		list-style: none;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 0.625rem /* 10px */;

		& .nav-link {
			font-family: var(--font-jetbrains);
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
</style>
