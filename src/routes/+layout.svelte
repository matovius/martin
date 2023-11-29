<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/rubik';

	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '@fontsource-variable/inter';
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
		background-color: hsl(0, 0%, 100%);
		color: hsl(0, 0%, 0%, 0.8);
	}
</style>
