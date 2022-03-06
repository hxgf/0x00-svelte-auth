<script>
  import { session } from '$app/stores';
  import { onMount } from 'svelte';
  import dw from '$lib/dw-utils.js';

  let db = false;

    onMount(async () => {
      if ($session.user_id){
        dw.api_fetch({
          url: 'https://api.oceancompaniesok.com/blu/dashboard',
          authenticated: true,
          data: {
            // email,
            // password,
            // current_url: window.location.href.substring(window.location.origin.length),
            // website,
            // ua: navigator.userAgent,
          },
        })
        .then((data) => {
          if (data.success){
            db = data
            // console.log(data);
          }
        });

      }
    });



</script>

<svelte:head>
	<title>{$session.site_title}</title>
</svelte:head>

<main class="flex flex-col items-center justify-center w-screen h-screen">
  <div class="flex flex-col bg-gray-300 rounded shadow-lg pr-12 pl-8 py-8">
    <h1 class="text-4xl font-bold mb-4">blu (w/ sveltekit)</h1>
    <div class="mb-4">development in progress...</div>
    {#if db}
      {#each db.developments as development}
        {development.title}<br />
      {/each}
    <div><br />my email: {db.my_email}</div>
    {/if}
  </div>
</main>