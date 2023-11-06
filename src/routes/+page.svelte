<script lang="ts">
	import profileImage from '$lib/assets/profile-photo.png';
	import tildeLogo from '$lib/assets/Tilde-Logo.png';
	import theWebwareWorkshop from '$lib/assets/TheWebwareWorkshopLogo.png';
	import { ArrowUpRight, Codepen, Dribbble, Github, Instagram, Linkedin } from 'lucide-svelte';

	const date: Date = new Date();
	let CurrentDate = date.getFullYear();
</script>

<svelte:head>
	<title>Martin Matovu: Web Designer & Developer</title>
</svelte:head>

<div class="w-full max-w-full flex flex-col">
	<main class="w-full h-full flex flex-col justify-center items-center">
		<section
			class="w-full max-w-[40rem] flex flex-col justify-center items-center gap-12 px-3 tablet:px-6 pt-[60px] pb-6"
		>
			<div
				id="hero-lead"
				class="w-full flex flex-col-reverse tablet:flex-row justify-center items-center gap-12"
			>
				<div id="hero-text" class="flex flex-col justify-center items-start gap-6">
					<div id="headline" class="">
						<span class="p">Hi, my name is</span>
						<h1 class="h1 text-tang-blue">Martin Matovu</h1>
					</div>
					<div class="flex flex-row justify-start items-start gap-6 flex-wrap">
						<span class="small">Pixel Pusher</span>
						<span class="small">Browser Charmer</span>
						<span class="small">API Whisperer</span>
					</div>
					<span class="p">More commonly known as a <strong>web developer</strong></span>
				</div>
				<div class="w-52 h-52 aspect-square">
					<img
						src={profileImage}
						alt="Me looking sternly into the camera"
						style="width: 100%; height: 100%;"
					/>
				</div>
			</div>
			<div id="hero-trail" class="w-full flex-col justify-start items-center">
				<div class="w-full flex flex-row justify-center items-center gap-2 flex-wrap">
					<a
						href="https://github.com/matovius"
						target="_blank"
						rel="noopener noreferrer"
						class="button"
					>
						<Github />
						<span>GitHub</span>
					</a>

					<a
						href="https://dribbble.com/matovius"
						target="_blank"
						rel="noopener noreferrer"
						class="button"
					>
						<Dribbble />
						<span>Dribbble</span>
					</a>

					<a
						href="https://instagram.com/matovius_"
						target="_blank"
						rel="noopener noreferrer"
						class="button"
					>
						<Instagram />
						<span>Instagram</span>
					</a>

					<a
						href="https://linkedin.com/in/martin-matovu/"
						target="_blank"
						rel="noopener noreferrer"
						class="button"
					>
						<Linkedin />
						<span>LinkedIn</span>
					</a>

					<div class="w-fit hidden">
						<a href="https://codepen.io/" target="_blank" rel="noopener noreferrer" class="button">
							<Codepen />
							<span>Codepen</span>
						</a>
					</div>
				</div>
			</div>
		</section>
		<section
			class="w-full max-w-[40rem] flex justify-center items-start px-3 tablet:px-6 pt-12 pb-12"
		>
			<div id="about-me-text" class="w-full flex flex-col justify-start items-start gap-6">
				<p class="p">
					I love making beautiful websites, learning about the world around us, and doing the most
					amateur photography you'll ever see.
				</p>
				<p class="p">
					I currently work at The Webware Workshop as a web designer/developer combo. I've worked on
					quite a few things you can check out on my GitHub, Dribbble, and across my other social
					media profiles. All the links are provided up at the top.
				</p>
			</div>
		</section>
		<section
			class="w-full max-w-[40rem] flex flex-col justify-start items-center gap-6 px-3 tablet:px-6 pb-12 tablet:pb-24"
		>
			<div
				class="card w-full rounded-3xl p-6 flex flex-col tablet:flex-row justify-between items-center gap-6"
			>
				<div
					class="w-full tablet:w-fit flex flex-row justify-center tablet:justify-start items-center gap-6"
				>
					<div class="w-12 h-12 aspect-square">
						<img src={theWebwareWorkshop} alt="The Webware Workshop's Logo" class="icon" />
					</div>
					<h2 class="h5">The Webware Workshop</h2>
				</div>
				<div class="w-full tablet:w-fit">
					<a
						href="https://the-www.pages.dev/"
						target="_blank"
						rel="noopener noreferrer"
						class="button w-full tablet:w-fit"
					>
						<span>Check it out</span>
						<ArrowUpRight />
					</a>
				</div>
			</div>
		</section>
	</main>
	<footer class="w-full flex justify-center items-center px-3 tablet:px-6 py-6">
		<div id="footer-text" class="w-full max-w-[53.75rem] flex flex-row justify-center item-center">
			<small class="small">© Copyright 2023 · Martin Matovu</small>
		</div>
		<div />
	</footer>
</div>
