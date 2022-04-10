<script>
  import PostHeader from "$lib/PostHeader.svelte";
  export let title;
  export let description;
  export let date;
  export let read_time;
</script>

<main>
  <PostHeader {title} {description} {date} {read_time} />
  <slot />
</main>
