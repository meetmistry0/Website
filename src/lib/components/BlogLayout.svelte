<script>
    import PostHeader from "$lib/components/PostHeader.svelte";
    export let title;
    export let created;
</script>

<div class="post">
    <PostHeader {title} {created} />
    <slot />
</div>
