<script>
  import "../app.css";
  import Login from '../components/Login.svelte'
  import { session } from '$app/stores'
</script>

{#if $session.error}

  <slot />
  
{:else}

<body class="bg-gray-200 text-gray-700">

  {#if $session.user_id}

  <div class="bg-gray-50 m-2 p-4 text-white-80">
    <a href="/">index</a> &nbsp;&nbsp;
    <a href="/profile-demo">/profile-demo</a> &nbsp;&nbsp;
    <a href="/login">login</a> &nbsp;&nbsp;
    <a href="/logout">logout</a>
  </div>

  <slot />

  {:else}

    <Login />
    
  {/if}

</body>

{/if}

