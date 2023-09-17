<script lang="ts">
</script>

<svelte:head>
	<title>Projects by Martin Matovu</title>
</svelte:head>

<main class="main">
	<div>
		<div class="hero-section">
			<div>
				<h1 class="h1 font-rubik">Projects</h1>
				<p class="p1">
					Currently empty, but something is
					<strong>in the works</strong>, guaranteed.
				</p>
			</div>
			<article class="card">
				<p class="p1">
					Here I show off the bigger stuff that I work on. These are much larger in scope than
					<strong>micro works</strong>.
				</p>
			</article>
		</div>
	</div>
</main>

<style>
	.hero-section {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2.25rem /* 36px */;

		@media (min-width: 680px) {
			flex-direction: row;
		}

		& > div {
			max-width: 22.5rem /* 360px */;
			display: flex;
			flex-direction: column;
			gap: 2rem /* 32px */;

			& > p.p1 > strong {
				color: hsl(133, 90%, 33%);
			}
		}

		& h1.h1 {
			color: hsl(133, 90%, 33%);
		}

		& > .card {
			color: hsl(0, 0%, 0%);
			max-width: 22.5rem /* 360px */;
			border-color: hsl(133, 90%, 33%, 0.2);
			background: hsl(133, 90%, 33%, 0.05);
			backdrop-filter: blur(4px);
			position: relative;

			& > p.p1 > strong {
				color: hsl(315, 90%, 46%);
			}
		}
	}
</style>
