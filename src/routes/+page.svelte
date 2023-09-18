<script lang="ts">
	import GitHub from '$lib/components/icons/GitHub.svelte';
	import Mastodon from '$lib/components/icons/Mastodon.svelte';
	import ReadCv from '$lib/components/icons/ReadCV.svelte';
	import Threads from '$lib/components/icons/Threads.svelte';
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
			<div class="profile-image" />
		</div>
		<div class="about">
			<article class="card personal-blurb">
				<p class="p1">
					I love making beautiful websites, learning about the world around us, and doing the most
					amateur photography you've ever seen.
				</p>
			</article>
			<div class="socials">
				<article class="card github">
					<div class="logo" style="background: hsl(0, 0%, 0%); color: hsl(0, 0%, 100%);">
						<GitHub />
					</div>
					<h5 class="h5">Github</h5>
					<span class="p3">github.com/matovius</span>
					<a
						href="https://github.com/matovius"
						target="_blank"
						rel="noopener noreferrer"
						class="button">Take a look</a
					>
				</article>
				<article class="card mastodon">
					<div class="logo" style="background: hsl(278, 89%, 47%); color: hsl(0, 0%, 100%);">
						<Mastodon />
					</div>
					<h5 class="h5">Mastodon</h5>
					<span class="p3">mastodon.social/@matovius</span>
					<a
						href="https://mastodon.social/@matovius"
						target="_blank"
						rel="noopener noreferrer"
						class="button">Follow me</a
					>
				</article>
				<div class="additional">
					<article class="card threads">
						<div class="logo" style="background: hsl(0, 0%, 0%); color: hsl(0, 0%, 100%);">
							<Threads />
						</div>
						<h5 class="h5">Threads</h5>
						<span class="p3">threads.net/@matovius_</span>
						<a
							href="https://threads.net/@matovius_"
							target="_blank"
							rel="noopener noreferrer"
							class="button">Follow me</a
						>
					</article>
					<article class="card read-cv">
						<div class="logo" style="background: hsl(0, 0%, 100%); color: hsl(0, 0%, 0%);">
							<ReadCv />
						</div>
						<h5 class="h5">Read.cv</h5>
						<span class="p3">read.cv/matovius</span>
						<a
							href="https://read.cv/matovius"
							target="_blank"
							rel="noopener noreferrer"
							class="button">Check it out</a
						>
					</article>
				</div>
				<article class="card hashnode">
					<div class="logo" />
					<h5 class="h5">Hashnode</h5>
					<span class="p3">hashnode.com/matovius</span>
					<a
						href="http://hashnode.com/matovius"
						target="_blank"
						rel="noopener noreferrer"
						class="button">Read some</a
					>
				</article>
			</div>
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
		background: hsla(0, 0%, 0%, 0.4);
	}

	.about {
		width: 100%;
		padding-top: 5rem /* 80px */;
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
		gap: 1.5rem /* 24px */;
	}

	.personal-blurb {
		width: 100%;
		max-width: 30rem /* 480px */;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 36px;
		border-color: hsl(216, 90%, 46%, 0.2);
		background: hsl(216, 90%, 46%, 0.05);
	}

	.socials {
		width: 100%;
		max-width: 30rem /* 480px */;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1.5rem /* 24px */;

		& > .card {
			width: 100%;
			max-width: 100%;
			& > .logo {
				height: 100%;
				aspect-ratio: 1;
				display: flex;
				justify-content: center;
				align-items: center;
				background: hsla(0, 0%, 0%, 0.2);
				position: absolute;
				right: 0;
				top: 0;
				bottom: 0;
				z-index: -1;
				mask: radial-gradient(circle at 100% 100%, hsl(0, 0%, 100%) 20%, transparent 70%);
			}

			& > .button {
				margin-top: 1.5rem /* 24px */;
			}
		}

		& > .additional {
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 1.5rem /* 24px */;

			@media (min-width: 480px) {
				flex-direction: row;
			}

			& > .card {
				width: 100%;
				max-width: 100%;

				& > .logo {
					height: 100%;
					aspect-ratio: 1;
					background: hsla(0, 0%, 0%, 0.2);
					position: absolute;
					right: 0;
					top: 0;
					bottom: 0;
					z-index: -1;
					mask: radial-gradient(circle at 100% 100%, hsl(0, 0%, 100%) 20%, transparent 70%);
				}

				& > .button {
					margin-top: 1.5rem /* 24px */;
				}
			}
		}
	}

	.github,
	.threads,
	.read-cv {
		background: hsl(0, 0%, 0%, 0.05);
		border-color: hsl(0, 0%, 0%, 0.2);

		& .button {
			color: hsl(0, 0%, 100%);
			background: hsl(0, 0%, 0%, 0.9);

			&:hover {
				background: hsl(0, 0%, 0%, 0.7);
			}

			&:focus {
				outline-color: hsl(0, 0%, 0%, 0.9);
			}
		}
	}

	.mastodon {
		background: hsl(278, 89%, 47%, 0.05);
		border-color: hsl(278, 89%, 47%, 0.2);

		& .button {
			color: hsl(0, 0%, 100%);
			background: hsl(278, 89%, 47%, 0.9);

			&:hover {
				background: hsl(278, 89%, 47%, 0.7);
			}

			&:focus {
				outline-color: hsl(279, 89%, 47%, 0.9);
			}
		}
	}

	.hashnode {
		background: hsla(231, 90%, 45%, 0.05);
		border-color: hsl(231, 90%, 45%, 0.2);
		& .button {
			color: hsl(0, 0%, 100%);
			background: hsl(231, 90%, 45%, 0.9);

			&:hover {
				background: hsl(231, 90%, 45%, 0.7);
			}

			&:focus {
				outline-color: hsl(231, 90%, 45%, 0.9);
			}
		}
	}

	/*
	.heart {
		width: 100%;
		aspect-ratio: 1;
		border-radius: 8px;
		background: hsl(349, 83%, 51%);
		transform: rotate(-45deg) scale(100%);
		transform-origin: center;
		animation: heartbeat 0.8s linear infinite;

		&::before {
			content: '';
			display: block;
			width: 100%;
			aspect-ratio: 1;
			border-radius: 50%;
			background: inherit;
			transform: translateY(-50%);
			position: absolute;
		}

		&::after {
			content: '';
			display: block;
			width: 100%;
			aspect-ratio: 1;
			border-radius: 50%;
			background: inherit;
			transform: translateX(50%);
			position: absolute;
		}
	}

	@keyframes heartbeat {
		0%,
		100% {
			transform: rotate(-30deg) scale(100%);
		}

		30% {
			transform: rotate(-30deg) scale(90%);
		}

		60% {
			transform: rotate(-30deg) scale(110%);
		}
	}
	*/
</style>
