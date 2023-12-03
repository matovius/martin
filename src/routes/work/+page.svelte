<script lang="ts">
	import TildePrez from '$lib/assets/Tilde-Project-Presentation.png';
	import WorkLouderPrez from '$lib/assets/Work-Louder-Project-Presentation.png';
	import ColorspacePrez from '$lib/assets/Colorspace-Project-Presentation.png';
</script>

<svelte:head>
	<title>My Work - Martin Matovu</title>
</svelte:head>

<main class="main">
	<section id="hero" class="hero">
		<h1 class="h1">Work</h1>
		<p class="p">
			These are some of the projects I've had the opportunity and privilege to work on.
		</p>
	</section>

	<section id="projects" class="projects">
		<div id="project-tilde" class="project tilde">
			<div class="image" style={`background-image: url(${TildePrez});`} />
			<div class="details">
				<h2 class="h3">Tilde</h2>
				<small class="small">Design & Development</small>
				<p class="p">
					This was a personal project, but I had a lot of fun designing the UI and building the
					logic for the app. I made it as simple and minimalistic as I could while keeping as much
					of the functionality as possible.
				</p>
			</div>
			<div class="ctas">
				<button class="button">Details</button>
				<button class="button">Demo</button>
			</div>
		</div>

		<div id="project-work-louder" class="project work-louder">
			<div class="image" style={`background-image: url(${WorkLouderPrez});`} />
			<div class="details">
				<h2 class="h3">Work Louder</h2>
				<small class="small">Design & Development</small>
				<p class="p">
					I got permission from the Work Louder team to redesign their website because it didn't
					seem to be fully responsive and accessible. So I did a redesign of the homepage, store
					page and product page displaying better responsiveness and accessibility while maintaining
					some of the better parts of the original design including the nice card layouts and
					rounded edges aesthetic.
				</p>
			</div>
			<div class="ctas">
				<button class="button">Details</button>
				<button class="button">Demo</button>
			</div>
		</div>

		<div id="project-colorspace" class="project colorspace">
			<div class="image" style={`background-image: url(${ColorspacePrez});`} />
			<div class="details">
				<h2 class="h3">Colorspace</h2>
				<small class="small">Design</small>
				<p class="p">
					I got to design the marketing website for Colorspace, a color app for designers and
					developers. I implemented large clickable buttons, simple legible fonts, and overall great
					user experience with easily noticeable calls-to-actions, which in this case were waitlist
					buttons.
				</p>
			</div>
			<div class="ctas">
				<button class="button">Details</button>
			</div>
		</div>
	</section>
</main>

<style>
	.projects#projects {
		gap: 3rem; /* 48px */
	}

	.project {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 0.75rem; /* 12px */

		& > .image {
			width: 100%;
			aspect-ratio: 16 / 9;
			border-radius: 0.75rem; /* 12px */
			background-color: var(--clr-white-10);
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;

			@media (min-width: 480px) {
				aspect-ratio: 24 / 9;
			}

			@media (min-width: 640px) {
				aspect-ratio: 32 / 9;
			}
		}

		& > .details {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			gap: 0.75rem; /* 12px */

			& > small.small {
				color: var(--clr-white-40);
			}
		}

		& > .ctas {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: flex-start;
			gap: 0.5rem; /* 8px */
		}
	}
</style>
