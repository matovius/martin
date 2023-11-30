<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/rubik';

	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<div id="root" class="root">
	<Header />
	<slot />
	<Footer />
</div>

<style>
	.root {
		isolation: isolate;
		position: relative;
		min-height: 100dvh;
	}
</style>
