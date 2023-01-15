import { useMsal } from "@azure/msal-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { AxiosHeaders, AxiosInstance } from "axios";

const useAxios = (): AxiosInstance => {
  const { instance, accounts } = useMsal();
  const navigate = useNavigate();
  const [token, setToken] = useState("");

  if (!token) {
    const accessTokenRequest = {
      scopes: [`api://${process.env.REACT_APP_SERVER_ID}/access_as_user`],
      account: accounts[0],
    };

    instance
      .acquireTokenSilent(accessTokenRequest)
      .then((res) => {
        console.log("SET ACCESS TOKEN", res.accessToken);
        setToken(res.accessToken);
      })
      .catch(() => {
        console.log("NAVIGATE TO LOGIN");
        navigate("/login");
      });
  }

  const headers = new AxiosHeaders();
  headers.set("Authorization", `Bearer ${token}`);
  headers.set("Content-Type", "application/json");

  const axiosInstance = axios.create({
    baseURL: "https://localhost:7092",
    headers,
  });

  return axiosInstance;
};

export default useAxios;
