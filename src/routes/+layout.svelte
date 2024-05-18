<script lang="ts">
	import '@fontsource/passion-one/400.css';
	import '@fontsource/passion-one/700.css';
	import '@fontsource-variable/inter';
	import '../app.css';

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
		width: 100dvw;
	}
</style>
