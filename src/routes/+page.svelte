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
				<p class="p1">Commonly known as a <strong>web developer</strong>.</p>
			</div>
			<div class="profile-image" />
		</div>
		<div class="about">
			<article class="card">
				<p class="p1">
					I love making beautiful websites, learning about the world around us, and doing the most
					amateur photography you've ever seen.
				</p>
				<div class="heart" />
			</article>
			<div class="socials">
				<article class="card github">
					<div class="logo" style="background: hsl(0, 0%, 0%); color: hsl(0, 0%, 100%);">
						<GitHub />
					</div>
					<h5 class="h5">Github</h5>
					<span class="p3">github.com/matovius</span>
					<button class="button">Take a look <span class="arrow">&rarr;</span></button>
				</article>
				<article class="card mastodon">
					<div class="logo" style="background: hsl(278, 89%, 47%); color: hsl(0, 0%, 100%);">
						<Mastodon />
					</div>
					<h5 class="h5">Mastodon</h5>
					<span class="p3">mastodon.social/matovius</span>
					<button class="button">Follow Me <span class="arrow">&rarr;</span></button>
				</article>
				<div class="additional">
					<article class="card threads">
						<div class="logo" style="background: hsl(0, 0%, 0%); color: hsl(0, 0%, 100%);">
							<Threads />
						</div>
						<h5 class="h5">Threads</h5>
						<span class="p3">threads.net/@matovius_</span>
						<button class="button">Follow Me<span class="arrow">&rarr;</span></button>
					</article>
					<article class="card read-cv">
						<div class="logo" style="background: hsl(0, 0%, 100%); color: hsl(0, 0%, 0%);">
							<ReadCv />
						</div>
						<h5 class="h5">Read.cv</h5>
						<span class="p3">read.cv/matovius</span>
						<button class="button">Check it out<span class="arrow">&rarr;</span></button>
					</article>
				</div>
			</div>
		</div>
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
			padding-top: 2.25rem /* 36px */;
			padding-left: 1.5rem /* 24px */;
			padding-right: 1.5rem /* 24px */;

			& > p.p1 {
				padding-top: 2.25rem /* 36px */;
			}
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
			background: hsla(0, 0%, 0%, 0.2);
			mask: linear-gradient(
				0deg,
				transparent,
				hsl(0, 0%, 100%) 6px,
				hsl(0, 0%, 100%) calc(100% - 6px),
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

		& p.p1 {
			max-width: 40ch;
		}
	}

	.card {
		border-color: hsla(0, 0%, 0%, 0.1);
		background: hsla(0, 0%, 100%, 0.2);
		backdrop-filter: blur(4px);
		position: relative;
	}

	.socials {
		width: 100%;
		max-width: 480px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1.5rem /* 24px */;

		& > .card {
			position: relative;
			overflow: hidden;

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
				mask: radial-gradient(circle at 100% 50%, hsl(0, 0%, 100%) 30%, transparent 70%);
			}

			& .button {
				padding-left: 1.5rem /* 24px */;
				padding-right: 1.5rem /* 24px */;
			}
		}

		& > .additional {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 1.5rem /* 24px */;

			@media (min-width: 480px) {
				flex-direction: row;
			}

			& > .card {
				position: relative;
				overflow: hidden;

				& > .logo {
					height: 100%;
					aspect-ratio: 1;
					background: hsla(0, 0%, 0%, 0.2);
					position: absolute;
					right: 0;
					top: 0;
					bottom: 0;
					z-index: -1;
					mask: radial-gradient(circle at 100% 50%, hsl(0, 0%, 100%) 10%, transparent 60%);
				}
			}
		}
	}

	.github,
	.threads,
	.read-cv {
		width: 100%;
		max-width: 100%;

		& .button {
			margin-top: 1.5rem /* 24px */;
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
		width: 100%;
		max-width: 100%;

		& .button {
			margin-top: 1.5rem /* 24px */;
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

	.heart {
		width: 60px;
		aspect-ratio: 1;
		border-radius: 8px;
		background: hsl(349, 83%, 51%);
		filter: blur(12px);
		position: absolute;
		bottom: 10%;
		right: 5%;
		transform: rotate(-30deg) scale(100%);
		/*animation: heartbeat 0.8s linear infinite;*/
		z-index: -1;

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
</style>
