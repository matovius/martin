<script>
	/**
	 * @typedef Props
	 * @prop { 'arrow-up-right' } name
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
	{/if}
</svg>

<style>
	svg {
		aspect-ratio: 1;
		display: inline-block;
		fill: currentColor;
	}
</style>
