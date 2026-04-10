<script>
	import Logo from '$components/icons/Logo.svelte';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';

	/**
	 * @typedef Link
	 * @prop { string } name
	 * @prop { string } url
	 * @prop { number } id
	 */

	// /** @type {Link[]} */
	// const SiteLinks = [
	// 	{
	// 		name: 'Tools',
	// 		url: '/tools',
	// 		id: 0
	// 	},
	// 	{
	// 		name: 'Writing',
	// 		url: '/writing',
	// 		id: 1
	// 	}
	// ];
</script>

<header>
	<div class="container">
		<div class="side start">
			<a
				href={resolve('/')}
				class="home-link {page.url.pathname === '/' ? 'at-home' : ''}"
				aria-label="Go to homepage"
			>
				<Logo size={40} bg="currentColor" />
			</a>
			<!-- NAV LINKS -->
			<!-- {@render NavLinks()} -->
		</div>
		<!-- <div class="side end"></div> -->
	</div>
</header>

<!-- {#snippet NavLinks()}
	<nav>
		<ul class="nav-list">
			{#each SiteLinks as link (link.id)}
				<li data-id={link.id}>
					<a
						href={resolve(link.url)}
						class="nav-link {page.url.pathname.includes(link.url) ? 'current' : ''}">{link.name}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
{/snippet} -->

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
		color: var(--color-ink);
		text-decoration: none;
		aspect-ratio: 1;
		outline: 2px solid transparent;
		outline-offset: 5px;
		position: relative;

		&:is(:hover, :focus) {
			background-color: var(--color-primary-100);
		}

		&.at-home {
			color: var(--color-white);
			background-color: var(--color-primary);
		}

		&:focus-visible {
			outline-color: var(--color-primary);
		}
	}

	/*ul.nav-list {
		list-style: none;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 0.625rem;
		padding-inline-start: 1.25rem;

		& .nav-link {
			color: var(--color-ink);
			text-decoration: none;
			display: block;
			padding-inline: 1em;
			padding-block: 0.5em;
			border: 2px solid var(--color-primary-200);
			outline: 2px solid transparent;
			outline-offset: 4px;
			position: relative;

			&:is(:hover, :focus) {
				color: var(--color-ink);
				border-color: var(--color-primary-500);
				background: var(--color-primary-100);
			}

			&:focus-visible {
				outline-color: var(--color-primary);
			}

			&.current {
				color: var(--color-white);
				border-color: var(--color-primary-500);
				background: var(--color-primary-500);
			}
		}
	}*/
</style>
