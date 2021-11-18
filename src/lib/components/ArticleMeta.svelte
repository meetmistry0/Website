<script>
	export let date;
	const formattedDate = new Date(date).toDateString();
</script>

<p>
	<span class="date">{formattedDate}</span>
</p>

<style>
	p {
		margin: 0;
		margin-bottom: calc(var(--spacing-unit) * 4);
	}

	.date {
		color: var(--color-secondary);
	}
</style>
