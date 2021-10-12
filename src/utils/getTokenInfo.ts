async function getTokenInfo() {
  const urlParams = new URLSearchParams(window.location.search);

  const queryCode = urlParams.get('code');

  let tokenData;

  const headers = new Headers();

  headers.append('accept', 'application/json');
  headers.append('Content-Type', 'application/json');

  const body = JSON.stringify({
    code: queryCode,
    redirect_uri: `${process.env.REACT_REDIRECT_URL}`,
  });

  const response = await fetch(
    'https://ya-praktikum.tech/api/v2/oauth/yandex',
    { method: 'POST', headers, body, credentials: 'include' },
  );

  const mediaType = response.headers.get('content-type');

  if (mediaType.includes('json')) {
    tokenData = await response.json();
  }

  return tokenData;
}

export default getTokenInfo;
