import axios from 'axios';

const http = axios.create({
  baseURL: 'https://randomuser.me/',
});

export default http;
