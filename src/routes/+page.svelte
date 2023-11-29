<script lang="ts">
	import { ArrowRight, Dribbble, Github, Instagram, Linkedin } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Martin Matovu</title>
</svelte:head>

<main class="main">
	<section id="hero" class="hero">
		<div class="headline">
			<h1 class="h1">I'm Martin Matovu</h1>
			<h2 class="h2">A freelance web designer and developer</h2>
		</div>
		<div class="contact-cta">
			<div class="availability">
				<div class="indicator" data-available="true" />
			</div>
			<button class="button">
				<span>Get In Touch</span>
				<ArrowRight />
			</button>
		</div>
		<div class="social-buttons">
			<button class="button github">
				<Github />
				<span>GitHub</span>
			</button>
			<button class="button dribbble">
				<Dribbble />
				<span>Dribbble</span>
			</button>
			<button class="button instagram">
				<Instagram />
				<span>Instagram</span>
			</button>
			<button class="button linkedin">
				<Linkedin />
				<span>LinkedIn</span>
			</button>
		</div>
	</section>
	<section id="about" class="about">
		<p class="p">
			I love making the web more beautiful, learning about the world around us, and doing the most
			amateur photography you'll ever see.
		</p>
		<p class="p">
			I've worked on quite a few things, but that doesn't mean I don't know how to play. Sometimes,
			I even make wallpapers too.
		</p>
		<p class="p">
			I also have a little blog where I share some of my thoughts and details about the projects I
			work on. I don't write very often, but I try to write when I can. But you can check it out
			nonetheless.
		</p>
	</section>
</main>

<style>
	.main {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

		& > section {
			width: 100%;
			max-width: 40rem; /* 640px */
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			gap: 24px; /* 24px */
			padding: 1.5rem; /* 24px */
		}

		& > .hero#hero {
			gap: 3rem; /* 48px */
		}
	}

	.headline {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1.5rem; /* 24px */

		& > h1.h1 {
			color: hsl(216, 90%, 46%);
		}

		& > h2.h2 {
			color: hsl(0, 0%, 0%, 0.6);
		}
	}

	.contact-cta {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		gap: 24px; /* 1.5rem */

		& > .availability {
			width: 90px;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			gap: 0.75rem; /* 12px */

			& > .indicator {
				width: 12px;
				height: 12px;
				aspect-ratio: 1;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 9999rem;
				position: relative;

				&::after {
					/*
					position: absolute;
					left: calc(100% + 0.75rem);*/
					font-size: var(--font-size-small);
					color: hsl(0, 0%, 0%, 0.8);
					transform: translateX(80%);
				}

				&[data-available='true'] {
					background-color: hsl(111, 73%, 43%);

					&::after {
						content: 'Available';
					}
				}

				&[data-available='false'] {
					background-color: hsl(0, 0%, 0%, 0.4);

					&::after {
						content: 'Not Available';
					}
				}
			}
		}

		& > .button {
			border-color: hsl(216, 90%, 46%, 0.2);
			color: hsl(216, 90%, 46%);

			&:hover {
				color: hsl(0, 0%, 100%);
				background-color: hsl(216, 90%, 46%);
			}
		}
	}

	.social-buttons {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: center;
		gap: 0.5rem; /* 8px */

		& > .github {
			border-color: hsl(0, 0%, 0%, 0.1);
			color: hsl(0, 0%, 0%);

			&:hover {
				color: hsl(0, 0%, 100%);
				background-color: hsl(0, 0%, 0%);
			}
		}

		& > .dribbble {
			border-color: hsl(313, 40%, 49%, 0.2);
			color: hsl(313, 40%, 49%);
			&:hover {
				color: hsl(0, 0%, 100%);
				background-color: hsl(313, 40%, 49%);
			}
		}

		& > .instagram {
			border-color: hsl(28, 97%, 54%, 0.2);
			color: hsl(28, 97%, 54%);

			&:hover {
				color: hsl(0, 0%, 100%);
				background-color: hsl(28, 97%, 54%);
			}
		}

		& > .linkedin {
			border-color: hsla(221, 89%, 42%, 0.2);
			color: hsl(221, 89%, 42%);

			&:hover {
				color: hsl(0, 0%, 100%);
				background-color: hsl(221, 89%, 42%);
			}
		}
	}
</style>
