<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ fetch }) {
    const response = await fetch("/blog.json");
    const { posts } = await response.json();

    return {
      props: {
        posts,
      },
    };
  }
</script>

<script>
  export let posts;
</script>

<svelte:head>
  <title>Blog | Meet Mistry</title>
  <meta name="description" content="Personal blog" />
</svelte:head>

<main>
  <h1 class="page-title">Posts</h1>

  {#each posts as post}
    <a
      sveltekit:prefetch
      style="text-decoration: none;"
      href="blog/{post.slug}"
    >
      <h1 class="post-title">
        {post.title}
      </h1>
    </a>
    <p class="meta">{post.date} &bull; ☕ {post.read_time} min read</p>
    <p>{post.description}</p>
  {/each}
</main>

<style>
  .post-title {
    color: var(--color-accent);
    margin-bottom: 5px;
  }

  .meta {
    margin: 0;
    color: var(--color-secondary);
    font-weight: bold;
  }
</style>
