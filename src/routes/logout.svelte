<script>
  import { onMount } from 'svelte';
  import { session } from '$app/stores';
  import Cookies from 'js-cookie';
  onMount(async () => {
    $session.user_id = null;
    Cookies.remove('auth_token');
    window.location.href = '/';
  })
</script>