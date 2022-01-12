<script context="module" lang="ts">
    /**
     * @type {import('@sveltejs/kit').Load}
     */
    export async function load({ url, fetch }) {
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
        <a class="post-title" rel="prefetch" href="blog/{post.slug}">
            <h1>
                {post.title}
            </h1>
        </a>
        <p class="meta">{post.created} &bull; ☕ {post.read_time} read</p>
        <p>{post.description}</p>
    {/each}
</main>

<style>
    .post-title {
        color: var(--color-accent);
        text-decoration: none;
        margin-bottom: 0;
    }

    .meta {
        margin: 0;
        color: var(--color-secondary);
        font-weight: bold;
    }
</style>
