<script>
    import { page } from "$app/stores";
    import ThemeToggle from "$lib/components/ThemeToggle.svelte";
    import Transition from "$lib/components/PageTransition.svelte";
</script>

<nav>
    <a href="/">/home</a>
    <a sveltekit:prefetch href="/blog">/blog</a>
    <a href="/about">/about</a>
    <ThemeToggle />
</nav>

<main>
    <Transition url={$page.url}>
        <slot />
    </Transition>
</main>

<style>
    nav a,
    nav a:visited,
    nav a:active {
        flex-wrap: wrap;
        font-weight: bold;
        font-family: var(--font-mono);
        margin-right: 0.8em;
        color: var(--text-color);
        text-decoration: none;
        box-shadow: 0 2px 0 0 var(--color-accent);
    }

    nav a:hover {
        box-shadow: none;
    }
</style>
