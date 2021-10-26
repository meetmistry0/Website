<script>
    import DarkMode from "svelte-dark-mode";
    let theme;
</script>

<svelte:head>
    <title>About | Meet Mistry</title>
    <meta name="description" content="About Me" />
</svelte:head>

<DarkMode bind:theme />

<h1 class="page-title">About Me</h1>

<img src="/profile.jpg" alt="profile-pic" />

<style>
    img {
        display: block;
        margin: 0 auto;
        width: 165px;
        height: 165px;
        border-radius: 50%;
    }
</style>
