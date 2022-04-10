<script>
  export let showOnPx = 250;
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

<button id="back-to-top" on:click={goTop} class:hidden>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    width="26"
    height="26"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 -0.5 16 14"
    ><path
      fill="currentColor"
      fill-rule="evenodd"
      d="M3.22 9.78a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1-1.06 1.06L8 6.06L4.28 9.78a.75.75 0 0 1-1.06 0z"
    /></svg
  >
</button>

<style>
  #back-to-top {
    color: var(--text-color);
    position: fixed;
    right: 1.4em;
    bottom: 1.4em;
    height: 2.3em;
    width: 2.3em;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
    border: 2px solid var(--color-accent);
    background-color: var(--bg-color);
    transition: ease-in 0.4s;
  }

  #back-to-top.hidden {
    opacity: 0;
    visibility: hidden;
    transition: ease-out 0.4s;
  }
</style>
