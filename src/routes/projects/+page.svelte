<script lang="ts">
	import { onMount } from 'svelte';
	import ComingSoon from '$lib/components/ComingSoon.svelte';

	let showPage: boolean = false;

	onMount(() => {
		setTimeout(() => {
			showPage = true;
		}, 200);
	});
</script>

<svelte:head>
	<title>My Projects - Martin Matovu</title>
</svelte:head>

{#if showPage}
	<ComingSoon />
{/if}
