<script>
    import PostHeader from "$lib/components/PostHeader.svelte";
    export let title;
    export let description;
    export let created;
    export let read_time;
</script>

<main>
    <PostHeader {title} {description} {created} {read_time} />
    <slot />
</main>
