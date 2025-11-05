<script>
	/**
	 * @typedef Props
	 * @prop {import('svelte').Snippet} children
	 */

	/**
	 * @type Props
	 */
	let { children } = $props();
</script>

<blockquote>
	{@render children()}
</blockquote>

<style></style>
