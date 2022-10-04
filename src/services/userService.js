import axios from '../axios';
import * as queryString from 'query-string';

const HandleLoginApi = (username, password) => {
	return axios.post('/api/login');
};

export { HandleLoginApi };
