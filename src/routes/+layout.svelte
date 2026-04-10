<script>
	import '../app.css';
	import '@fontsource-variable/google-sans-code';
	import '@fontsource-variable/asap';
	import faviconSvg from '$lib/assets/favicon.svg';
	import faviconPng from '$lib/assets/favicon.png';
	import Header from '$components/header/Header.svelte';
	import Footer from '$components/footer/Footer.svelte';

	/**
	 * @typedef Props
	 * @prop { import('svelte').Snippet } children
	 */

	/** @type { Props } */
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.ico" type="image/x-icon" />
	<link rel="icon" href={faviconPng} type="image/png" />
	<link rel="icon" href={faviconSvg} type="image/svg+xml" />
</svelte:head>

<Header />
{@render children()}
<Footer />
