import dw from '$lib/dw-utils.js'

export async function handle({ event, resolve }) {
  event.locals.error = false;
  if (event.request.headers.get('cookie')){
    const cookies = dw.cookie_parse(event.request.headers.get('cookie'));
    if (cookies.auth_token) {
      if (Buffer.from(cookies.auth_token, 'base64').toString('utf-8')) {
        const token = dw.jwt_parse(cookies.auth_token);
        event.locals.user_id = token.user_id;
      }
    }
  }
  let response = await resolve(event);
  if (response.status != 200) {
    event.locals.error = true;
    response = await resolve(event);
  }
  return response;
}

export function getSession({ locals }) {
  return {
    site_title: 'Blu by Ocean Development',
    user_id: locals.user_id,
    error: locals.error
  };
}

