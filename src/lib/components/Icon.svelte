<script>
	/**
	 * @typedef Props
	 * @prop { 'arrow-up-right' | 'link-simple' } name
	 * @prop { number | string | undefined } width
	 * @prop { number | string | undefined } height
	 */

	/**
	 * @type Props
	 */
	let { name, width = 20, height = 20 } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" {width} {height} viewBox="0 0 256 256" aria-hidden="true">
	{#if name === 'arrow-up-right'}
		<path
			d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"
		/>
	{:else if name === 'link-simple'}
		<path
			d="M165.66,90.34a8,8,0,0,1,0,11.32l-64,64a8,8,0,0,1-11.32-11.32l64-64A8,8,0,0,1,165.66,90.34ZM215.6,40.4a56,56,0,0,0-79.2,0L106.34,70.45a8,8,0,0,0,11.32,11.32l30.06-30a40,40,0,0,1,56.57,56.56l-30.07,30.06a8,8,0,0,0,11.31,11.32L215.6,119.6a56,56,0,0,0,0-79.2ZM138.34,174.22l-30.06,30.06a40,40,0,1,1-56.56-56.57l30.05-30.05a8,8,0,0,0-11.32-11.32L40.4,136.4a56,56,0,0,0,79.2,79.2l30.06-30.07a8,8,0,0,0-11.32-11.31Z"
		/>
	{/if}
</svg>

<style>
	svg {
		aspect-ratio: 1;
		display: inline-block;
		fill: currentColor;
	}
</style>
