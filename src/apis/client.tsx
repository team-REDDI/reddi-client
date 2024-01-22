import axios from "axios";

const client = axios.create({
  baseURL: process.env.REACT_APP_DB_HOST,
  withCredentials: true,
});

export default client;
