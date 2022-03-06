<script context="module">
  // export async function load({session}){
  //   if (!session.authenticated){
  //     return {
  //       status: 302,
  //       redirect: '/'
  //     }
  //   }
  //   return {
  //     props: {
  //       email: session.email
  //     }
  //   }
  // }
  import Login from '../components/Login.svelte'
</script>

<script>
  import { session } from '$app/stores'
  // import Cookies from 'js-cookie'
  import { onMount } from 'svelte';

  // let cookiev = Cookies.get('auth_token');

  export let email = 'jonathan@jonahan.com'
  let name = 'ty byaga'

  // onMount(async () => {
  //   const res = await fetch('/user')
  //   const user = await res.json()
  //   name = user.name
  // })

</script>

<svelte:head>
	<title>Profile - {$session.site_title}</title>
</svelte:head>

<div class="p-10">
  {#if $session.user_id}
  <div class="bg-black text-white">{$session.user_id}</div>
  {/if}
  <!-- <Login /> -->
  pfp<br />
  hello {name} your email is {email}
</div>