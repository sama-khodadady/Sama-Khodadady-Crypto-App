import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (request) => {
    request.headers["x-cg-demo-api-key"] = `${import.meta.env.VITE_API_KEY}`;
    // console.log(request);
    return request;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log({ error });
    if (error.name !== "AbortError") {
      return Promise.reject(error?.response);
    }
  }
);

export default api;
