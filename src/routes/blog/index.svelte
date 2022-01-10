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
        <ul>
            <a class="post-title" rel="prefetch" href="blog/{post.slug}">
                <h1>
                    {post.title}
                </h1>
            </a>
            <p class="date">{post.created}</p>
        </ul>
    {/each}
</main>

<style>
    .post-title {
        color: var(--color-accent);
        text-decoration: none;
    }

    .date {
        color: var(--color-secondary);
    }
</style>
