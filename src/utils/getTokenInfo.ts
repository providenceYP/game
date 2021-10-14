async function getTokenInfo() {
  let tokenData;

  const headers = new Headers();

  headers.append('accept', 'application/json');
  headers.append('Content-Type', 'application/json');

  const body = JSON.stringify({
    code: new URLSearchParams(window.location.search).get('code'),
    redirect_uri: `${process.env.REACT_REDIRECT_URL}`,
  });

  const response = await fetch(
    'https://ya-praktikum.tech/api/v2/oauth/yandex',
    { method: 'POST', headers, body, credentials: 'include' },
  );

  if (response.status === 200) {
    tokenData = await response.json();
  }

  return tokenData;
}

export default getTokenInfo;
