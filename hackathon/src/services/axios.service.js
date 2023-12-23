import axios from "axios";
import { toast } from "react-toastify";
import configApi from "../config/api.json";

const http = axios.create({
  baseURL: configApi.url,
});

http.interceptors.response.use(
  function (response) {
    toast.success(response.data.detail);
    return response;
  },
  function (error) {
    const errorText = error.response.data.detail;
    toast.error(errorText);
    return Promise.reject(error);
  },
);

const request = {
  get: http.get,
  post: http.post,
  put: http.put,
  delete: http.delete,
};

export default request;
