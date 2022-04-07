<script lang="ts">
    import { fly } from "svelte/transition";
    export let url: URL;
</script>

{#key url}
    <div in:fly={{ y: -10, duration: 300 }}>
        <slot />
    </div>
{/key}
