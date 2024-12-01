<script lang="ts">
</script>

<section id="hero" class="hero">
	<div class="container">
		<div class="headline">
			<h1 class="h1 heading">Hi, I'm Martin Matovu</h1>
			<h2 class="h4 subheading">Frontend engineer, Svelte deity, Accessibility acolyte</h2>
			<p class="p text">
				I make websites do my bidding for my enjoyment, otherwise I dabble in CSS button theft, <span
					>generative art</span
				>
				and amateur photography.
			</p>
		</div>

		<div class="main-cta">
			<a href="/contact" class="button talk-to-me">
				<div class="front">
					<span>Talk to me</span>
				</div>
			</a>
		</div>

		<div class="socials">
			<h5 class="heading">Or check me out elsewhere:</h5>

			<div class="list">
				<a
					href="https://github.com/matovius"
					target="_blank"
					rel="noopener noreferrer"
					class="button github"
				>
					<div class="front">
						<span>GitHub</span>
					</div>
				</a>

				<!-- <a
          href="https://dribbble.com/matovius"
          target="_blank"
          rel="noopener noreferrer"
          class="button dribbble"
        >
          <div class="front">
            <span>Dribbble</span>
          </div>
        </a> -->

				<a href="https://read.cv/matovius" target="_blank" rel="noopener noreferrer" class="button">
					<div class="front">
						<span>Read.cv</span>
					</div>
				</a>
				<a
					href="https://linkedin.com/in/martin-matovu"
					target="_blank"
					rel="noopener noreferrer"
					class="button"
				>
					<div class="front">
						<span>LinkedIn</span>
					</div>
				</a>
				<a
					href="https://mastodon.social/matovius"
					target="_blank"
					rel="noopener noreferrer"
					class="button"
				>
					<div class="front">
						<span>Mastodon</span>
					</div>
				</a>
				<a
					href="https://threads.net/matovius_"
					target="_blank"
					rel="noopener noreferrer"
					class="button"
				>
					<div class="front">
						<span>Threads</span>
					</div>
				</a>

				<!-- <a
          href="https://instagram.com/matovius_"
          target="_blank"
          rel="noopener noreferrer"
          class="button instagram"
        >
          <div class="front">
            <span>Instagram</span>
          </div>
        </a> -->
			</div>
		</div>
	</div>
</section>

<style>
	section {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		& > .container {
			padding-block-end: 40px;

			& > .headline {
				display: flex;
				flex-direction: column;
				gap: 20px;

				& > .heading {
					color: var(--clr-primary);
				}
			}

			& > .main-cta {
				padding-top: 20px;

				& > .talk-to-me {
					width: 100%;
					display: inline-block;

					& > .front {
						padding-inline: 96px;
						background: var(--clr-secondary);
					}

					@media screen and (min-width: 480px) {
						width: fit-content;
					}
				}
			}

			& > .socials {
				width: 100%;
				display: flex;
				flex-direction: column;
				padding-top: 20px;

				& > .heading {
					color: var(--clr-primary);
					font-size: 20px;
					font-weight: 600;
					line-height: 1.5;
				}

				& > .list {
					width: 100%;
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
					gap: 5px;
					padding-top: 20px;
				}
			}
		}
	}
</style>
