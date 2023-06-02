import axios from "axios";

axios.defaults.baseURL = "https://git.heroku.com/capture-api-drf.git";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();

