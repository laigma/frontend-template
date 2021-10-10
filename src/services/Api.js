import axios from 'axios';
import config from '@/config';

const baseURL = `${config.services.kong}`;

export default (token) => {
	return axios.create({
		baseURL: baseURL,
		headers: {
			'Authorization': 'bearer ' + token,
			'Content-Type': 'application/json',
		}
	})
}