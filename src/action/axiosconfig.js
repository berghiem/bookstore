import axios from "axios";

const baseURL = 'http://localhost:8080/';

const instance = axios.create({
  // .. congigure axios baseURL
  baseURL: `${baseURL}`
});

export default instance;