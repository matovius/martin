<script lang="ts">
	import GitHub from '$lib/components/icons/GitHub.svelte';
	import Hashnode from '$lib/components/icons/Hashnode.svelte';
	import Mastodon from '$lib/components/icons/Mastodon.svelte';
	import ReadCv from '$lib/components/icons/ReadCV.svelte';
	import Threads from '$lib/components/icons/Threads.svelte';

	import profileImage from '$lib/assets/profile-photo.png';
</script>

<svelte:head>
	<title>Martin Matovu</title>
</svelte:head>

<main class="main">
	<div>
		<section class="profile">
			<div>
				<span class="p">Hi, my name is</span>
				<h1 class="h1 font-rubik">Martin Matovu</h1>
				<div class="descriptors">
					<span class="p">Pixel Pusher</span>
					<hr />
					<span class="p">Browser Charmer</span>
					<hr />
					<span class="p">API Whisperer</span>
				</div>
				<p class="p">
					Commonly known as a
					<strong style="color: hsl(216, 90%, 46%);">web developer</strong>.
				</p>
			</div>
			<div class="profile-image">
				<img src={profileImage} alt="Me, Martin Matovu" loading="lazy" />
			</div>
		</section>
		<section class="socials">
			<a
				href="https://github.com/matovius"
				target="_blank"
				rel="noopener noreferrer"
				class="card social-button github"
			>
				<div class="card-body">
					<div>
						<div class="logo-wrapper">
							<GitHub />
						</div>
						<div class="title">GitHub</div>
					</div>
				</div>
			</a>
			<a
				href="https://mastodon.social/@matovius"
				target="_blank"
				rel="noopener noreferrer"
				class="card social-button mastodon"
			>
				<div class="card-body">
					<div>
						<div class="logo-wrapper">
							<Mastodon />
						</div>
						<div class="title">Mastodon</div>
					</div>
				</div>
			</a>
			<a
				href="https://threads.net/@matovius"
				target="_blank"
				rel="noopener noreferrer"
				class="card social-button threads"
			>
				<div class="card-body">
					<div>
						<div class="logo-wrapper">
							<Threads />
						</div>
						<div class="title">Threads</div>
					</div>
				</div>
			</a>
			<a
				href="https://read.cv/matovius"
				target="_blank"
				rel="noopener noreferrer"
				class="card social-button read-cv"
			>
				<div class="card-body">
					<div>
						<div class="logo-wrapper">
							<ReadCv />
						</div>
						<div class="title">Read.cv</div>
					</div>
				</div>
			</a>
			<a
				href="https://hashnode.com/matovius"
				target="_blank"
				rel="noopener noreferrer"
				class="card social-button hashnode"
			>
				<div class="card-body">
					<div>
						<div class="logo-wrapper">
							<div class="virtual-circle" />
							<Hashnode />
						</div>
						<div class="title">Hashnode</div>
					</div>
				</div>
			</a>
		</section>
		<section class="about">
			<div id="personal" class="personal-blurb">
				<p class="p">
					I love making beautiful websites, learning about the world around us, and doing the most
					amateur photography you've ever seen.
					<br />
				</p>
			</div>
			<div id="projects" class="projects-blurb">
				<p class="p">
					I've made a few projects so far. A few of my favorites are: Monofont, a collection of
					monospaced coding fonts for developers; Weathery, an <abbr
						data-title="Single Page Application">SPA</abbr
					>
					for working with the OpenWeatherMap
					<abbr data-title="Application Programming Interface">API</abbr>, and Distractible Stats,
					which I just made for fun for a podcast I listen to.
				</p>
				<br />
				<div class="card-wrapper">
					<div class="card monofont">
						<div
							class="card-image"
							style="min-height: 8rem; aspect-ratio: 3/1; background: hsl(0, 0%, 0%, 0.1)"
						/>
						<div class="card-body">
							<h5 class="h5">Monofont</h5>
						</div>
						<div class="card-footer">
							<div>
								<button class="button">Source Code</button>
								<button class="button">Live Demo</button>
							</div>
						</div>
					</div>
				</div>
				<br />
			</div>
		</section>
	</div>
</main>

