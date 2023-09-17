<script lang="ts">
</script>

<svelte:head>
	<title>Micro Works by Martin Matovu</title>
</svelte:head>

<main class="main">
	<div>
		<div class="hero-section">
			<div>
				<h1 class="h1 font-rubik">Micro Works</h1>
				<p class="p1">
					Currently empty, but something is
					<strong>in the works</strong>. You can bet on that.
				</p>
			</div>
			<article class="card">
				<p class="p1">
					This is the place where I showcase anything I make that's not big enough to be considered
					a <strong>project</strong>.
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
				color: hsl(315, 90%, 46%);
			}
		}

		& h1.h1 {
			color: hsl(315, 90%, 46%);
		}

		& > .card {
			color: hsl(0, 0%, 0%);
			max-width: 22.5rem /* 360px */;
			border-color: hsl(315, 90%, 46%, 0.2);
			background: hsl(315, 90%, 46%, 0.05);
			backdrop-filter: blur(4px);
			position: relative;

			& > p.p1 > strong {
				color: hsl(133, 90%, 33%);
			}
		}
	}
</style>
