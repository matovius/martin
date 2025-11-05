<script>
	import Logo from '$components/icons/Logo.svelte';
	import { page } from '$app/state';

	/**
	 * @typedef Link
	 * @prop {string} name
	 * @prop {string} url
	 */

	/**
	 * @type {Link[]}
	 */
	const SiteLinks = [
		{
			name: 'Tools',
			url: '/tools'
		},
		{
			name: 'Writing',
			url: '/writing'
		}
	];
</script>

<header>
	<div class="container">
		<div class="side start">
			<a
				href="/"
				class="home-link {page.url.pathname === '/' ? 'at-home' : ''}"
				aria-label="Go to homepage"
			>
				<Logo size={30} bg="currentColor" />
			</a>
			<!-- NAV LINKS -->
			{@render NavLinks()}
		</div>
		<!-- <div class="side end"></div> -->
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
		padding-inline: 1.875rem /* 30px */;

		& > div.container {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(18.75rem, 1fr)) /* 300px */;
			gap: 1.25rem /* 20px */;
			padding-block: 5.625rem 1.875rem /* 90px 30px */;
			margin-inline: auto;
		}
	}

	.side {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.625rem /* 10px */;

		&.start {
			/* background: red; */
			justify-content: flex-start;
			flex-wrap: wrap;
		}
		/* &.end {
			background: blue;
			justify-content: flex-end;
			flex-wrap: wrap;
		} */
	}

	a.home-link {
		--_size: 0.625rem /* 10px */;
		color: var(--color-text);
		text-decoration: none;
		aspect-ratio: 1;
		padding: 0.3125rem /* 5px */;
		outline: 2px solid transparent;
		outline-offset: 5px;
		position: relative;

		&.at-home {
			color: var(--color-primary);
		}

		&:is(:hover, :focus) {
			&::before {
				transform: translate(calc(var(--_size) * -1 / 2), calc(var(--_size) * -1 / 2));
				text-shadow: calc(40px + var(--_size)) 0 0 currentColor;
			}

			&::after {
				transform: translate(calc(var(--_size) * -1 / 2), calc(var(--_size) / 2));
				text-shadow: calc(40px + var(--_size)) 0 0 currentColor;
			}
		}

		&:active {
			&::before {
				transform: translate(calc(var(--_size) / 2), calc(var(--_size) / 2));
				text-shadow: calc(40px - var(--_size)) 0 0 currentColor;
			}

			&::after {
				transform: translate(calc(var(--_size) / 2), calc(var(--_size) * -1 / 2));
				text-shadow: calc(40px - var(--_size)) 0 0 currentColor;
			}
		}

		&::before,
		&::after {
			content: '+';
			width: var(--_size);
			height: var(--_size);
			aspect-ratio: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			inset-inline-start: calc(var(--_size) * -1 / 2);
			text-shadow: 40px 0 0 currentColor;
		}

		&::before {
			inset-block-start: calc(var(--_size) * -1 / 2);
		}

		&::after {
			inset-block-end: calc(var(--_size) * -1 / 2);
		}

		&:focus-visible {
			outline-color: var(--color-primary);

			&::before,
			&::after {
				opacity: 0;
			}
		}
	}

	ul.nav-list {
		list-style: none;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 0.625rem /* 10px */;
		padding-inline-start: 1.25rem /* 20px */;

		& .nav-link {
			font-family: var(--font-jetbrains);
			color: color-mix(in oklab, var(--color-text), transparent 50%);
			text-decoration: none;
			padding-inline: 1em;
			padding-block: 0.5em;
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
				color: var(--color-base);
				background: var(--color-primary);
			}
		}
	}
</style>
