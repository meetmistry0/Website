<script>
    export let title;
    export let created;
    export let read_time;
</script>

<h1>{title}</h1>
<p>{created} &bull; ☕ {read_time} read</p>

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
