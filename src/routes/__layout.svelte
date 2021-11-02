<script>
    import { onMount } from "svelte";

    onMount(() => {
        const toggleSwitch = document.querySelector(
            '.theme-switch input[type="checkbox"]'
        );
        const currentTheme = localStorage.getItem("theme");

        if (currentTheme) {
            document.documentElement.setAttribute("data-theme", currentTheme);

            if (currentTheme === "dark") {
                toggleSwitch.checked = true;
            }
        }

        function switchTheme(e) {
            if (e.target.checked) {
                document.documentElement.setAttribute("data-theme", "dark");
                localStorage.setItem("theme", "dark");
            } else {
                document.documentElement.setAttribute("data-theme", "light");
                localStorage.setItem("theme", "light");
            }
        }

        toggleSwitch.addEventListener("change", switchTheme, false);
    });
</script>

<nav>
    <a class="links" href="/">/home</a>
    <a sveltekit:prefetch class="links" href="/blog">/blog</a>
    <label class="theme-switch" for="checkbox">
        <input type="checkbox" id="checkbox" />
        <div class="slider round" />
    </label>
</nav>

<main>
    <slot />
</main>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Fira+Mono&family=Poppins&display=swap");

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

        /* ----------------- */

        --bg: #fffbf4;
        --text-color: #000000;
        --inlineCode-bg: rgba(255, 229, 100, 0.2);
        --inlineCode-text: #1a1a1a;
    }

    :global([data-theme="dark"]) {
        --bg: #121212;
        --text-color: #ffffff;
        --inlineCode-bg: #282c34;
        --inlineCode-text: #e6e6e6;
        /* transition: var(--bg) 0.4s; */
    }

    :global(body) {
        margin: 0 auto;
        padding: 55px 28px 55px 28px;
        max-width: 40em; /* approx 64ch */
        font-family: var(--font-body);
        background-color: var(--bg);
        color: var(--text-color);
        font-size: 18px;
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
        box-shadow: none;
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
        text-decoration: none;
        box-shadow: 0 2px 0 0 var(--color-accent);
    }

    :global(a:hover, a:focus) {
        box-shadow: none;
    }

    :global(img) {
        max-width: 100%;
    }

    :global(.links) {
        font-weight: bold;
        font-family: var(--font-heading);
    }

    :global(.page-title) {
        text-align: center;
    }

    nav a {
        margin-right: 0.8em;
    }

    .theme-switch {
        float: right;
        height: 26px;
        position: relative;
        width: 50px;
    }
    .theme-switch input {
        display: none;
    }
    .slider {
        background-color: #ccc;
        bottom: 0;
        cursor: pointer;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transition: 0.35s;
    }
    .slider:before {
        background-color: #fff;
        bottom: 3px;
        content: "";
        height: 20px;
        left: 3px;
        position: absolute;
        transition: 0.35s;
        width: 20px;
    }
    input:checked + .slider {
        background-color: olive;
    }
    input:checked + .slider:before {
        transform: translateX(24px);
    }
    .slider.round {
        border-radius: 34px;
    }
    .slider.round:before {
        border-radius: 50%;
    }
</style>
