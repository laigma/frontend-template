import ApiProd from '../Api';
import ApiDev from './Api';

let Api = ApiProd;
let path = ''

if (process.env.NODE_ENV == 'development') {
  Api = ApiDev;
} else {
  Api = ApiProd;
  path = '/backend_kong_route'
}

export default {
  get() {
    let contentType = 'application/json';
    return Api(contentType).get(`${path}/get_route`).then(response => { return response.data; });
  },
  post(item) {
    let contentType = 'application/json';
    let request = `{
      "clave1": "${item.valor1}",
      "clave2": "${item.valor2}"
      }`
    return Api(contentType).post(`${path}/post_route`, request).then(response => { return response.data; });
  },
  put(item) {
    let contentType = 'application/json';
    let request = `{
      "clave1": "${item.valor1}",
      "clave2": "${item.valor2}"
      }`
    return Api(contentType).put(`${path}/put_route`, request).then(response => { return response.data; });
  },
  delete(id) {
    let contentType = 'application/json';
    return Api(contentType).delete(`${path}/delete_route?id=${id}`).then(response => { return response.data; });
  }
};