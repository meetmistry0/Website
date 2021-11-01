<script context="module">
    export const prerender = true;

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
    import BackToTop from "$lib/components/BackToTop.svelte";
    import SyntaxHighlighting from "$lib/components/SyntaxHighlighting.svelte";

    export let post;
</script>

<PageHead title={post.title} description={post.description} />
<ArticleTitle title={post.title} />
<ArticleMeta date={post.date} />

<slot />

<BackToTop />

<style>
    :global(code) {
        border-radius: 0.35em;
        padding: 0.15em 0.2em 0.05em;
        background: var(--inlineCode-bg);
        color: var(--inlineCode-text);
    }

    :global(pre) {
        border-radius: 0.45em;
    }
</style>
