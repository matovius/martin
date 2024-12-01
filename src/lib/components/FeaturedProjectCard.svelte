<script lang="ts">
	export let heading: string = 'Heading';
	export let year: number = 1970;
	export let url: string = 'https://example.com';
</script>

<a href={url} target="_blank" rel="noopener noreferrer" class="card">
	<h5 class="h5">
		{heading}
	</h5>
	<p class="p">{year}</p>
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
			position: absolute;
			inset: 0;
			background: var(--clr-primary);
			transform: translateX(-100%);
		}

		& > * {
			position: absolute;
		}
		& > h5 {
			inset-inline-start: 0;
		}
		& > p {
			inset-inline-end: 20px;
		}

		&:is(:hover, :focus) {
			color: var(--clr-base);

			&::before {
				transform: translateX(0);
				transition-delay: 200ms;
			}

			& > h5 {
				transform: translateX(20px);
			}
		}

		&:focus-visible {
			outline-color: var(--clr-primary);
		}
	}
</style>
