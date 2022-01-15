<script>
    import ThemeToggle from "$lib/components/ThemeToggle.svelte";
</script>

<nav>
    <a href="/">/home</a>
    <a href="/blog">/blog</a>
    <a href="/about">/about</a>
    <ThemeToggle />
</nav>

<main>
    <slot />
</main>

<style>
    nav a,
    a:visited,
    a:active {
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
