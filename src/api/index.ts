import axios from "axios";

const customAxios = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  withCredentials: true, // 쿠키 자동 포함 설정
  timeout: 3000,
});

customAxios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

customAxios.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    const errorMessage = "This is rsponse error message";
    const { config, response } = error;
    return Promise.reject({
      config: config,
      message: errorMessage,
      response: response,
      ...error,
    });
  }
);

export default customAxios;
