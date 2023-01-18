import axios, { AxiosHeaders, AxiosInstance, AxiosRequestConfig } from "axios";
import { msalInstance } from "../authConfig";

const getAxios = (): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
  });

  const augmentRequestHeaders = async (config: AxiosRequestConfig) => {
    const accessTokenRequest = {
      scopes: [`api://${process.env.REACT_APP_SERVER_ID}/access_as_user`],
      account: msalInstance.getAllAccounts()[0],
    };

    const token = await (
      await msalInstance.acquireTokenSilent(accessTokenRequest)
    ).accessToken;

    (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`);
    (config.headers as AxiosHeaders).set("Content-Type", "application/json");

    return config;
  };

  axiosInstance.interceptors.request.use(augmentRequestHeaders);

  return axiosInstance;
};

export default getAxios;
