<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
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
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />
{@render children()}
<Footer />
