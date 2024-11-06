<script lang="ts">
	export let heading: string = 'Heading';
	export let details: string = 'Details go here';
	export let url: string = 'https://example.com';
</script>

<a href={url} target="_blank" rel="noopener noreferrer" class="card">
	<h5 class="heading">
		{heading}
	</h5>
	<p class="details">
		{details}
	</p>
</a>

<style>
	.card {
		appearance: none;
		color: unset;
		text-decoration: none;
		width: 100%;
		display: flex;
		flex-direction: column;
		padding: 20px;
		border-radius: 20px;
		outline: 2px solid transparent;
		outline-offset: 4px;

		& > .heading {
			font-size: 30px;
			font-weight: 400;
			line-height: 1.5;
			text-decoration: 2px solid underline;
			text-underline-offset: 4px;
		}

		&:is(:hover, :focus) {
			background: color-mix(in oklab, var(--clr-text), transparent 90%);

			& > .heading {
				color: var(--clr-primary);
			}
		}

		&:focus-visible {
			outline-color: var(--clr-primary);
		}
	}
</style>
