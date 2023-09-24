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
		<div class="profile">
			<div>
				<span class="p1">Hi, my name is</span>
				<h1 class="h1 font-rubik">Martin Matovu</h1>
				<div class="descriptors">
					<span class="p1">Pixel Pusher</span>
					<hr />
					<span class="p1">Browser Charmer</span>
					<hr />
					<span class="p1">API Whisperer</span>
				</div>
				<p class="p1">
					Commonly known as a
					<strong style="color: hsl(216, 90%, 46%);">web developer</strong>.
				</p>
			</div>
			<div class="profile-image">
				<img src={profileImage} alt="Me, Martin Matovu" loading="lazy" />
			</div>
		</div>
		<div class="about">
			<article id="personal-blurb">
				<p class="p1">
					I love making beautiful websites, learning about the world around us, and doing the most
					amateur photography you've ever seen.
					<br /><br />
					<small>
						<em>Side Note: The cards below are clickable.</em>
					</small>
				</p>
			</article>
			<article id="projects-blurb">
				<p class="p">
					I've made a few projects so far. One of them is Monofont, a collection of monospaced
					coding fonts for developers.
				</p>
				<br />
				<p class="p">
					A couple others include Distractible Stats, which I just made for fun for a podcast I
					listen to, and Weathery, an <abbr data-title="Single Page Application">SPA</abbr> for
					working with the OpenWeatherMap
					<abbr data-title="Application Programming Interface">API</abbr>.
				</p>
				<br />
				<p class="p">The one I'm working on right now is called Pagemark, a bookmarking web app.</p>
			</article>
			<section class="socials">
				<h3 class="h3">Check me out on these websites</h3>
				<a
					href="https://github.com/matovius"
					target="_blank"
					rel="noopener noreferrer"
					class="card github"
				>
					<div class="bg-logo">
						<GitHub />
					</div>
					<div class="content">
						<h5 class="h5">Github</h5>
						<span class="p1">@matovius</span>
					</div>
				</a>
				<a
					href="https://mastodon.social/@matovius"
					target="_blank"
					rel="noopener noreferrer"
					class="card mastodon"
				>
					<div class="bg-logo">
						<Mastodon />
					</div>
					<div class="content">
						<h5 class="h5">Mastodon</h5>
						<span class="p1">@matovius</span>
					</div>
				</a>
				<a
					href="https://threads.net/@matovius"
					target="_blank"
					rel="noopener noreferrer"
					class="card threads"
				>
					<div class="bg-logo">
						<Threads />
					</div>
					<div class="content">
						<h5 class="h5">Threads</h5>
						<span class="p1">@matovius</span>
					</div>
				</a>

				<a
					href="https://read.cv/matovius"
					target="_blank"
					rel="noopener noreferrer"
					class="card read-cv"
				>
					<div class="bg-logo">
						<ReadCv />
					</div>
					<div class="content">
						<h5 class="h5">Read.cv</h5>
						<span class="p1">@matovius</span>
					</div>
				</a>
				<a
					href="https://hashnode.com/matovius"
					target="_blank"
					rel="noopener noreferrer"
					class="card hashnode"
				>
					<div class="bg-logo">
						<div class="virtual-circle" />
						<Hashnode />
					</div>
					<div class="content">
						<h5 class="h5">Hashnode</h5>
						<span class="p1">@matovius</span>
					</div>
				</a>
			</section>
		</div>
	</div>
</main>

<style>
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

		& p.p1 {
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
		max-width: 15rem /* 240px */;
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

		& > article {
			width: 100%;
			max-width: 30rem;
		}
	}

	.socials {
		width: 100%;
		/*max-width: 30rem /* 480px */
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 1.5rem /* 24px */;
		flex-wrap: wrap;

		& .card {
			width: 100%;
			max-width: 20rem /* 320px */;
			text-decoration: none;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			& .bg-logo {
				height: 150%;
				aspect-ratio: 1;
				display: flex;
				justify-content: center;
				align-items: center;
				transform: rotate(-15deg);
				position: absolute;
				top: -25%;
				bottom: -25%;
				opacity: 0.2;
				z-index: -1;
			}

			& > .content {
				max-width: 100%;
			}
		}
	}

	.github,
	.threads,
	.read-cv {
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

	.read-cv {
		background: hsl(0, 0%, 100%, 0.4);
	}

	.mastodon {
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

	.hashnode {
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
</style>
