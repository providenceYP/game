import { baseURL } from './config';
import requests from './requests';
import API from './api';

const apiInstance = new API(baseURL, requests);

export default apiInstance;
