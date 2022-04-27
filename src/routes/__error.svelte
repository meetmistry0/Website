<script context="module" lang="ts">
  /** @type {import('@sveltejs/kit').ErrorLoad} */

  interface ErrorMessage {
    message?: string;
  }

  export function load({
    error,
    status,
  }: {
    error: ErrorMessage;
    status: string;
  }) {
    return {
      props: {
        errorCode: `${status}`,
        errorMessage: `${error.message}`,
      },
    };
  }
</script>

<script lang="ts">
  export let errorCode: number, errorMessage: string;
</script>

<main>
  <h1 class="errorCode">{errorCode}</h1>
  <h1 class="errorMessage">{errorMessage}</h1>
</main>

<style>
  h1 {
    display: flex;
    justify-content: center;
  }

  .errorCode {
    font-size: 5rem;
  }

  .errorMessage {
    font-size: 1.5rem;
  }
</style>
