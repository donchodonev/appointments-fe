import { SilentRequest } from "@azure/msal-browser";
import axios, { AxiosHeaders, AxiosInstance, AxiosRequestConfig } from "axios";
import { msalConfig, msalInstance } from "../authConfig";

const getAxios = (): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
  });

  const augmentRequestHeaders = async (config: AxiosRequestConfig) => {
    const accessTokenRequest: SilentRequest = {
      scopes: [process.env.REACT_APP_SCOPE as string],
      account: msalInstance.getAllAccounts()[0],
      authority: msalConfig.auth.authority,
    };

    console.log(accessTokenRequest);
    console.log(msalInstance.getAllAccounts());

    const token = await (
      await msalInstance.acquireTokenSilent(accessTokenRequest)
    ).accessToken;

    (config.headers as AxiosHeaders).setContentType("application/json");
    (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`);

    return config;
  };

  axiosInstance.interceptors.request.use(augmentRequestHeaders);

  return axiosInstance;
};

export default getAxios;
