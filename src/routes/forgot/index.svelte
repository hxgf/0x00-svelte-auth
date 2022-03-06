<script>
  import Cookies from 'js-cookie';
  import dw from '$lib/dw-utils.js';
  import { goto } from '$app/navigation';
  import { session } from '$app/stores';

  let email, password, error, website = ''
  
  async function forgot() {

    error = false;

    try {
      alert('ok do it');
      // dw.api_fetch({
      //   url: 'https://api.oceancompaniesok.com/auth/login',
      //   data: {
      //     email,
      //     password,
      //     current_url: window.location.href.substring(window.location.origin.length),
      //     website,
      //     ua: navigator.userAgent,
      //   },
      // })
      // .then((data) => {
      //   if (data.success){
      //   // fixit remove "working" state?
      //   // fixit do the right thing here (set cookie + session vars + redirect)
      //       // set session vars (logged in) ... nothing else needed right?
      //     if (data.auth_token){
      //       // fixit sameSite (explicitly set none?)
      //       // fixit path = '/'
      //       Cookies.set('auth_token', data.auth_token, { expires: 365 });
      //       $session.user_id = data.user_id;
      //     }
      //     if (data.redirect){
      //       // need to actually reload the page (for now) ¯\_(ツ)_/¯
      //       goto(data.redirect);
      //       // window.location.href = data.redirect;
      //     }
      //   } else {
      //     // fixit remove "working" state
      //     if (data.error){
      //       error = data.error.message;
      //     }
      //   }
      // });

    } catch(err) {
      console.log(err);
      error = 'Error processing request. See console for more information.';
    }
    
  }
</script>

<svelte:head>
	<title>Forgot Password - {$session.site_title}</title>
</svelte:head>

<main class="flex flex-col items-center justify-center w-screen h-screen">

	<div class="flex flex-col bg-white rounded shadow-lg pr-12 pl-8 py-8">
    <form class="flex items-center" on:submit|preventDefault={forgot}>
      <div>
        <label class="font-semibold text-xs" for="usernameField">Email</label>
        <input class="flex items-center h-12 px-4 w-72 bg-gray-200 mt-1 mb-3 rounded focus:outline-none focus:ring-2" type="email" bind:value={email}>
        <div class="hidden">
          <label class="font-semibold text-xs" for="websiteField">Website</label>
          <input class="flex items-center h-12 px-4 w-72 bg-gray-200 mt-1 rounded focus:outline-none focus:ring-2" type="website" bind:value={website}>
        </div>
        <button class="flex items-center justify-center h-12 px-6 w-72 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">Reset PW</button>
      </div>
    </form>
	</div>

  {#if error}<div class="text-red-600 pt-8">{error}</div>{/if}

  </main>