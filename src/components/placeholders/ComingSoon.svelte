<section id="coming-soon" class="coming-soon-section">
	<div class="container">
		<article>
			<div class="content">
				<h2>Oh wait!</h2>
				<p>This part of the website is under construction. Please check back later.</p>
			</div>
		</article>
	</div>
</section>

<style>
	article {
		background-image: repeating-linear-gradient(
			120deg,
			var(--color-primary) 1em,
			transparent 1em 2em,
			var(--color-primary) 2em 3em
		);
		padding: 1em;
		position: relative;

		& > .content {
			min-height: 40lvh;
			padding: 2em;
			background: var(--color-base);
			/* position: absolute; */
			/* margin: 1em; */

			& > h2 {
				margin-block: 0 0.5em;
			}
		}
	}
</style>
