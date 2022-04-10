<script>
  import BackToTop from "./BackToTop.svelte";
  export let title;
  export let description;
  export let date;
  export let read_time;
</script>

<svelte:head>
  <title>Blog | {title}</title>
  <meta name="description" content={description} />
</svelte:head>

<h1>{title}</h1>
<p class="meta">{date} &bull; ☕ {read_time} min read</p>
<BackToTop />

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

  :global(p > a) {
    color: var(--color-accent);
    text-decoration: underline;
  }

  :global(p > a:hover, p > a:focus, p > a:active) {
    text-decoration: none;
  }
</style>
