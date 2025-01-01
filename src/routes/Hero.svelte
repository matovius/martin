<script lang="ts">
	import { socials } from '$lib/scripts/socials';
</script>

<section id="hero" class="hero">
	<div class="container">
		<div class="headline">
			<h1 class="h1 heading">Hi, I'm Martin Matovu</h1>
			<h2 class="h4 subheading">Frontend engineer + Accessibility acolyte</h2>
			<!-- TODO: replace all spans in this paragraph with links to the appropriate locations -->
			<p class="p text">
				I make websites do my bidding for my enjoyment<span class="footnote-mark">*</span>, otherwise I dabble in CSS button theft and
				<span>rust programming</span>.
				Also check out my <span>lab</span>, where I do random stuff in Svelte.
			</p>
			<small class="footnote">
				<span class="footnote-mark">*</span> - sometimes it's a little grueling to beat Web APIs into submission, but it's enjoyable overall.
			</small>
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
				{#each socials as link}
					<a
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						class="button social"
					>
						<div class="front">
							<span>{link.name}</span>
						</div>
					</a>
				{/each}
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

				& .footnote {
					color: color-mix(in oklab, var(--clr-text), transparent 40%);
				}
				& span.footnote-mark {
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
