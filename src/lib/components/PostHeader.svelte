<script>
    export let title;
    export let created;
</script>

<h1>{title}</h1>
<p>{created}</p>

<style>
    h1 {
        color: var(--color-accent);
        margin-bottom: 0;
    }

    p {
        margin-top: 0;
        color: var(--color-secondary);
        font-weight: bold;
    }
</style>
