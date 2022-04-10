<script context="module">
  /** @type {import('@sveltejs/kit').ErrorLoad} */
  export function load({ error, status }) {
    return {
      props: {
        errorCode: `${status}`,
        errorMessage: `${error.message}`,
      },
    };
  }
</script>

<script>
  export let errorCode, errorMessage;
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
