<script lang="ts">
	const date: Date = new Date();
	let CurrentDate = date.getFullYear();
</script>

<footer class="footer">
	<div class="container">
		<small class="small">Copyright {CurrentDate} · Martin Matovu</small>
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
			max-width: 40rem; /* 640px */
			padding: 24px;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;

			& > .small {
				color: hsl(0, 0%, 100%, 0.4);
			}
		}
	}
</style>
