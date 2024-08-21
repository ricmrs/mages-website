import axios from "axios";

export const magesApi = axios.create({
  baseURL: 'https://mages-api.vercel.app/'
});
