<script context="module">
	export function load({ error, status }) {
		return {
			props: { error, status }
		};
	}
</script>

<script>
	import { dev } from '$app/env';
	export let error, status;
</script>

<svelte:head>
	<title>Error: {status} - {error.message}</title>
</svelte:head>

<body class="bg-gray-100 text-gray-500">
  <main class="p-10">
    <div class="font-semibold text-6xl mb-4">Error: {status}</div>
    <div class="pl-1">
      <p class="text-2xl mb-5">{error.message}</p>
      {#if dev && error.stack}
        <pre class="text-xs opacity-70">{error.stack}</pre>
      {/if}
    </div>
  </main>
</body>