<script lang="ts">
</script>

<section id="coming-soon" class="coming-soon">
	<div class="container">
		<div class="headline">
			<h1 class="h1 heading">Coming Soon</h1>
			<h2 class="h4 subheading">
				This page is currently under development and will be coming soon
			</h2>
		</div>
	</div>
</section>

<style>
	.coming-soon {
		width: 100%;
		height: calc(80dvh - 70px);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

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
