<script lang="ts">
	import GitHub from '$lib/components/icons/GitHub.svelte';
	import Hashnode from '$lib/components/icons/Hashnode.svelte';
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
					<br /><br />
					<i class="p2">Side Note: The cards below are clickable links.</i>
				</p>
			</article>
			<div class="socials">
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
		/*max-width: 30rem /* 480px */
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 36px;
		border-color: hsl(216, 90%, 46%, 0.2);
		background: hsl(216, 90%, 46%, 0.05);
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
