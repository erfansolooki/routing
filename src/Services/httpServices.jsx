import axios from "axios";

axios.defaults.baseURL = "https://exam.pishgamanasia.com/webapi";

const http = {
  post: axios.post,
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
};

export default http;
