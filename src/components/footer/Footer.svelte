<footer>
	<div class="container">
		<div class="side start">
			<small class="copyright-statement">
				<span>Hand-crafted by me</span>
				<span>&centerdot;</span>
				<span title="2025">MMXXV</span>
				<span>&centerdot;</span>
				<span>I implore you to make your own website</span>
			</small>
		</div>
		<!-- <div class="side end"></div> -->
	</div>
</footer>

<style>
	footer {
		padding-inline: 1.875rem /* 30px */;

		& > div.container {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(18.75rem, 1fr)) /* 300px */;
			gap: 1.25rem /* 20px */;
			padding-block: 1.875rem 5.625rem /* 30px 90px */;
			margin-inline: auto;
		}
	}

	.side {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.625rem /* 10px */;

		&.start {
			/* background: red; */
			justify-content: flex-start;
			flex-wrap: wrap;
		}
		/* &.end {
			background: blue;
			justify-content: flex-end;
			flex-wrap: wrap;
		} */
	}

	small.copyright-statement {
		font-weight: 600;
		color: color-mix(in oklab, var(--color-text), transparent 50%);
	}
</style>
