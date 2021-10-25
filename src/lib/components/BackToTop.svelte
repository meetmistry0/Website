<script>
    export let showOnPx = 275;
    let hidden = true;

    function goTop() {
        document.body.scrollIntoView({ behavior: "smooth" });
    }

    function scrollContainer() {
        return document.documentElement || document.body;
    }

    function handleOnScroll() {
        if (!scrollContainer()) {
            return;
        }

        if (scrollContainer().scrollTop > showOnPx) {
            hidden = false;
        } else {
            hidden = true;
        }
    }
</script>

<svelte:window on:scroll={handleOnScroll} />

<div class="back-to-top" on:click={goTop} class:hidden>Back to top</div>

<style>
    .back-to-top {
        text-align: center;
        color: var(--text-color);
        background: transparent;
        cursor: pointer;
        position: fixed;
        bottom: 30px;
        right: 30px;
        border: 2px solid var(--color-accent);
        border-radius: 6px;
        padding: 4px 12px;
    }

    .back-to-top.hidden {
        opacity: 0;
        visibility: hidden;
    }
</style>
