<script lang="ts">
	import { onMount } from 'svelte';
	import ComingSoon from '$lib/components/ComingSoon.svelte';

	let showPage: boolean = $state(false);

	onMount(() => {
		setTimeout(() => {
			showPage = true;
		}, 200);
	});
</script>

<svelte:head>
	<title>Blog - Martin Matovu</title>
</svelte:head>

<main>
	<ComingSoon />
</main>

<style>
	main {
		--_pblock: 2.5rem /* 40px */;
		--_pblock-start: var(--_pblock);
		width: 100%;
		min-height: 90svh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-inline: 1.25rem /* 20px */;
		padding-block: var(--_pblock);
		padding-block-start: calc(var(--header-height) + var(--_pblock-start)) /* 40px */;
	}
</style>
