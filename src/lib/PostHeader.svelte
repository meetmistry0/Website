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
    border-bottom: 0.05em solid var(--color-accent);
    box-shadow: inset 0 -0.05em 0 var(--color-accent);
    color: inherit;
    transition: background-color 0.25s cubic-bezier(0.33, 0.66, 0.66, 1);
    text-decoration: none;
  }

  :global(p > a:hover, p > a:focus, p > a:active) {
    background-color: var(--color-accent);
  }
</style>
