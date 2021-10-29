import { History } from 'history';

async function getTokenInfo(history: History) {
  const query = new URLSearchParams(window.location.search);
  const code = query.get('code');

  if (code) {
    const headers = new Headers();

    headers.append('accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    const body = JSON.stringify({
      code,
      redirect_uri: `${process.env.REDIRECT_URL}`,
    });

    const response = await fetch(`${process.env.BASE_API_URL}oauth/yandex`, {
      method: 'POST',
      headers,
      body,
      credentials: 'include',
    });
    if (response.status === 200) {
      query.delete('code');

      history.replace({ ...history.location, search: query.toString() });
    }

    return response.ok;
  }

  return false;
}

export default getTokenInfo;
