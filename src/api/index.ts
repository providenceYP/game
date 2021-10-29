import requests from './requests';
import API from './api';

const apiInstance = new API(process.env.BASE_API_URL, requests);

export default apiInstance;
