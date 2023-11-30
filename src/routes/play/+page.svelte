<script lang="ts">
</script>

<svelte:head>
	<title>My Play - Martin Matovu</title>
</svelte:head>

<main class="main">
	<section id="hero" class="hero">
		<h1 class="h1">Play</h1>
		<p class="p">
			Here's what I play around with when I'm not working on a project. All the explorations and
			experiments I do, whether for design or development, they live here. So explore and have fun.
		</p>
	</section>

	<section id="plays" class="plays" />
</main>

<style>
	.plays#plays {
		gap: 3rem; /* 48px */
	}

	.project {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 0.75rem; /* 12px */

		& > .image {
			width: 100%;
			aspect-ratio: 16 / 9;
			border-radius: 0.75rem; /* 12px */
			border: 2px solid hsl(0, 0%, 100%, 0.1);
			background-color: hsl(0, 0%, 100%, 0.1);
		}

		& > .details {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			gap: 0.75rem; /* 12px */

			& > small.small {
				color: hsl(0, 0%, 100%, 0.4);
			}
		}

		& > .ctas {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: flex-start;
			gap: 0.5rem; /* 8px */
		}
	}
</style>
