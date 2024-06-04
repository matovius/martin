<script lang="ts">
</script>

<section id="coming-soon" class="coming-soon">
	<div class="container">
		<div class="headline">
			<h1 class="h1 heading">Coming Soon</h1>
			<h2 class="h4 subheading">
				This page is currently under construction and will be coming soon, but don't hold your
				breath.
			</h2>
			<p class="p">In the meantime...</p>
			<button
				class="button exorcism"
				title="I cast thee back to whence thou hath comest"
				on:click={() => {
					history.back();
				}}
			>
				<div class="front">
					<span>Go back</span>
				</div>
			</button>
		</div>
	</div>
</section>

<style>
	.coming-soon {
		width: 100%;
		height: calc(90dvh - 70px);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-inline: 20px;

		& > .container {
			padding-bottom: 40px;

			& > .headline {
				display: flex;
				flex-direction: column;
				gap: 20px;

				& > .heading {
					color: hsl(var(--clr-primary));
				}
			}
		}
	}
</style>
