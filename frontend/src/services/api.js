import axios from 'axios';

const api = axios.create({
	baseURL: 'https://localhost:44387/api',
});

export default api;
