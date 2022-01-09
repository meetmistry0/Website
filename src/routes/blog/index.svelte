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
        <a rel="prefetch" href="blog/{post.slug}">
            <h2>
                {post.title}
            </h2>
        </a>
        {post.created}
    {/each}
</main>
