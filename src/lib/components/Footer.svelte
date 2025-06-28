<script lang="ts">
</script>

<footer class="footer">
	<div class="container">
		<small class="copyright-statement">2025 <span>&centerdot;</span> Martin Matovu</small>
	</div>
</footer>

<style>
	.footer {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		& > .container {
			width: 100%;
			padding: 1.875rem /* 30px */;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;

			& > small.copyright-statement {
				color: color-mix(in oklab, var(--color-text), transparent 50%);
			}
		}
	}
</style>
