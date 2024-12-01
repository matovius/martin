<script lang="ts">
	import '@fontsource/passion-one/400.css';
	import '@fontsource/passion-one/700.css';
	import '@fontsource-variable/inter';
	import '../app.css';

	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	
	interface Props {
		children: any;
	}

	let { children }: Props = $props();
</script>

<div id="root" class="root">
	<Header />

	{@render children()}

	<Footer />
</div>

<style>
	.root {
		isolation: isolate;
	}
</style>
