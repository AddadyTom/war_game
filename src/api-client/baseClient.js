import axios from 'axios';
import https from 'https';

const BASE_URI = 'http://192.168.27.157:8000/'; //TODO: config?

const client = axios.create({
 baseURL: BASE_URI,
 timeout: 60000, //optional
 httpsAgent: new https.Agent({ keepAlive: true }),
 json: true
});

class BaseClient {

  create(resource,body) {
    return this.perform('post', resource, body);
  }

  async get(resource) {
    return await this.perform('get', resource);
  }

  getByBody(resource,body) {
    return this.perform('get', resource, body);
  }

  async perform (method, resource, data) {
    return client({
      method,
      url: resource,
      data: data,
    }).then(resp => {
      return resp.data ? resp.data : [];
    })
  }
}

export default BaseClient;