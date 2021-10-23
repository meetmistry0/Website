<script>
    import { afterUpdate } from "svelte";
    import DarkMode from "svelte-dark-mode";

    let theme;
    $: switchTheme = theme === "dark" ? "light" : "dark";
    afterUpdate(() => {
        document.body.className = theme;
    });
</script>

<DarkMode bind:theme />

<nav>
    <a sveltekit:prefetch class="links" href="/">/home</a>
    <a sveltekit:prefetch class="links" href="/blog">/blog</a>
    <button class="btn-toggle" on:click={() => (theme = switchTheme)}
        >☀️/🌑</button
    >
</nav>

<main>
    <slot />
</main>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Fira+Mono&family=Merriweather&display=swap");

    :root {
        --spacing-1: 0.25rem;
        --spacing-4: 1rem;
        --spacing-6: 1.5rem;
        --spacing-8: 2rem;
        --color-primary: #ff183a;
        --color-heading: #1a202c;
        --color-accent: #d1dce5;
    }

    :global(:root) {
        --spacing-unit: 4px;
        --color-background: #fffbf4;
        --color-text-primary: #000000;
        --color-text-secondary: #838383;
        --font-heading: "Fira Mono", monospace;
        --font-body: "Merriweather", serif;
    }

    :global(.dark) {
        background: #121212;
        color: #ffffff;
        transition: background-color 0.4s;
        --inlineCode-bg: rgba(115, 124, 153, 0.2);
        --inlineCode-text: #e6e6e6;
    }

    :global(.light) {
        transition: background-color 0.4s;
        --inlineCode-bg: rgba(255, 229, 100, 0.2);
        --inlineCode-text: #1a1a1a;
    }

    :global(body) {
        margin: 55px auto;
        padding: 0 28px 0 28px;
        max-width: 64ch;
        font-family: var(--font-body);
        background-color: var(--color-background);
        color: var(--color-text-primary);
        line-height: 1.5;
        font-size: 18px;
    }

    :global(hr) {
        background: var(--color-accent);
        height: 1.5px;
        border: 0;
    }

    /* Heading */
    :global(h1, h2, h3, h4, h5, h6) {
        font-family: var(--font-heading);
        letter-spacing: -0.025em;
        /* color: var(--color-heading-black); */
    }

    :global(h2, h3, h4, h5, h6) {
        font-weight: 700;
        /* color: var(--color-heading); */
    }

    :global(h1 > a) {
        text-decoration: none;
    }

    :global(h2 > a, h3 > a, h4 > a, h5 > a, h6 > a) {
        text-decoration: none;
    }

    /* Prose */
    :global(blockquote) {
        margin-left: calc(-1 * var(--spacing-6));
        margin-right: var(--spacing-8);
        padding: 0 0 0 var(--spacing-6);
        border-left: var(--spacing-1) solid var(--color-primary);
        font-style: italic;
    }

    :global(blockquote > :last-child) {
        margin-bottom: 0;
    }

    :global(blockquote > ul, blockquote > ol) {
        list-style-position: inside;
    }

    :global(table) {
        margin-bottom: var(--spacing-8);
        border-collapse: collapse;
        border-spacing: 0.25rem;
    }

    :global(table thead tr th) {
        border-bottom: 1.5px solid var(--color-accent);
    }

    /* Media queries */
    @media (max-width: 42rem) {
        :global(blockquote) {
            padding: 0 0 0 var(--spacing-4);
            margin-left: 0;
        }

        :global(ul, ol) {
            list-style-position: inside;
        }
    }

    :global(a, a:visited, a:active) {
        text-decoration: none;
        color: var(--primary);
        box-shadow: 0 2px 0 0 #ff183a;
    }

    :global(a:hover) {
        box-shadow: none;
    }

    :global(img) {
        max-width: 100%;
    }

    /* Dark Mode Button */
    .btn-toggle {
        float: right;
        text-decoration: none;
        cursor: pointer;
        font-weight: bold;
        color: #fff;
        background-color: #fa243c;
        padding: 4px 10px;
        border-radius: 5px;
        box-shadow: 0 5px 0 0 #dc001a;
        border: none;
        font-family: inherit;
    }
    .btn-toggle:active {
        transform: translateY(5px);
        box-shadow: none;
    }

    :global(.links) {
        font-weight: bold;
        font-family: var(--font-heading);
    }

    :global(.page-title) {
        text-align: center;
    }

    nav a {
        margin-right: 0.875em;
    }
</style>
