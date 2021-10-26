<script context="module">
    /**
     * @type {import('@sveltejs/kit').Load}
     */
    export async function load({ fetch }) {
        // Use a `limit` querystring parameter to fetch a limited number of posts
        // e.g. fetch('posts.json?limit=5') for 5 most recent posts
        const posts = await fetch("/blog.json").then((res) => res.json());

        return {
            props: {
                posts,
            },
        };
    }
</script>

<script>
    import DarkMode from "svelte-dark-mode";
    let theme;

    import Article from "$lib/components/Article.svelte";
    import ArticleTitle from "$lib/components/ArticleTitle.svelte";
    import ArticleMeta from "$lib/components/ArticleMeta.svelte";
    import ArticleDescription from "$lib/components/ArticleDescription.svelte";

    export let posts;
</script>

<svelte:head>
    <title>Blog | Meet Mistry</title>
    <meta name="description" content="Personal blog" />
</svelte:head>

<DarkMode bind:theme />

<h1 class="page-title">Writings</h1>

{#each posts as { slug, title, description, date }}
    <Article>
        <ArticleTitle {slug} {title} />
        <ArticleMeta {date} />
        <ArticleDescription {description} {slug} />
    </Article>
{/each}

<style>
    .page-title {
        text-align: center;
    }
</style>