<style>
	.main {
		width: 100%;
		padding-bottom: 2.25rem /* 36px */;
		display: flex;
		justify-content: center;
		align-items: center;

		& > div {
			width: 100%;
			max-width: 53.75rem /* 860px */;
			padding-top: 5rem;
			padding-left: 1.5rem /* 24px */;
			padding-right: 1.5rem /* 24px */;
		}
	}
	.profile {
		width: 100%;
		display: flex;
		flex-direction: column-reverse;
		justify-content: start;
		align-items: center;
		gap: 1.5rem /* 24px */;

		@media (min-width: 480px) {
			flex-direction: row;
			justify-content: center;
			align-items: center;
			gap: 3rem /* 48px */;
		}

		& .h1 {
			color: hsl(216, 90%, 46%);
			font-size: 3rem /* 48px */;
			padding-top: 1.5rem /* 24px */;
			padding-bottom: 1.5rem /* 24px */;

			@media (min-width: 480px) {
				font-size: 3.75rem /* 60px */;
			}
		}

		& p.p {
			padding-top: 1.5rem /* 24px */;
		}
	}

	.descriptors {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 0.25rem /* 4px */ 0.5rem /* 8px */;

		& > hr {
			width: 1px;
			height: 24px;
			border: none;
			background: hsl(216, 90%, 46%, 0.6);
			mask: linear-gradient(
				0deg,
				transparent,
				hsl(0, 0%, 100%) 8px,
				hsl(0, 0%, 100%) calc(100% - 8px),
				transparent
			);
		}
	}

	.profile-image {
		width: 100%;
		max-width: 11.25rem;
		aspect-ratio: 1;
	}

	.about {
		width: 100%;
		padding-top: 5rem /* 80px */;
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
		gap: 1.5rem /* 24px */;

		& > div {
			width: 100%;
		}
	}

	.projects-blurb {
		& .card {
			width: 100%;
			border-color: hsl(0, 0%, 0%, 0.1);

			& > .card-footer {
				padding-top: 0;
				& > div {
					width: 100%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					gap: 1.5rem;

					@media (min-width: 480px) {
						flex-direction: row;
					}

					& > .button {
						width: 100%;
						background: hsl(0, 0%, 0%, 0.1);
					}
				}
			}
		}
	}

	.socials {
		width: 100%;
		/*max-width: 30rem /* 480px */
		display: flex;
		flex-direction: row;
		justify-content: start;
		align-items: center;
		gap: 1.5rem /* 24px */;
		flex-wrap: wrap;
		padding-top: 2.25rem;

		& .card {
			width: 100%;
			max-width: 20rem /* 320px */;
			& > .card-body {
				padding: 0.5rem;

				& > div {
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					gap: 0.75rem;
				}
			}
		}
		& > .social-button {
			width: fit-content;
			text-decoration: none;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			border-radius: 0.75rem;
			outline-offset: 0.125rem;
			& .logo-wrapper {
				width: 1.5rem;
				height: 1.5rem;
				display: flex;
				justify-content: center;
				align-items: center;
				position: relative;
			}

			&.github,
			&.threads,
			&.read-cv {
				color: hsl(0, 0%, 0%, 0.9);
				background: hsl(0, 0%, 0%, 0.05);
				border-color: hsl(0, 0%, 0%, 0.1);

				&:hover {
					color: hsl(0, 0%, 100%);
					background: hsl(0, 0%, 0%);
					border-color: hsl(0, 0%, 0%);
				}

				&:focus {
					outline-color: hsl(0, 0%, 0%);
				}
			}

			&.mastodon {
				color: hsl(252, 59%, 51%, 0.9);
				background: hsl(252, 59%, 51%, 0.05);
				border-color: hsl(252, 59%, 51%, 0.1);

				&:hover {
					color: hsl(0, 0%, 100%);
					background: hsl(252, 59%, 51%);
					border-color: hsl(252, 59%, 51%);
				}

				&:focus {
					outline-color: hsl(252, 59%, 51%);
				}
			}

			&.hashnode {
				color: hsl(224, 100%, 58%, 0.9);
				background: hsl(224, 100%, 58%, 0.05);
				border-color: hsl(224, 100%, 58%, 0.2);

				&:hover {
					color: hsl(0, 0%, 100%);
					background: hsl(224, 100%, 58%);
					border-color: hsl(224, 100%, 58%);
				}

				&:focus {
					outline-color: hsl(224, 100%, 58%);
				}

				/* 
				This ".virtual-circle" element is just here to make the Hashnode logo
				look as usual when it's hovered over. I don't have the energy to code
				some way for the circle in the actual logo to change colors dynamically.
				*/
				& .virtual-circle {
					width: 33%;
					height: 33%;
					aspect-ratio: 1;
					border-radius: 9999rem;
					background: hsl(0, 0%, 100%);
					position: absolute;
				}

				&:hover .virtual-circle {
					background: hsl(224, 100%, 58%);
				}
			}
		}
	}

	.card-wrapper {
		max-width: 22.5rem;
	}
</style>
