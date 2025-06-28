<script lang="ts">
</script>

<section id="coming-soon" class="coming-soon">
	<div class="container">
		<div class="headline">
			<h1 class="heading">Coming Soon</h1>
			<h2 class="h4 subheading">
				This page is currently under construction and will be coming soon, but don't hold your
				breath.
			</h2>
			<p>In the meantime...</p>
		</div>
		<div class="cta">
			<button
				class="btn exorcism"
				aria-label="&larr; Go back"
				title="I cast thee back to whence thou hath comest"
				onclick={() => {
					history.back();
				}}
			></button>
		</div>
	</div>
</section>

<style>
	.coming-soon {
		--_pblock: 2.5rem /* 40px */;
		--_pblock-start: var(--_pblock);
		width: 100%;
		height: 100svh;
		padding-inline: 1.25rem /* 20px */;
		padding-block: var(--_pblock);
		padding-block-start: calc(var(--header-height) + var(--_pblock-start)) /* 40px */;

		@media screen and (min-width: 37.5rem) /* 600px */ {
			--_pblock-start: 5rem /* 80px */;
		}

		& > .container {
			padding-block-end: 2.5rem /* 40px */;

			& > .headline {
				display: flex;
				flex-direction: column;
				gap: 1.25rem /* 20px */;

				& > .heading {
					color: var(--color-primary);
				}
			}

			& > .cta {
				width: 100%;
				padding-block-start: 2.5rem /* 40px */;
			}
		}
	}
</style>
