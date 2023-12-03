<script lang="ts">
	import { ArrowDown, Dribbble, Github, Instagram, Linkedin } from 'lucide-svelte';
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
			<a href="#contact" class="button">
				<span>Get In Touch</span>
				<ArrowDown />
			</a>
		</div>
		<div class="social-buttons">
			<a
				href="https://github.com/matovius"
				target="_blank"
				rel="noopener noreferrer"
				class="button github"
			>
				<Github />
				<span>GitHub</span>
			</a>
			<a
				href="https://dribbble.com/matovius"
				target="_blank"
				rel="noopener noreferrer"
				class="button dribbble"
			>
				<Dribbble />
				<span>Dribbble</span>
			</a>
			<a
				href="https://instagram.com/matovius_"
				target="_blank"
				rel="noopener noreferrer"
				class="button instagram"
			>
				<Instagram />
				<span>Instagram</span>
			</a>
			<a
				href="https://linkedin.com/in/martin-matovu"
				target="_blank"
				rel="noopener noreferrer"
				class="button linkedin"
			>
				<Linkedin />
				<span>LinkedIn</span>
			</a>
		</div>
	</section>
	<section id="about" class="about">
		<h2 class="h3">A little about me</h2>
		<p class="p">
			I love making the web more beautiful and accessible, learning about the world around us, and
			doing the most amateur photography you'll ever see.
		</p>
		<p class="p">
			In my <a href="/work" class="a">work</a>, I tend to go for simplicity in order to not
			overwhelm users with information. I'm also a big advocate for accessibility wherever possible,
			especially with elements that require user interaction.
		</p>
		<p class="p">
			While I've worked on a few things, that doesn't mean I don't know how to <a
				href="/play"
				class="a">play</a
			>. Sometimes, I even make <a href="#" class="a">wallpapers</a> too.
		</p>
		<p class="p">
			I also have a little <a href="#" class="a">blog</a> where I share some of my thoughts and details
			about the projects I work on. I don't write very often, but I try to write when I can.
		</p>
	</section>
	<section id="contact" class="contact">
		<h2 class="h3">How to get in touch with me</h2>
		<p class="p">
			You can get in touch with me on Dribbble, Instagram or LinkedIn with the links up above, or
			send me an email to <a href="mailto:matovius@proton.me" class="a">matovius@proton.me</a>
		</p>
	</section>
</main>

<style>
	.hero#hero {
		gap: 3rem; /* 48px */
	}

	.headline {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1.5rem; /* 24px */

		& > h1.h1 {
			color: var(--clr-primary-100);
		}

		& > h2.h2 {
			color: var(--clr-white-100);
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
					color: hsl(0, 0%, 100%, 0.8);
					transform: translateX(80%);
				}

				&[data-available='true'] {
					background-color: hsl(111, 73%, 43%);

					&::after {
						content: 'Available';
					}
				}

				&[data-available='false'] {
					background-color: var(--clr-white-40);

					&::after {
						content: 'Not Available';
					}
				}
			}
		}

		& > .button {
			border-color: var(--clr-primary-20);
			color: var(--clr-primary-100);

			&:hover {
				color: var(--clr-white-100);
				background-color: var(--clr-primary-100);
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
			border-color: hsl(0, 0%, 100%, 0.1);
			color: hsl(0, 0%, 100%);

			&:hover {
				color: hsl(0, 0%, 0%);
				background-color: hsl(0, 0%, 100%);
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
