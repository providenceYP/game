async function getAuthData() {
  const headers = new Headers();
  headers.append('accept', 'application/json');
  // const init = {
  //   method: 'GET',
  //   headers,
  // };
  const response = await fetch('https://ya-praktikum.tech/api/v2/auth/user', {
    method: 'GET',
    headers,
    credentials: 'include',
  });
  const mediaType = response.headers.get('content-type');

  if (mediaType.includes('json')) {
    const authData = await response.json();
    console.log(authData);
  }
}
export default getAuthData;
