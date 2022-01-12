<script>
    export let title;
    export let description;
    export let created;
    export let read_time;
</script>

<svelte:head>
    <title>Blog | {title}</title>
    <meta name="description" content={description} />
</svelte:head>

<h1>{title}</h1>
<p class="meta">{description}</p>
<p class="meta">{created} &bull; ☕ {read_time} read</p>

<style>
    h1 {
        color: var(--color-accent);
        margin-bottom: 0;
    }

    .meta {
        margin: 0;
        color: var(--color-secondary);
        font-weight: bold;
    }
</style>
