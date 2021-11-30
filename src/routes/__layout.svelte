<script>
    import ThemeToggle from "$lib/components/ThemeToggle.svelte";
</script>

<nav>
    <a class="links" href="/">/home</a>
    <a sveltekit:prefetch class="links" href="/blog">/blog</a>
    <ThemeToggle />
</nav>

<main>
    <slot />
</main>

<style>
    @font-face {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        src: local(""),
            url("/fonts/poppins-v15-latin-regular.woff2") format("woff2"),
            url("/fonts/poppins-v15-latin-regular.woff") format("woff");
        font-display: swap;
    }

    @font-face {
        font-family: "Fira Mono";
        font-style: normal;
        font-weight: 400;
        src: local(""),
            url("/fonts/fira-mono-v9-latin-regular.woff2") format("woff2"),
            url("/fonts/fira-mono-v9-latin-regular.woff") format("woff");
        font-display: swap;
    }

    :root {
        --spacing-1: 0.25rem;
        --spacing-4: 1rem;
        --spacing-6: 1.5rem;
        --spacing-8: 2rem;
        --spacing-unit: 4px;
        --color-accent: #ff183a;
        --color-secondary: #838383;
        --color-tertiary: #d1dce5;
        --font-heading: "Fira Mono", monospace;
        --font-body: "Poppins", sans-serif;
        --bg: #fffbf4;
        --text-color: #000000;
        /* --inlineCode-bg: rgba(255, 229, 100, 0.2);
        --inlineCode-text: #1a1a1a; */
        --inlineCode-bg: #1d2021;
        --inlineCode-text: #ebdbb2;
    }

    :global([data-theme="dark"]) {
        --bg: #121212;
        --text-color: #ffffff;
        --inlineCode-bg: #1d2021;
        --inlineCode-text: #ebdbb2;
    }

    :global(body) {
        margin: 0 auto;
        padding: 55px 28px 55px 28px;
        max-width: 40em; /* approx 64ch */
        font-family: var(--font-body);
        background-color: var(--bg);
        color: var(--text-color);
        font-size: 18px;
        transition: 0.4s;
    }

    :global(hr) {
        background: var(--color-tertiary);
        height: 1.5px;
        border: 0;
    }

    :global(h1, h2, h3, h4, h5, h6) {
        font-family: var(--font-heading);
        letter-spacing: -0.03em;
    }

    :global(h1 > a, h2 > a, h3 > a, h4 > a, h5 > a, h6 > a) {
        color: var(--color-accent);
        text-decoration: none;
    }

    :global(h1 > a:visited, h2 > a:visited, h3 > a:visited, h4 > a:visited, h5
            > a:visited, h6 > a:visited) {
        color: var(--color-accent);
        text-decoration: none;
    }

    :global(h1 > a:hover, h2 > a:hover, h3 > a:hover, h4 > a:hover, h5
            > a:hover, h6 > a:hover) {
        color: var(--color-accent);
        text-decoration: underline;
    }

    :global(blockquote) {
        margin-left: calc(-1 * var(--spacing-6));
        margin-right: 2rem;
        padding: 0 0 0 var(--spacing-6);
        border-left: var(--spacing-1) solid var(--color-accent);
        font-style: italic;
        color: var(--color-secondary);
    }

    :global(blockquote > :last-child) {
        margin-bottom: 0;
    }

    :global(blockquote > ul, blockquote > ol) {
        list-style-position: inside;
    }

    :global(table) {
        margin-bottom: 2rem;
        border-collapse: collapse;
        border-spacing: 0.25rem;
    }

    :global(table thead tr th) {
        border-bottom: 1.5px solid var(--color-tertiary);
    }

    @media (max-width: 40rem) {
        :global(blockquote) {
            padding: 0 0 0 var(--spacing-4);
            margin-left: 0;
        }

        :global(ul, ol) {
            list-style-position: inside;
        }
    }

    :global(a, a:visited, a:active) {
        color: var(--text-color);
        text-decoration: underline;
    }

    :global(a:hover, a:focus) {
        text-decoration: none;
    }

    :global(img) {
        max-width: 100%;
        border-radius: 0.3em;
    }

    :global(.links) {
        font-weight: bold;
        font-family: var(--font-heading);
    }

    :global(.page-title) {
        text-align: center;
    }

    nav a,
    a:visited,
    a:active {
        margin-right: 0.8em;
        color: var(--text-color);
        text-decoration: none;
        box-shadow: 0 2px 0 0 var(--color-accent);
    }

    nav a:hover,
    a:focus {
        box-shadow: none;
    }
</style>
