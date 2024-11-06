<script lang="ts">
	import Menu from './Menu.svelte';
	import CoolFaceLogo from './CoolFaceLogo.svelte';

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

<header class="main-header">
	<div class="container">
		<div class="corner start">
			<a href="/" class="home-link" aria-label="Go to homepage">
				<div aria-hidden="true">
					<CoolFaceLogo />
				</div>
			</a>
		</div>
		<div class="corner end">
			<Menu />
		</div>
	</div>
</header>

<style>
	header.main-header {
		display: flex;
		justify-content: center;
		align-items: center;
		padding-inline: 20px;
		background: var(--clr-base);
		position: fixed;
		top: 0;
		inset-inline: 0;
		z-index: 1000;

		& > div.container {
			max-width: 1280px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			padding-block: 20px;
		}

		& .corner {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 10px;

			&.start {
				justify-content: flex-start;
			}
			&.end {
				justify-content: flex-end;
			}
		}
	}

	a.home-link {
		border-radius: 20px;
		outline: 2px solid transparent;
		outline-offset: 6px;

		&:focus-visible {
			outline-color: var(--clr-primary);
		}

		& > div {
			width: 30px;
			height: 30px;
			aspect-ratio: 1;
		}
	}
</style>
