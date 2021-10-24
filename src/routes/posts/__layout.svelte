<script context="module">
    /**
     * @type {import('@sveltejs/kit').Load}
     */
    export async function load({ page, fetch }) {
        const post = await fetch(`${page.path}.json`).then((res) => res.json());

        if (!post || !post.published) {
            return {
                status: 404,
                error: new Error("Post could not be found"),
            };
        }

        return {
            props: {
                post,
            },
        };
    }
</script>

<script>
    import PageHead from "$lib/components/PageHead.svelte";
    import ArticleTitle from "$lib/components/ArticleTitle.svelte";
    import ArticleMeta from "$lib/components/ArticleMeta.svelte";

    export let post;
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/themes/prism-tomorrow.min.css"
        integrity="sha512-vswe+cgvic/XBoF1OcM/TeJ2FW0OofqAVdCZiEYkd6dwGXthvkSFWOoGGJgS2CW70VK5dQM5Oh+7ne47s74VTg=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
    />
</svelte:head>

<PageHead title={post.title} description={post.description} />

<ArticleTitle title={post.title} />
<ArticleMeta date={post.date} />

<slot />

<style>
    :global(pre) {
        overflow: auto;
        border-radius: 0.45em;
        padding: 0.84em;
    }

    :global(code) {
        border-radius: 0.3em;
        background: var(--inlineCode-bg);
        color: var(--inlineCode-text);
        padding: 0.15em 0.2em 0.05em;
        white-space: normal;
    }
</style>
