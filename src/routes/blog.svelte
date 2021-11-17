<script context="module">
    export async function load({ fetch }) {
        const posts = await fetch("/blog.json").then((res) => res.json());

        return {
            props: {
                posts,
            },
        };
    }
</script>

<script>
    import Article from "$lib/components/Article.svelte";
    import ArticleTitle from "$lib/components/ArticleTitle.svelte";
    import ArticleMeta from "$lib/components/ArticleMeta.svelte";
    import ArticleDescription from "$lib/components/ArticleDescription.svelte";
    export let posts;
</script>

<svelte:head>
    <title>blog | meet mistry</title>
    <meta name="description" content="Personal blog" />
</svelte:head>

<main>
    <h1 class="page-title">Posts</h1>

    {#each posts as { slug, title, description, date }}
        <Article>
            <ArticleTitle {slug} {title} />
            <ArticleMeta {date} />
            <ArticleDescription {description} {slug} />
        </Article>
    {/each}
</main>
