import axios from 'axios';

const baseURL = `http://localhost:8081`;

export default () => {
	return axios.create({
		baseURL: baseURL,
		headers: {
			'Access-Control-Allow-Origin': '*',
			//'Accept': 'application/json',
			'Content-Type': 'application/json',
		}
	})
}