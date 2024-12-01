<script lang="ts">
	import { onMount } from 'svelte';
	import { quadInOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
	import Hero from './Hero.svelte';
	import FeaturedProjects from './FeaturedProjects.svelte';

	let showPage: boolean = $state(false);

	onMount(() => {
		setTimeout(() => {
			showPage = true;
		}, 200);
	});
</script>

<svelte:head>
	<title>Martin Matovu - Welcome to my Home</title>
</svelte:head>
{#if showPage}
	<main
		class="main"
		in:fly={{ duration: 200, easing: quadInOut, x: 0, y: 50, opacity: 0 }}
		out:fade={{ duration: 200, easing: quadInOut }}
	>
		<Hero />
		<FeaturedProjects />
	</main>
{/if}

<style>
	.main {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-inline: 20px;
		padding-block: 120px 40px;
	}
</style>
