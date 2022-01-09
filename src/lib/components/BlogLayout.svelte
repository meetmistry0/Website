<script>
    import PostHeader from "$lib/components/PostHeader.svelte";
    export let title;
    export let created;
</script>

<main>
    <PostHeader {title} {created} />
    <slot />
</main>
