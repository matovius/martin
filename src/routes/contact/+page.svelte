<script lang="ts">
	import { onMount } from 'svelte';
	import { quadInOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
	import ComingSoon from '$lib/components/ComingSoon.svelte';

	let showPage: boolean = false;

	onMount(() => {
		setTimeout(() => {
			showPage = true;
		}, 200);
	});
</script>

<svelte:head>
	<title>Where to get in touch - Martin Matovu</title>
</svelte:head>

{#if showPage}
	<main
		class="main"
		in:fly={{ duration: 200, easing: quadInOut, x: 0, y: 50, opacity: 0 }}
		out:fade={{ duration: 200, easing: quadInOut }}
	>
		<section id="hero" class="section hero">
			<div class="container">
				<div class="headline">
					<h1 class="h1 heading">If you wish to collaborate</h1>
					<h2 class="h4 subheading">Find me across all my socials</h2>
				</div>

				<div class="socials">
					<h5 class="heading">My socials:</h5>

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
	</main>
{/if}

<style>
	.main {
		width: 100%;
		height: calc(90dvh - 70px);
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
</style>
