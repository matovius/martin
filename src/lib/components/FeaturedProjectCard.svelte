<script lang="ts">
	interface Props {
		heading?: string;
		year?: number;
		url?: string;
	}

	let { heading = 'Heading', year = 1970, url = 'https://example.com' }: Props = $props();
</script>

<a href={url} target="_blank" rel="noopener noreferrer" class="card" aria-label="{heading}; made in {year}">
	<div class="h5" aria-hidden="true">
		{heading}
	</div>
	<small aria-hidden="true">{year}</small>
</a>

<style>
	a.card {
		appearance: none;
		color: unset;
		text-decoration: none;
		isolation: isolate;
		width: 100%;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 9999rem;
		outline: 2px solid transparent;
		outline-offset: 2px;
		position: relative;
		overflow: hidden;
		user-select: none;

		&::before {
			content: '';
			width: 0px;
			height: auto;
			aspect-ratio: 1;
			border-radius: 50%;
			position: absolute;
			inset-inline-start: -1.25rem; /* -20px */
			background: var(--clr-primary);
		}

		& > * {
			position: absolute;
		}
		& > .h5 {
			font-family: var(--font-passion-one);
			inset-inline-start: .3125rem; /* 5px */
		}
		& > small {
			inset-inline-end: 1.25rem; /* 20px */
			opacity: 0.6;
		}

		&:is(:global(:hover, :focus)) {
			color: var(--clr-base);

			&::before {
				width: 110%;
				transition-delay: 200ms;
			}

			& > .h5 {
				transform: translateX(1.25rem); /* 20px */
			}
		}

		&:focus-visible {
			outline-color: var(--clr-primary);
		}
	}
</style>
