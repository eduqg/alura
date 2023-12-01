import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001'
  // baseURL: 'http://192.168.1.XXX:3001'
});

export default instance;