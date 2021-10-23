<script>
	export let description;
	// export let slug = "";
	// const href = slug && `/posts/${slug}`;
</script>

<p>
	{description}

	<!-- {#if slug}
		<a {href}>&rarr;</a>
	{/if} -->
</p>

<style>
	p {
		margin: 0;
		margin-bottom: calc(var(--spacing-unit) * 8);
	}
</style>
