async function getServiceId() {
  const response = await fetch(
    `https://ya-praktikum.tech/api/v2/oauth/yandex/service-id/?redirect_uri=${process.env.REACT_REDIRECT_URL}`,
    { method: 'GET', credentials: 'include' },
  );

  const mediaType = response.headers.get('content-type');

  if (mediaType.includes('json')) {
    const serviceId = await response.json();
    window.location.href = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${serviceId.service_id}&redirect_uri=${process.env.REACT_REDIRECT_URL}`;
  }
}
export default getServiceId;
