<script lang="ts">
	import FeaturedProjectCard from '$lib/components/FeaturedProjectCard.svelte';
</script>

<svelte:head>
	<title>Martin Matovu - Welcome to my Home</title>
</svelte:head>

<main class="main">
	<section id="hero" class="section hero">
		<div class="container">
			<div class="headline">
				<h1 class="h1 heading">Hi, I'm Martin Matovu</h1>
				<h2 class="h4 subheading">
					Renowned pixel pusher, apparent browser charmer, and touted API whisperer
				</h2>
				<p class="p text">
					I'm a web designer and developer with a main focus on the frontend. I love making great
					web experiences and learning about the universe. I also do freelance work.
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
					<a
						href="https://dribbble.com/matovius"
						target="_blank"
						rel="noopener noreferrer"
						class="button dribbble"
					>
						<div class="front">
							<span>Dribbble</span>
						</div>
					</a>
					<a
						href="https://threads.net/matovius_"
						target="_blank"
						rel="noopener noreferrer"
						class="button threads"
					>
						<div class="front">
							<span>Threads</span>
						</div>
					</a>
					<a
						href="https://read.cv/matovius"
						target="_blank"
						rel="noopener noreferrer"
						class="button instagram"
					>
						<div class="front">
							<span>Read.cv</span>
						</div>
					</a>
					<a
						href="https://instagram.com/matovius_"
						target="_blank"
						rel="noopener noreferrer"
						class="button instagram"
					>
						<div class="front">
							<span>Instagram</span>
						</div>
					</a>
					<a
						href="https://linkedin.com/in/martin-matovu"
						target="_blank"
						rel="noopener noreferrer"
						class="button linkedin"
					>
						<div class="front">
							<span>LinkedIn</span>
						</div>
					</a>
				</div>
			</div>
		</div>
	</section>

	<section id="projects" class="section projects">
		<div class="container">
			<div class="headline">
				<h3 class="h3 heading">Previous projects</h3>
				<p class="p text">
					These are some of my best (and favorite) projects that I've worked on. (It's currently
					just one because it's the only good one I've deployed. But I'm working on more stuff to
					have it here too)
				</p>
			</div>

			<div class="featured-projects">
				<FeaturedProjectCard
					heading="Built By"
					details="For when you want some cretive adjectives for your project footers."
					url="https://built-by.pages.dev"
				/>
			</div>

			<div class="cta">
				<button class="button talk-to-me">
					<div class="front">
						<span>See more projects</span>
					</div>
				</button>
			</div>
		</div>
	</section>
</main>

<style>
	.main {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-inline: 20px;
		padding-block: 120px 40px;

		& > .section {
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}

	.hero {
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

			& > .main-cta {
				padding-top: 20px;

				& > .talk-to-me {
					width: 100%;
					display: inline-block;

					& > .front {
						padding-inline: 96px;
						background: hsl(var(--clr-secondary));
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
					color: hsl(var(--clr-primary));
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

	.projects {
		& > .container {
			padding-block: 40px;

			& > .headline {
				display: flex;
				flex-direction: column;
				gap: 20px;

				& > .heading {
					color: hsl(var(--clr-primary));
				}
			}

			& > .featured-projects {
				width: 100%;
				display: flex;
				flex-direction: column;
				gap: 10px;
				padding-top: 20px;
			}

			& > .cta {
				display: none;
				padding-top: 20px;

				& > .talk-to-me {
					& > .front {
						padding-inline: 40px;
						background: hsl(var(--clr-secondary));
					}
				}
			}
		}
	}
</style>
